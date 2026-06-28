const { v4: uuidv4 } = require("uuid");

// getUUID is a function that returns a UUID

export const getUUID = () => {
  return uuidv4();
};

module.exports = {
  getUUID,
};
