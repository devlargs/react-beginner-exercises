// instructions
// Fetch data from this api: https://rickandmortyapi.com/api/character
// Render it on the page

const DataFetching = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexFlow: "wrap",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: 20 }).map((item, i) => {
          return (
            <div
              key={i}
              style={{
                width: "200px",
                border: "1px solid",
                padding: "10px",
                boxShadow: "5px 10px #888888",
              }}
            >
              {/* eslint-disable-next-line */}
              <img
                src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                style={{ width: "100%" }}
              />
              <h4>Rick Sanchez (Human)</h4>
              <h5 style={{ lineHeight: "0.25px", padding: 0 }}>Male</h5>
              <h5>Origin: Citadel of Ricks</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataFetching;
