// Instructions
// Create a TodoLists component that renders a list of TodoList components

const TodoLists = () => {
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <div style={{ background: "#74b9ff", padding: 20, marginTop: 20 }}>
        <h2 style={{ color: "white" }}>To Do List</h2>
        <div style={{ display: "flex", gap: "16px" }}>
          <input
            type="text"
            placeholder="Please enter a todo"
            style={{ width: "400px", padding: 10, border: "none" }}
          />
          <button
            style={{
              fontSize: 16,
              padding: "0 16px",
              backgroundColor: "#0984e3",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      </div>

      <div style={{ background: "#dfe6e9", padding: "20px 10px" }}>
        <ul>
          <li>
            Hit the gym
            <button
              style={{
                marginLeft: 10,
                background: "#00b894",
                color: "white",
                border: "none",
                padding: 5,
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Complete
            </button>
            <button
              style={{
                marginLeft: 10,
                background: "#d63031",
                color: "white",
                border: "none",
                padding: 5,
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </li>
          <li className="checked">Pay bills</li>
          <li>
            <del>Meet Princess</del>
          </li>
          <li>Buy eggs</li>
          <li>Read a book</li>
          <li>Organize office</li>
        </ul>
      </div>
    </div>
  );
};

export default TodoLists;
