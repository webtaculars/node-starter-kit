const Schema = require("../models/schema");

const get = (criteria, projection, options) => {
  return Schema.find(criteria, projection, options);
};

const save = data => {
  console.log(data);
  return Schema.create(data);
};

module.exports = {
  get: get,
  save: save
};
