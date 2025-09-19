const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

function getUserById(id, callback) {
  const user = users.find(user => user.id === id);
  if (user) {
    callback(null, user);
  } else {
    callback(new Error(`User with id ${id} not found`));
  }
}

getUserById(1, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log(user);
  }
});
