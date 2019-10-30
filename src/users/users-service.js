const xss = require('xss')
const bcrypt = require('bcryptjs')

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const UsersService = {

  hasUserWithUserName(db, user_name) {
    return db('hitchcocktober_users')
      .where({ user_name })
      .first()
      .then(user => !!user)
  },

  insertUser(db, newUser) {
    return db
    .insert(newUser)
    .into('hitchcocktober_users')
    .returning('*')
    .then(([user]) => user)
  },

  getAllUsers(knex) {
    return knex.select('*').from('hitchcocktober_users')
  },

  insertUser(knex, newUser) {
    return knex
      .insert(newUser)
      .into ('hitchcocktober_users')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

  getById(knex, id) {
    return knex
      .from('hitchcocktober_users')
      .select('*')
      .where('id', id)
      .first()
  },

 
  updateUsers(knex, id, newUserFields) {
    return knex('hitchcocktober_users')
      .where({ id })
      .update(newUserFields)
  },

  deleteUser(knex, id) {
    return knex('hitchcocktober_users')
    .where({ id })
    .delete()
  },

  validatePassword(password) {
  if (password.length < 8) {
    return 'Password must be longer than 8 characters'
  }
  if (password.length > 72) {
    return 'Password must be less than 72 characters'
  }
  if (password.startsWith(' ') || password.endsWith(' ')) {
    return 'Password must not start or end with empty spaces'
  }
  if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
    return 'Password must contain 1 upper case, lower case, number and special character'
  }
  return null
  },

  hashPassword(password) {
    return bcrypt.hash(password, 12)
  },
  
  serializeUser(user) {
    return {
      id: user.id,
      user_name: xss(user.user_name),
      date_created: new Date(user.date_created),
      oct1: user.oct1, oct2: user.oct2, oct3: user.oct3, oct4: user.oct4,
      oct5: user.oct5, oct6: user.oct6, oct7: user.oct7, oct8: user.oct8,
      oct9: user.oct9, oct10: user.oct10, oct11: user.oct11, oct12: user.oct12,
      oct13: user.oct13, oct14: user.oct14, oct15: user.oct15, oct16: user.oct16,
      oct17: user.oct17, oct18: user.oct18, oct19: user.oct19, oct20: user.oct20,
      oct21: user.oct21, oct22: user.oct22, oct23: user.oct23, oct24: user.oct24,
      oct25: user.oct25, oct26: user.oct26, oct27: user.oct27, oct28: user.oct28,
      oct29: user.oct29, oct30: user.oct30, oct31: user.oct31
    }
  },
  
}

module.exports = UsersService

