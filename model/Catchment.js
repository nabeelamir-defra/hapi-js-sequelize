import { Model, DataTypes } from "sequelize";
import { sequelize } from "../dbconfig.js";

class Catchment extends Model {}
Catchment.init(
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
  {
    sequelize,
    modelName: "Catchment",
    tableName: "rcr_catchment",
    underscored: true,
  }
);

export default Catchment;
