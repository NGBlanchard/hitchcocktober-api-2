const path = require('path')
const express = require('express')
const xss = require('xss')
const MoviesService = require('./movies-service')


const moviesRouter = express.Router()
const jsonParser = express.json()

const serializeMovie = movie => ({
  id: movie.id,
  title: xss(movie.title),
  overview: xss(movie.overview),
  vote_count: movie.vote_count,
  poster_path: xss(movie.poster_path),
  popularity: movie.popularity,
  vote_average: movie.vote_average,
  release_date: movie.release_date,
})

moviesRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    MoviesService.getAllMovies(knexInstance)
      .then(movies => {
        res.json(movies.map(serializeMovie))
      })
      .catch(next)
  })
  .post(jsonParser, (req, res, next) => {
    const { id, title, overview, vote_count, poster_path, popularity, vote_average, release_date } = req.body
    const newMovie = { id, title, overview, vote_count, poster_path, popularity, vote_average, release_date }

    for (const [key, value] of Object.entries(newMovie))
      if (value == null)
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` }
        })

    newMovie.date_created = date_created;

    MoviesService.insertMovie(
      req.app.get('db'),
      newMovie
    )
      .then(movie => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${movie.id}`))
          .json(serializeMovie(movie))
      })
      .catch(next)
  })

moviesRouter
  .route('/:movie_id')
  .all((req, res, next) => {
    MoviesService.getById(
      req.app.get('db'),
      req.params.movie_id
    )
      .then(movie => {
        if (!movie) {
          return res.status(404).json({
            error: `Movie doesn't exist`
          })
        }
        res.movie = movie
        next()
      })
      .catch(next)
  })
  .get((req, res, next) => {
    res.json(serializeMovie(res.movie))
  })
  .delete((req, res, next) => {
    MoviesService.deleteMovie(
      req.app.get('db'),
      req.params.movie_id
    )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
  })
  .patch(jsonParser, (req, res, next) => {
    const { content, date_created } = req.body
    const movieToUpdate = { content, date_created }

    const numberOfValues = Object.values(movieToUpdate).filter(Boolean).length
    if (numberOfValues === 0)
      return res.status(400).json({
        error: {
          message: `Request body must contain either 'content' or 'date_created'`
        }
      })

    MoviesService.updateMovie(
      req.app.get('db'),
      req.params.movie_id,
      movieToUpdate
    )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
  })

module.exports = moviesRouter