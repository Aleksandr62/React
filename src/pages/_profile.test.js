import { renderWrapper } from "../utils/test-utils";
import { Profile } from "./profile";

let state = {
  user: {
    user: {
      id: 1,
      email: "asa@mail.ru",
      firstName: "Asa",
      lastName: "asa",
      created_at: null,
      updated_at: null
    },
    status: "idle",
    error: null,
    reactions: 0
  }
};

describe("Testing page Profile", () => {
  it("Test page render Profile", () => {
    const { container } = renderWrapper(<Profile />, {
      preloadedState: state
    });

    const nodes = [...container.querySelectorAll(".MuiInput-input")];

    expect(nodes.length).toBe(2);
    expect(nodes[0].value).toBe("Asa");
    expect(nodes[1].value).toBe("asa@mail.ru");
  });
});
