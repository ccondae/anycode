import { render, screen } from "@testing-library/react";

describe("react component test", () => {
  it("testing redner method working", () => {
    render(<div>helloworld</div>);
    expect(screen.getByText("helloworld"));
  });
});
