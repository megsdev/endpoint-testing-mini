const fetch = require("node-fetch");

it("should return status 200", async () => {
  const response = await fetch("http://localhost:4000/api/students");
  const json = await response.json();

  expect(response.status).toBe(200);
  expect(json.length).toBeGreaterThan(0);
  console.log(json);
});
