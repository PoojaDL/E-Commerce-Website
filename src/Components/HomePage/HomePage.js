// import { Button } from "react-bootstrap";
import { useState } from "react";
import FooterContent from "../Footer/FooterContent";
import NavContent from "../NavBar/NavContent";
import DataListTable from "./DataListTable";
import styles from "./HomePage.module.css";
import { Button } from "react-bootstrap";

let timer;
const HomePage = () => {
  const [isLoad, setLoad] = useState(false);
  const [isError, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const loadItems = async () => {
    try {
      setLoad(true);
      const data = await fetch("https://swapi.dev/api/films/");
      if (!data.ok) {
        timer = setTimeout(() => loadItems(), 5000);
        throw new Error("Something went wrong ....Retrying");
      }
      const res = await data.json();
      setMovies(res.results);
    } catch (error) {
      setError(error.message);
    }
    setLoad(false);
  };

  const cancelLoad = () => {
    document.querySelector(".hide").style.display = "none";
    document.querySelector(".hideButton").style.display = "none";
    clearTimeout(timer);
  };

  return (
    <div>
      <NavContent />
      <div className={`${styles.main} text-center`} align="center">
        <h1>
          <b>The Generic</b>
        </h1>
        <div className={styles.box}>
          <h4>Get Out Latest Album</h4>
        </div>
        {/* <button className={styles.buttonImage}> */}
        <img
          src="https://banner2.cleanpng.com/20180317/wcq/kisspng-youtube-play-button-computer-icons-clip-art-youtube-play-button-png-5aadd488efdf92.9254136615213415769825.jpg"
          alt="play-button"
          width="50px"
          height="50px"
          className={styles.buttonImage}
        />
      </div>

      <div className="m-5">
        <div>
          <h1>Tours</h1>
          <Button onClick={loadItems}>Load Movies</Button>
        </div>
        <div>
          <table align="center">
            <tr className="text-left">
              <th className="p-3">Date</th>
              <th className="p-3">Title</th>
              <th className="p-3">Director</th>
              <th className="p-3">Action</th>
            </tr>
            {isLoad && !isError && <p>Loading...</p>}
            {!isLoad && isError && <p className="hide">{isError}</p>}
            {!isLoad && isError && (
              <Button className="hideButton" onClick={cancelLoad}>
                Cancel Loading
              </Button>
            )}
            {!isLoad && movies.length === 0 && !isError && (
              <p>No movies found</p>
            )}
            {movies.map((item) => (
              <DataListTable
                key={item.episode_id}
                date={item.release_date}
                director={item.director}
                title={item.title}
              />
            ))}
          </table>
        </div>
      </div>
      <FooterContent />
    </div>
  );
};

export default HomePage;
