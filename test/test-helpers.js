const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeUsersArray() {
  return [
    {
      id: 2,
      user_name: 'test-user-2',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
      oct1: 'stuff',
      oct2: 'stuff',
      oct3: 'stuff',
      oct4: 'stuff',
      oct5: 'stuff',
      oct6: 'stuff',
      oct7: 'stuff',
      oct8: 'stuff',
      oct9: 'stuff',
      oct10: 'stuff',
      oct11: 'stuff',
      oct12: 'stuff',
      oct13: 'stuff',
      oct14: 'stuff',
      oct15: 'stuff',
      oct16: 'stuff',
      oct17: 'stuff',
      oct18: 'stuff',
      oct19: 'stuff',
      oct20: 'stuff',
      oct21: 'stuff',
      oct22: 'stuff',
      oct23: 'stuff',
      oct24: 'stuff',
      oct25: 'stuff',
      oct26: 'stuff',
      oct27: 'stuff',
      oct28: 'stuff',
      oct29: 'stuff',
      oct30: 'stuff',
      oct31: 'stuff'
    },
    {
      id: 1,
      user_name: 'test-user-1',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
      oct1: 'stuff',
      oct2: 'stuff',
      oct3: 'stuff',
      oct4: 'stuff',
      oct5: 'stuff',
      oct6: 'stuff',
      oct7: 'stuff',
      oct8: 'stuff',
      oct9: 'stuff',
      oct10: 'stuff',
      oct11: 'stuff',
      oct12: 'stuff',
      oct13: 'stuff',
      oct14: 'stuff',
      oct15: 'stuff',
      oct16: 'stuff',
      oct17: 'stuff',
      oct18: 'stuff',
      oct19: 'stuff',
      oct20: 'stuff',
      oct21: 'stuff',
      oct22: 'stuff',
      oct23: 'stuff',
      oct24: 'stuff',
      oct25: 'stuff',
      oct26: 'stuff',
      oct27: 'stuff',
      oct28: 'stuff',
      oct29: 'stuff',
      oct30: 'stuff',
      oct31: 'stuff'
    },
    {
      id: 3,
      user_name: 'test-user-3',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
      oct1: 'stuff',
      oct2: 'stuff',
      oct3: 'stuff',
      oct4: 'stuff',
      oct5: 'stuff',
      oct6: 'stuff',
      oct7: 'stuff',
      oct8: 'stuff',
      oct9: 'stuff',
      oct10: 'stuff',
      oct11: 'stuff',
      oct12: 'stuff',
      oct13: 'stuff',
      oct14: 'stuff',
      oct15: 'stuff',
      oct16: 'stuff',
      oct17: 'stuff',
      oct18: 'stuff',
      oct19: 'stuff',
      oct20: 'stuff',
      oct21: 'stuff',
      oct22: 'stuff',
      oct23: 'stuff',
      oct24: 'stuff',
      oct25: 'stuff',
      oct26: 'stuff',
      oct27: 'stuff',
      oct28: 'stuff',
      oct29: 'stuff',
      oct30: 'stuff',
      oct31: 'stuff'
    },
    {
      id: 4,
      user_name: 'test-user-4',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
      oct1: 'stuff',
      oct2: 'stuff',
      oct3: 'stuff',
      oct4: 'stuff',
      oct5: 'stuff',
      oct6: 'stuff',
      oct7: 'stuff',
      oct8: 'stuff',
      oct9: 'stuff',
      oct10: 'stuff',
      oct11: 'stuff',
      oct12: 'stuff',
      oct13: 'stuff',
      oct14: 'stuff',
      oct15: 'stuff',
      oct16: 'stuff',
      oct17: 'stuff',
      oct18: 'stuff',
      oct19: 'stuff',
      oct20: 'stuff',
      oct21: 'stuff',
      oct22: 'stuff',
      oct23: 'stuff',
      oct24: 'stuff',
      oct25: 'stuff',
      oct26: 'stuff',
      oct27: 'stuff',
      oct28: 'stuff',
      oct29: 'stuff',
      oct30: 'stuff',
      oct31: 'stuff'
    },
  ]
}
function makeMoviesArray() {
  return [
    {
      id: 1,
      title: 'First test movie!',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      vote_count: 9,
      poster_path: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      popularity: 16,
      vote_average: 2,
      release_date: "whenever",
    },
    {
      id: 2,
      title: 'Second test movie!',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      vote_count: 88,
      poster_path: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      popularity: 16,
      vote_average: 3,
      release_date: "whenever",
    },
    {
      id: 3,
      title: 'Third test movie!',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      vote_count: 6,
      poster_path: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      popularity: 16,
      vote_average: 2,
      release_date: "whenever",
    },
    {
      id: 4,
      title: 'Fourth test movie!',
      overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      vote_count: 54,
      poster_path: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus consequuntur deserunt commodi, nobis qui inventore corrupti iusto aliquid debitis unde non.Adipisci, pariatur.Molestiae, libero esse hic adipisci autem neque ?',
      popularity: 16,
      vote_average: 9,
      release_date: "whenever",
    },
  ]
}
function makeExpectedUser(users) {
  return {
    id: users.id,
    user_name: users.user_name,
    password: users.overview,
    vote_count: users.vote_count,
    date_created: users.date_created,
    oct1: users.oct1,
    oct2: users.oct2,
    oct3: users.oct3,
    oct4: users.oct4,
    oct5: users.oct5,
    oct6: users.oct6,
    oct7: users.oct7,
    oct8: users.oct8,
    oct9: users.oct9,
    oct10: users.oct10,
    oct11: users.oct11,
    oct12: users.oct12,
    oct13: users.oct13,
    oct14: users.oct14,
    oct15: users.oct15,
    oct16: users.oct16,
    oct17: users.oct17,
    oct18: users.oct18,
    oct19: users.oct19,
    oct20: users.oct20,
    oct21: users.oct21,
    oct22: users.oct22,
    oct23: users.oct23,
    oct24: users.oct24,
    oct25: users.oct25,
    oct26: users.oct26,
    oct27: users.oct27,
    oct28: users.oct28,
    oct29: users.oct29,
    oct30: users.oct30,
    oct31: users.oct31,
  }
}

