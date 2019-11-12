const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe.only('Protected endpoints', function() {
  let db
  
  const {
    testUsers,
  } = helpers.makeUsersFixtures()
  
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
  
  beforeEach('insert users', () =>
    helpers.seedUsersTables(
      db,
      testUsers,
    )
  )
  const protectedEndpoints = [
    {
      name: 'GET /users/:user_id',
      path: '/users/1',
      method: supertest(app).get,
    },
    {
      name: 'POST /users',
      path: '/users',
      method: supertest(app).post,
    },
  ]
})