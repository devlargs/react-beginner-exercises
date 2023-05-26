import { LOL_CHAMPIONS } from "../data/lolChampions";

const SearchFilter = () => {
  return (
    <>
      <h1>Search Filter</h1>
      <p>Filter the list of items below</p>
      <input placeholder="Filter a champion" style={{ padding: 10 }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "6px",
          margin: "16px 0",
        }}
      >
        {LOL_CHAMPIONS.map((champion) => {
          return (
            <div
              key={champion.id}
              style={{
                width: "150px",
                margin: "auto",
              }}
            >
              <img src={champion.icon} alt={champion.title} />
              <h3>{champion.name}</h3>
              <p>{champion.title.toLocaleUpperCase()}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchFilter;
