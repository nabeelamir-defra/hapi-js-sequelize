import { Model, DataTypes } from "sequelize";
import { sequelize } from "../dbconfig.js";

// One way of defining models
class River extends Model {}
River.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "last_modified",
    },
  },
  { sequelize, modelName: "River", tableName: "rcr_river", underscored: true }
);

// Another way of defining models
// const River = sequelize.define(
//   "River",
//   {
//     name: { type: DataTypes.STRING },

//     createdAt: {
//       type: DataTypes.DATE,
//       field: "created",
//     },
//     updatedAt: {
//       type: DataTypes.DATE,
//       field: "last_modified",
//     },
//   },
//   {
//     timestamps: false,
//     tableName: "rcr_river",
//   }
// );

export default River;
