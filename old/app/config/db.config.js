// server testing 

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


// local testing 


// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "",
//     DB: "logistic_db",
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   }; 

