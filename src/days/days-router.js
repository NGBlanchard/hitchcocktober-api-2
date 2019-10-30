const express = require('express')
const path = require('path')
const DaysService = require('./days-service')
const daysRouter = express.Router()
const jsonBodyParser = express.json()
const jsonParser = express.json()
const xss = require('xss')

const { requireAuth } = require('../middleware/jwt-auth')

const serializeDay = day => ({
      id: day.id,
      day: day.day,
      movie_id: day.movie_id,
      movie: xss(day.movie),
      meal: day.meal,
      rating: day.rating,
      user_id: day.user_id,
})

daysRouter
.route('/')
.get((req, res, next) => {
  const knexInstance = req.app.get('db')
  DaysService.getAllDays(knexInstance)
    .then(days => {
      res.json(days.map(serializeDay))
    })
    .catch(next)
})
.post(jsonParser, (req, res, next) => {
  const { day, movie_id, movie, rating, user_id  } = req.body
  const newDay = { day, movie_id, movie, rating, user_id }

  // for (const [key, value] of Object.entries(newDay)) {
  //   if (value == null) {
  //     return res.status(400).json({
  //       error: { message: `Missing '${key}' in request body` }
  //     })
  //   }
  // }   

  DaysService.insertDay(
    req.app.get('db'),
    newDay
  )
    .then(day => {
      res
        .status(201)
        .location(path.posix.join(req.originalUrl, `/${day.id}`))
        .json(serializeDay(day))
    })
    .catch(next)
})

  daysRouter
  .route('/:day_id')
  // .all(requireAuth)
  .all(checkDayExists)
  .all((req, res, next) => {
    DaysService.getById(
      req.app.get('db'),
      req.params.day_id
    )
      .then(day => {
        if (!day) {
          return res.status(404).json({
            error: { message: `Day doesn't exist` }
          })
        }
        res.day = day
        next()
      })
      .catch(next)
  })
  .get((req, res, next) => {
    res.json(serializeDay(res.day))
  })
  .delete((req, res, next) => {
    DaysService.deleteDay(
      req.app.get('db'),
      req.params.day_id
    )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
  })
  .patch(jsonParser, (req, res, next) => {   
    const { id, day, movie_id, movie, meal, rating, user_id  } = req.body
    const dayToUpdate = { id, day, movie_id, movie, meal, rating, user_id }
  
    DaysService.updateDays(
      req.app.get('db'),
      req.params.day_id,
      dayToUpdate,
    )
      .then(numRowsAffected => {
        res.status(204).end()
      })
      .catch(next)
  })

async function checkDayExists(req, res, next) {
  try {
    const day = await DaysService.getById(
      req.app.get('db'),
      req.params.day_id
    )
    if (!day)
      return res.status(404).json({
        error: `Day doesn't exist`
      })
    res.day = day
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = daysRouter



