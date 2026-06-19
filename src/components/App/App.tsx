import SearchBar from "../SearchBar/SearchBar.tsx";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <SearchBar onSubmit={(q: string) => console.log(q)} />
    </div>
  );
}
