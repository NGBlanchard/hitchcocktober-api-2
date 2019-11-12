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
  })
  })
