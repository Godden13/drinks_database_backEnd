  const swaggerJsdoc = require("swagger-jsdoc");

  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Drinks Express API documentation with swagger",
        version: "0.1.0",
        description:
          "This is a Drinks Crud API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Chriss Godden",
          email: "chrissgodden@gmail.com",
        },
      },
      servers: [
        {
          url: `http://localhost:${process.env.PORT || '3000'}`,
        },
      ],
    },
    apis: ["./routes/*.js"],
  };

  const specs = swaggerJsdoc(options);

module.exports = specs;