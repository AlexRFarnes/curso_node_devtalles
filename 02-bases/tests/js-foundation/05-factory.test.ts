import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("js-foundation/05-factory.ts", () => {
  const getUUID = () => "12345";
  const getAge = () => 35;

  it("should return a function", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });

    expect(makePerson).toBeInstanceOf(Function);
  });

  it("should return a person", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });

    const person = makePerson({ name: "John", birthdate: "1985-10-21" });

    expect(person).toEqual({
      id: "12345",
      name: "John",
      birthdate: "1985-10-21",
      age: 35,
    });
  });
});
