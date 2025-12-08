const { defineConfig } = require("@prisma/internals");

module.exports = defineConfig({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
      directUrl: process.env.DIRECT_URL,
    },
  },
});

