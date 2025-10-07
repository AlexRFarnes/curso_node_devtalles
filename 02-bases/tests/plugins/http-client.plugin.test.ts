import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe("plugins/http-client.plugin.test.ts", () => {
  it("should return a valid response", async () => {
    const response = await httpClientPlugin.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    expect(response).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });

  it("should have POST, PUT, DELETE methods", () => {
    expect(typeof httpClientPlugin.post).toBe("function");
    expect(typeof httpClientPlugin.put).toBe("function");
    expect(typeof httpClientPlugin.delete).toBe("function");
  });
});
