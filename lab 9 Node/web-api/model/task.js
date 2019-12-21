const Sequelize = require("sequelize");
const db = require("../db/db.js");

module.exports = db.sequelize.define(
  "movie",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    genre: {
      type: Sequelize.STRING
    },
    movie_name: {
      type: Sequelize.STRING
    },
    director: {
      type: Sequelize.STRING
    },
    age_rating: {
      type: Sequelize.STRING
    },
    trailer_link: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATEONLY
    },
    casts:{
      type: Sequelize.STRING
    },
    runtime: {
      type: Sequelize.INTEGER
    },
    all_reply: {
      type: Sequelize.INTEGER
    },
    rating: {
      type: Sequelize.INTEGER
    },
    photo_link:{
      type: Sequelize.STRING
    },
    positive_reply: {
      type: Sequelize.INTEGER
    }
  },
  {
    timestamps: false
  }
);