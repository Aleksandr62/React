import {
  conversationsSlice,
  fetchConversations,
  conversationAdded,
  conversationUpdated
} from "../conversations";

describe("Testing redux Conversation reducer", () => {
  it("Test action conversationAdded", () => {
    const prevState = {
      conversations: [],
      status: "idle",
      error: null
    };
    const state = conversationsSlice.reducer(
      prevState,
      conversationAdded({ id: 1, title: "test", value: "" })
    );
    expect(state.conversations[0].id).toBe(1);
    expect(state.conversations[0].title).toBe("test");
    expect(state.conversations[0]).toHaveProperty("value");
  });

  it("Test action fetchConversations", () => {
    const prevState = {
      conversations: [],
      status: "idle",
      error: null
    };
    const state = conversationsSlice.reducer(
      prevState,
      fetchConversations([
        { id: 1, title: "test", value: "" },
        { id: 2, title: "test2", value: "test1" },
        { id: 3, title: "test3", value: "test2" }
      ])
    );
    expect(state.conversations.length).toBe(3);
    expect(state.conversations[0].id).toBe(1);
    expect(state.conversations[1].title).toBe("test2");
    expect(state.conversations[2].value).toBe("test2");
  });

  it("Test action conversationUpdated", () => {
    const prevState = {
      conversations: [{ id: 2, title: "test2", value: "test1" }],
      status: "idle",
      error: null
    };
    const state = conversationsSlice.reducer(
      prevState,
      conversationUpdated({ id: 2, title: "test3", value: "test1" })
    );
    expect(state.conversations[0].title).toBe("test3");
  });
});
