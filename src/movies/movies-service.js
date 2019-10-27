const MoviesService = {
  getAllMovies(knex) {
    return knex.select('*').from('hitchcocktober_movies')
  },

  insertMovie(knex, newMovie) {
    return knex
      .insert(newMovie)
      .into('hitchcocktober_movies')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

  getById(knex, id) {
    return knex
      .from('hitchcocktober_movies')
      .select('*')
      .where('id', id)
      .first()
  },

  deleteMovie(knex, id) {
    return knex('hitchcocktober_movies')
      .where({ id })
      .delete()
  },

  updateMovie(knex, id, newMovieFields) {
    return knex('hitchcocktober_movies')
      .where({ id })
      .update(newMovieFields)
  },
}

module.exports = MoviesService
