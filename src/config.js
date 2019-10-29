module.exports = {
  PORT: process.env.PORT || 9090,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'hitchcock://postgres@localhost/hitchcocktober',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'hitchcock://postgres@localhost/hitchcocktober-test',
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',

}
