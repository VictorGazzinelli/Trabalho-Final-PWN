module.exports = {
    dialect: 'postgres',
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database:  process.env.DATABASE,
    url: process.env.CONNSTRING,
    define: {
      timestamps: false,
      underscored: false,
    },
  };