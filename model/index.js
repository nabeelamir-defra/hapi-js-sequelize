import River from "./River.js";
import Catchment from "./Catchment.js";

River.belongsTo(Catchment, {
  foreignKey: {
    name: "catchment_id",
  },
});
Catchment.hasMany(River, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export { River, Catchment };
