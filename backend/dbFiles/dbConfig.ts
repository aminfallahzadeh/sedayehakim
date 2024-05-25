// mssql imports
import { ConnectionPool, config as SqlConfig } from "mssql";

const config: SqlConfig = {
  user: "new",
  password: "123",
  server: "171.22.24.221",
  database: "Hakim_DB",
  options: {
    trustServerCertificate: true,
    trustedConnection: true,
    enableArithAbort: true,
  },
  port: 1422,
};

const poolPromise = new ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => {
    console.log("Database Connection Failed! Bad Config: ", err);
    throw err;
  });

export { poolPromise };
