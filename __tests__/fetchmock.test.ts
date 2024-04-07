describe("", () => {
  it("", async () => {
    //@ts-ignore
    fetch.mockResponse(JSON.stringify({ hello: "world" }));
    const response = await fetch("hi");
    const data = await response.json();
    expect(data).toEqual({ hello: "world" });
  });
});
