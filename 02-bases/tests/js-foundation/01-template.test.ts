import { emailTemplate } from "../../src/js-foundation/01-template";

describe("js-foundation/01-template.ts", () => {
  it("should contain a greeting", () => {
    //    Assert
    expect(emailTemplate).toContain("Hi");
  });

  it("should contain {{name}} and {{orderId}}", () => {
    //    Assert
    expect(emailTemplate).toContain("{{name}}");
    expect(emailTemplate).toContain("{{orderId}}");
  });
});
