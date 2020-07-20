const databaseConfig = {
  dialect: 'postgres',
  host: 'ruby.db.elephantsql.com',
  username: 'jmodlaxw',
  password: 'z9m9-v7nM69EuTN97FyNK1MzLgMQw_od',
  database:  'jmodlaxw',
  // url: process.env.CONNSTRING,
  define: {
    timestamps: false,
    underscored: false,
  },
  // query:{
  //   raw: true
  // }
};
module.exports = databaseConfig