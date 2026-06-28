const getAgePlugin = require("get-age");

const getAge = (birthdate: string) => {
  if (!birthdate) throw new Error("Birthdate is required");

  return getAgePlugin(birthdate);
  // return new Date().getFullYear() - new Date(birthdate).getFullYear();
};

module.exports = {
  getAge,
};
