import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("js-foundation/03-callbacks.st", () => {
  it("should return an error if the user does not exist", done => {
    // Arrange
    const id = 10;

    // Act
    getUserById(id, (err, user) => {
      // Assert
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });

  it("should return a user if the user exists", done => {
    // Arrange
    const id = 1;

    // Act
    getUserById(id, (err, user) => {
      // Assert
      expect(err).toBeUndefined();
      expect(user).toEqual({
        id: 1,
        name: "John Doe",
      });
      done();
    });
  });
});
