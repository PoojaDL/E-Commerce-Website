// import { Button } from "react-bootstrap";
import { Fragment, useCallback, useEffect, useState } from "react";
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

  const loadItems = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const cancelLoad = () => {
    document.querySelector(".hide").style.display = "none";
    document.querySelector(".hideButton").style.display = "none";
    clearTimeout(timer);
  };

  return (
    <Fragment>
      <NavContent />
      <div className={`${styles.main} p-2`} align="center">
        <h1>
          <b>Mart In Cart</b>
        </h1>
        <div className={styles.box} align="center">
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

      <div
        style={{ background: "#eeeedd" }}
        className="p-3 pb-5"
        align="center"
      >
        <div className="display-3 p-2">
          <h1>Movies</h1>
        </div>
        {isLoad && !isError && <p>Loading...</p>}
        {!isLoad && isError && <p className="hide">{isError}</p>}
        {!isLoad && isError && (
          <Button className="hideButton" onClick={cancelLoad}>
            Cancel Loading
          </Button>
        )}
        <div className="p-auto m-auto pb-5 mb-5" style={{ overflow: "scroll" }}>
          <table align="center">
            <tr className="text-left g-5 display-7">
              <th className="pe-3">Date</th>
              <th className="pe-3">Title</th>
              <th className="pe-3">Director</th>
              <th>Action</th>
            </tr>

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
    </Fragment>
  );
};

export default HomePage;
