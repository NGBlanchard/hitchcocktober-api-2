const xss = require('xss')
const bcrypt = require('bcryptjs')


const DaysService = {

  hasDayWithDayName(db, day_name) {
    return db('hitchcocktober_days')
      .where({ day_name })
      .first()
      .then(day => !!day)
  },

  insertDay(db, newDay) {
    return db
    .insert(newDay)
    .into('hitchcocktober_days')
    .returning('*')
    .then(([day]) => day)
  },

  getAllDays(knex) {
    return knex.select('*').from('hitchcocktober_days')
  },

  insertDay(knex, newDay) {
    return knex
      .insert(newDay)
      .into ('hitchcocktober_days')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

  getById(knex, id) {
    return knex
      .from('hitchcocktober_days')
      .select('*')
      .where('id', id)
      .first()
  },

  updateDays(knex, id, newDayFields) {
    return knex('hitchcocktober_days')
      .where({ id })
      .update( newDayFields )
  },

  deleteDay(knex, id) {
    return knex('hitchcocktober_days')
    .where({ id })
    .delete()
  },


  serializeDay(day) {
    return {
      id: day.id,
      day: day.day,
      movie_id: day.movie_id,
      movie: day.movie,
      meal: day.meal,
      rating: day.rating,
      user_id: day.user_id,
    }
  },
  
}

module.exports = DaysService;

