describe("fetch mock의 동작을 확인합니다.", () => {
  it("mockResponse를 통하여 응답을 모킹합니다.", async () => {
    //@ts-ignore
    fetch.mockResponse(JSON.stringify({ hello: "world" }));
    const response = await fetch("hi");
    const data = await response.json();
    expect(data).toEqual({ hello: "world" });
  });
});
