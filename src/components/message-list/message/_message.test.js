import { Message } from "./message";
import { renderWrapper } from "../../../utils/test-utils";

const msg = { author: "Bots", text: "Hello", date: JSON.stringify(new Date()) };

describe("Testing component Message", () => {
  it("Test component render", () => {
    const { container } = renderWrapper(<Message message={msg} />);

    const nodes = [...container.querySelectorAll(".MuiTypography-root")];
    expect(nodes.length).toBe(2);
    expect(nodes[0]).toHaveTextContent("Bots");
    expect(nodes[1]).toHaveTextContent("Hello");
  });
});
