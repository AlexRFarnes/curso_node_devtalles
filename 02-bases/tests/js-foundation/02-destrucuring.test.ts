import { characters } from "../../src/js-foundation/02-destructuring";

describe("js-foundation/02-destructuring.ts", () => {
  it("should be an array", () => {
    //    Assert
    expect(Array.isArray(characters)).toBe(true);
  });

  it("should contain Flash, Superman, Green Lantern, Batman", () => {
    //    Assert
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
    expect(characters).toContain("Green Lantern");
    expect(characters).toContain("Batman");
  });

  it("should test first element is Flash", () => {
    //    Assert
    expect(characters[0]).toBe("Flash");
  });

  it("should test last element is Batman", () => {
    //    Assert
    expect(characters[characters.length - 1]).toBe("Batman");
  });
});
