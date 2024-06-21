import { River, Catchment } from "../model/index.js";

export default [
  {
    method: "GET",
    path: "/river",
    handler: async (request, h) => {
      try {
        const rivers = await River.findAll();
        return h.response(rivers).code(200);
      } catch (error) {
        console.error("Error fetching rivers:", error);
        return h.response({ error: "Unable to fetch rivers" }).code(500);
      }
    },
  },
  {
    method: "GET",
    path: "/river/{id}",
    handler: async (request, h) => {
      try {
        const river = await River.findByPk(request.params.id);
        if (river !== null) {
          river.name;
        }
        console.log(river.name); // No typings
        return h.response(river).code(200);
      } catch (error) {
        console.error("Error fetching river:", error);
        return h.response({ error: "Unable to fetch river" }).code(500);
      }
    },
  },
];
