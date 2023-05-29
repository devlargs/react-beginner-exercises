const styles = {
  keys: {
    display: "flex",
  },
  key: {
    background: "#b2bec3",
    height: "135px",
    width: "135px",
    display: "grid",
    fontSize: "3rem",
    placeContent: "center",
    border: "1px solid",
    cursor: "pointer",
  },
  input: {
    width: "504px",
    background: "#2d3436",
    color: "white",
    padding: 20,
    fontSize: 20,
  },
};

const Calculator = () => {
  return (
    <div style={{ width: "50%" }}>
      <div>
        <input style={styles.input} placeholder="0" />
      </div>
      <div style={styles.keys}>
        <div style={styles.key}>AC</div>
        <div style={styles.key}>+/-</div>
        <div style={styles.key}>%</div>
        <div style={{ ...styles.key, background: "#74b9ff" }}>/</div>
      </div>
      <div style={styles.keys}>
        <div style={styles.key}>7</div>
        <div style={styles.key}>8</div>
        <div style={styles.key}>9</div>
        <div style={{ ...styles.key, background: "#74b9ff" }}>x</div>
      </div>
      <div style={styles.keys}>
        <div style={styles.key}>4</div>
        <div style={styles.key}>5</div>
        <div style={styles.key}>6</div>
        <div style={{ ...styles.key, background: "#74b9ff" }}>-</div>
      </div>
      <div style={styles.keys}>
        <div style={styles.key}>1</div>
        <div style={styles.key}>2</div>
        <div style={styles.key}>3</div>
        <div style={{ ...styles.key, background: "#74b9ff" }}>+</div>
      </div>
      <div style={styles.keys}>
        <div style={styles.key}>🐶</div>
        <div style={styles.key}>0</div>
        <div style={styles.key}>.</div>
        <div style={{ ...styles.key, background: "#74b9ff" }}>=</div>
      </div>
    </div>
  );
};

export default Calculator;
