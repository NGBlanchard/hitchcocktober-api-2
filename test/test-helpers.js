const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

function makeUsersArray() {
  return [
    {
    id: 1,
    user_name: 'Archimboldi', 
    password: '$2a$12$VsD.W/HXu8ae0Wih8Vscr.CYSefcj2fCsByOBCxWp1UISXuZaaSV.',
    date_created: new Date('2029-01-22T16:28:32.615Z'),
    oct1: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct2: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct3: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct4: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct5: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct6: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct7: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct8: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct9: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct10: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct11: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct12: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct13: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct14: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct15: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct16: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct17: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct18: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct19: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct20: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct21: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct22: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct23: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct24: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct25: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct26: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct27: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct28: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct29: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct30: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        },
    oct31: {
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null,
        "seen": false,
        "poster_path": ""
        }
      },
      {id: 2,
        user_name: 'UserName', 
        password: '$2a$12$VsD.W/HXu8ae0Wih8Vscr.CYSefcj2fCsByOBCxWp1UISXuZaaSV.',
        date_created: new Date('2029-01-22T16:28:32.615Z'),
        oct1: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct2: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct3: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct4: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct5: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct6: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct7: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct8: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct9: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct10: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct11: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct12: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct13: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct14: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct15: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct16: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct17: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct18: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct19: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct20: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct21: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct22: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct23: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct24: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct25: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct26: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct27: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct28: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct29: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct30: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            },
        oct31: {
            "movie_id": null,
            "movie": "",
            "meal": "",
            "rating": null,
            "seen": false,
            "poster_path": ""
            }
          },
  ]
}

// function makeMaliciousCourse(user) {
//   const maliciousCourse = {
//     id: 911,
//     title: 'How-to',
//     description: 'Naughty naughty very naughty <script>alert("xss");</script>',
//     notes: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
//     readings: 'uh oh',
//     topic: 'Writing',
//     date_created: new Date(),
//     author: user.id,
//   }
//   const expectedCourse = {
//     ...makeExpectedCourse([user], maliciousCourse),
//     description: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
//     notes: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`,
//   }
//   return {
//     maliciousCourse,
//     expectedCourse,
//   }
// }
function makeUsersFixtures() {
  const testUsers = makeUsersArray()
  return { testUsers }
}

function cleanTables(db) {
  return db.transaction(trx =>
    trx.raw(
      `TRUNCATE
        hitchcocktober_users,
      `
    )
    .then(() =>
      Promise.all([
        trx.raw(`ALTER SEQUENCE hitchcocktober_users_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('hitchcocktober_users_id_seq', 0)`),
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
// function seedCoursesTables(db, users, courses, comments=[]) {
//   // use a transaction to group the queries and auto rollback on any failure
//   return db.transaction(async trx => {
//     await seedUsers(trx, users)
//     await trx.into('hitchcocktober_courses').insert(courses)
//     // update the auto sequence to match the forced id values
//     await trx.raw(
//       `SELECT setval('hitchcocktober_courses_id_seq', ?)`,
//       [courses[courses.length - 1].id],
//     )
//     // only insert comments if there are some, also update the sequence counter
//     if (comments.length) {
//       await trx.into('hitchcocktober_comments').insert(comments)
//       await trx.raw(
//         `SELECT setval('hitchcocktober_comments_id_seq', ?)`,
//         [comments[comments.length - 1].id],
//       )
//     }
//   })
// }
// function seedMaliciousCourse(db, user, course) {
//   return seedUsers(db, [user])
//     .then(() =>
//       db
//         .into('hitchcocktober_courses')
//         .insert([course])
//     )
// }

function makeAuthHeader(user, secret = process.env.JWT_SECRET) {
  const token = jwt.sign({ user_id: user.id }, secret, {
    subject: user.user_name,
    algorithm: 'HS256',
  })
  return `Bearer ${token}`
}

module.exports = {
  makeUsersFixtures,
  makeUsersArray,
  cleanTables,
  makeAuthHeader,
  seedUsers,
}