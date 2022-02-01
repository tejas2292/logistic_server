//connect db

//local setup
// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "password",
//   DB: "logistic",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };
// module.exports = {
//   HOST: "localhost",
//   USER: "newuser",
//   PASSWORD: "NEWpass@123$$",
//   DB: "virtue",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// };

//---------------------------------------------------------------------------------------------------------------------------------------

// //dev server setup
module.exports = {
    HOST: "174.138.35.208",
    USER: "myuser",
    PASSWORD: "mypass",
    DB: "logistic_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
