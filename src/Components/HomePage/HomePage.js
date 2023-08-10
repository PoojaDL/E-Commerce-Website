// import { Button } from "react-bootstrap";
import { useState } from "react";
import FooterContent from "../Footer/FooterContent";
import NavContent from "../NavBar/NavContent";
import DataListTable from "./DataListTable";
import styles from "./HomePage.module.css";
import { Button } from "react-bootstrap";

const HomePage = () => {
  const [isLoad, setLoad] = useState(false);
  const [movies, setMovies] = useState([]);
  const loadItems = async () => {
    setLoad(true);
    const data = await fetch("https://swapi.dev/api/films/");
    const res = await data.json();
    setMovies(res.results);
    setLoad(false);
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
            {isLoad && <p>Loading...</p>}
            {!isLoad && movies.length === 0 && <p>No movies found</p>}
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
