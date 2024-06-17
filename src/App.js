import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import moviesData from "./components/data";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(moviesData);
  const [newData, setNewData] = useState({
    filtered: {
      title: "",
      rating: 0,
    },
  });
  useEffect(() => {
    const filtredData = moviesData.filter(
      (movie) =>
        movie.title
          .toLowerCase()
          .includes(newData.filtered.title.toLowerCase()) &&
        movie.rating >= newData.filtered.rating
    );
    setData(filtredData);
  }, [newData]);
  return (
    <div className="App">
      <Navbar newData={newData} setNewData={setNewData} />
      <Movies data={data} />
    </div>
  );
}
export default App;
