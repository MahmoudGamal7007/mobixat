const { Sequelize, DataTypes } = require("sequelize");
import SequelizeConnection from "../db";
import {
  SpecName_MaxLength,
  SpecName_MinLength,
} from "../libs/validation-constants/index.lib";
const Specification = SequelizeConnection.define(
  "Specification",
  {
    // Model attributes are defined here
    en_spec_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: "The uniqueness name constraint for the English spec name",
        msg: `Sorry, the English spec name must be unique`,
      },
      validate: {
        len: {
          args: [SpecName_MinLength, SpecName_MaxLength],
          msg: `The English spec name length must be between ${SpecName_MinLength} and ${SpecName_MaxLength}`,
        },
      },
    },
    ar_spec_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: "The uniqueness name constraint for the Arabic spec name",
        msg: `Sorry, the Arabic spec name must be unique`,
      },
      validate: {
        len: {
          args: [SpecName_MinLength, SpecName_MaxLength],
          msg: `The Arabic spec name length must be between ${SpecName_MinLength} and ${SpecName_MaxLength}`,
        },
      },
    },
    absolute_spec_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: "The uniqueness name constraint for the Absolute spec name",
        msg: `Sorry, the Absolute spec name must be unique`,
      },
      validate: {
        len: {
          args: [SpecName_MinLength, SpecName_MaxLength],
          msg: `The Absolute spec name length must be between ${SpecName_MinLength} and ${SpecName_MaxLength}`,
        },
      },
    },
  },
  {
    tableName: "Specifications",
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
export default Specification;
