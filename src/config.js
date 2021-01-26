module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL:
    process.env.DATABASE_URL ||
    'postgresql://nautilus_shell:Fibonaccispiral89@localhost/spaced-repetition',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
  JWT_SECRET: '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG',
  JWT_EXPIRY: '3h'
  /*
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  /*
  JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
  */
};
