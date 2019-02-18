const { save, get } = require("../services/schema");

const postMethod = async data => {
  try {
    return await save(data);
  } catch (err) {
    return err;
  }
};
const getMethod = async payload => {
  let criteria = payload;
  let projections = {};
  let options = {};
  return await get(criteria, projections, options);
};

module.exports = {
  getMethod: getMethod,
  postMethod: postMethod
};
