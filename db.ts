import { Sequelize } from "sequelize";

// Passing parameters separately (other dialects)
const SequelizeConnection = new Sequelize("mobixat", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log,
});
export default SequelizeConnection;