function makeMaliciousUser() {
  const maliciousUsers = {
      id: 911,
      user_name: 'How-to',
      password: 'password',
      date_created: new Date('2029-01-22T16:28:32.615Z'),
      oct1: 'Naughty naughty very naughty <script>alert("xss");</script>',
      oct2: 'stuff',
      oct3: 'stuff',
      oct4: 'stuff',
      oct5: 'stuff',
      oct6: 'stuff',
      oct7: 'stuff',
      oct8: 'stuff',
      oct9: 'stuff',
      oct10: 'stuff',
      oct11: 'stuff',
      oct12: 'stuff',
      oct13: 'stuff',
      oct14: 'stuff',
      oct15: 'stuff',
      oct16: 'stuff',
      oct17: 'stuff',
      oct18: 'stuff',
      oct19: 'stuff',
      oct20: 'stuff',
      oct21: 'stuff',
      oct22: 'stuff',
      oct23: 'stuff',
      oct24: 'stuff',
      oct25: 'stuff',
      oct26: 'stuff',
      oct27: 'stuff',
      oct28: 'stuff',
      oct29: 'stuff',
      oct30: 'stuff',
      oct31: 'stuff',
  }
  const expectedUser = {
    ...makeExpectedUser([user], maliciousUser),
    desoverviewcription: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    title: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`,
  }
  return {
    maliciousUdser,
    expectedUser,
  }
}
function makeUsersFixtures() {
  const testUsers = makeUsersArray()
  return { testUsers }
}
function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
        hitchcocktober_users
      `
    )
    .then(() =>
      Promise.all([
        trx.raw(`SELECT setval('hitchcocktober_users_id_seq', 1)`),

      ])
    )
  )
}
function seedUsers(db, users) {
  const preppedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  return db.into('hitchcocktober_users').insert(preppedUsers)
    .then(() =>
      // update the auto sequence to stay in sync
      db.raw(
        `SELECT setval('hitchcocktober_users_id_seq', ?)`,
        [users[users.length - 1].id],
      )
    )
}
function seedUsersTables(db, users) {

  return db.transaction(async trx => {
    await seedUsers(trx, users)
    await trx.into('hitchcocktober_users').insert(users)

    await trx.raw(
      `SELECT setval('hitchcocktober_users_id_seq', ?)`,
      [users[users.length - 1].id],
    )

  })
}
function seedMaliciousUser(db, user) {
  return seedUsers(db, [user])
    .then(() =>
      db
        .into('hitchcocktober_users')
        .insert([user])
    )
}

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.user_name,
    algorithm: 'HS256',
  })
  return `Bearer ${token}`
}

module.exports = {
  makeUsersArray,
  makeExpectedUser,
  makeMaliciousUser,
  makeUsersFixtures,
  cleanTables,
  seedUsersTables,
  seedMaliciousUser,
  makeAuthHeader,
  seedUsers,
}