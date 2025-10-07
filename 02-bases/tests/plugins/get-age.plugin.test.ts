import { getAge } from "../../src/plugins/get-age.plugin";

describe("plugins/get-age.plugin.test.ts", () => {
  it("should return the age of a person", () => {
    const age = getAge("1990-01-01");
    expect(age).toBe(35);
  });

  it("should return current age", () => {
    const birthdate = "1990-03-04";
    const age = getAge(birthdate);
    const expectedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toBe(expectedAge);
  });

  it("should return 0", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);
    const birthdate = "1995-03-04";
    const age = getAge(birthdate);
    expect(age).toBe(0);
  });
});
