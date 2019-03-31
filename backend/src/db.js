// This file connects to the remnote prisma DB and givues us the ability to query it with JS
const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISM_SECRET,
  debug: false,
});

module.exports = db;
