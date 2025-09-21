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
  if (!user) {
    return callback(new Error(`USER with id ${id} not found`));
  }
  return callback(null, user);
}

getUserById(1, (error, user) => {
  if (error) {
    throw new Error(error);
  }
  console.log(user);
});
