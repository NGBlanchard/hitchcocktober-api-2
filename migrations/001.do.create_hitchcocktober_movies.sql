CREATE TABLE hitchcocktober_movies (
  id INTEGER PRIMARY KEY NOT NULL,
  title TEXT NOT NULL,
  overview TEXT,
  vote_count INTEGER,
  poster_path VARCHAR(1000),
  popularity INTEGER,
  vote_average INTEGER,
  release_date VARCHAR (65)
);