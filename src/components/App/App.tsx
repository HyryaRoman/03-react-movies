import { Toaster } from "react-hot-toast";

import SearchBar from "../SearchBar/SearchBar.tsx";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Toaster />
      <SearchBar onSubmit={(q: string) => console.log(q)} />
    </div>
  );
}
