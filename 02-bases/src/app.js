// const { getAge, getUUID } = require("./plugins");

// const { emailTemplate } = require("./js-foundation/01-template.js");
// require("./js-foundation/02-destructuring.js");
// require("./js-foundation/03-callbacks.js");
// const { getUserById } = require("./js-foundation/04-arrow.js");
// const { buildMakePerson } = require("./js-foundation/05-factory.js");
const { getPokemonById } = require("./js-foundation/06-promises.js");

// const obj = { name: "Alex", birthdate: "1990-03-04" };

// const makePerson = buildMakePerson({ getUUID, getAge });

// const alex = makePerson(obj);

// console.log(alex);

getPokemonById(4)
  .then(data => console.log({ data }))
  .catch(err => console.error(err))
  .finally(() => console.log("Finally"));
