import SearchBar from "../SearchBar/SearchBar.tsx";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <SearchBar onSubmit={(q: string) => console.log(q)} />
    </>
  );
}
