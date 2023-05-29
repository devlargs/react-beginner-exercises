import SearchFilter from "../exercises/1-search-filter";
import DataFetching from "../exercises/2-data-fetching";
import TodoLists from "../exercises/3-todo-lists";
import Calculator from "../exercises/4-calculator";
import TextAnalyzer from "../exercises/5-text-analyzer";
import PasswordGenerator from "../exercises/6-password-generator";

export default function Home() {
  return (
    <main>
      <h2>Edit `page.tsx` file on the exercises that you want to try out.</h2>
      <h3>Just import the challenge component from `exercises` folder</h3>
      <hr />
      {/* Import here */}
      {/* <SearchFilter /> */}
      {/* <DataFetching /> */}
      {/* <TodoLists /> */}
      {/* <Calculator /> */}
      {/* <TextAnalyzer /> */}
      <PasswordGenerator />
    </main>
  );
}
