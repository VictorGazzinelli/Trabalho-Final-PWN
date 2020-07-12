module.exports = {
    dialect: 'postgres',
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database:  process.env.DATABASE,
    url: 'postgres://jmodlaxw:z9m9-v7nM69EuTN97FyNK1MzLgMQw_od@ruby.db.elephantsql.com:5432/jmodlaxw',
    define: {
      timestamps: false,
      underscored: false,
    },
  };