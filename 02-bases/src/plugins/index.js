const { getUUID } = require("../plugins/get-uuid.plugin.js");
const { getAge } = require("../plugins/get-age.plugin.js");
const { httpClient } = require("../plugins/http-client.plugin.js");

// Re-exporting plugins for easier access
// This allows importing from a single file instead of multiple files

module.exports = { getUUID, getAge, httpClient };
