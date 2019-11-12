const knex = require('knex')
const bcrypt = require('bcryptjs')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe.only('Movies Endpoints', function() {
  let db

  const { testMovies } = helpers.makeUsersFixtures()
  const testMovie = testMovies[0]

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('cleanup', () => helpers.cleanTables(db))

  afterEach('cleanup', () => helpers.cleanTables(db))

  describe(`GET /movies`, () => {
    context(`Given no movies`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/movies')
          .expect(200, [])
      })
    })

    context('Given there are movies in the database', () => {
      beforeEach('insert movies', () =>
        helpers.seedMoviesTables(
          db,
          testMovies,
        )
      )

      it('responds with 200 and all of the movies', () => {
        const expectedMovies = testMovies.map(movie =>
          helpers.makeExpectedMovie(
            movie,
          )
        )
        return supertest(app)
          .get('/movies')
          .expect(200, expectedMovies)
      })
    })
  })

  describe(`GET /movies/:movie_id`, () => {
    context(`Given no movies`, () => {
      it(`responds with 404`, () => {
        const movieId = 123456
        return supertest(app)
          .get(`/movies/${movieId}`)
          .expect(404, { error: `Movie doesn't exist` })
      })
    })

    context('Given there are movies in the database', () => {
      beforeEach('insert movies', () =>
        helpers.seedMoviesTables(
          db,
          testMovies,
        )
      )

      it('responds with 200 and the specified movie', () => {
        const movieId = 2
        const expectedMovie = helpers.makeExpectedMovie(
          testMovies[movieId - 1],
        )

        return supertest(app)
          .get(`/movies/${movieId}`)
          .expect(200, expectedMovie)
      })
    })
  })
  })
