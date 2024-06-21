import { River, Catchment } from "../model/index.js";

export default [
  {
    method: "GET",
    path: "/catchment",
    handler: async (request, h) => {
      try {
        const catchments = await Catchment.findAll({
          include: River,
        });
        return h.response(catchments).code(200);
      } catch (error) {
        console.error("Error fetching catchments:", error);
        return h.response({ error: "Unable to fetch catchments" }).code(500);
      }
    },
  },
];
