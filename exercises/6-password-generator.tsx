// Instructions
// Create a PasswordGenerator component that renders a password generator

const PasswordGenerator = () => {
  return (
    <>
      <h1>Password Generator</h1>
      <input disabled value="pR1nC35S!_69" />
      <button>Copy</button>
      <br />
      Password Length:
      <input type="range" min="1" max="100" value="50" />
      <br />
      <input type="checkbox" id="uppercase" />
      <label htmlFor="uppercase">Uppercase</label>
      <br />
      <input type="checkbox" id="uppercase" />
      <label htmlFor="uppercase">Lowercase</label>
      <br />
      <input type="checkbox" id="uppercase" />
      <label htmlFor="uppercase">Numbers</label>
      <br />
      <input type="checkbox" id="uppercase" />
      <label htmlFor="uppercase">Special Characters</label>
      <br />
      <button>Generate</button>
    </>
  );
};

export default PasswordGenerator;
