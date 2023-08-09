// import { Button } from "react-bootstrap";
import FooterContent from "../Footer/FooterContent";
import NavContent from "../NavBar/NavContent";
import DataListTable from "./DataListTable";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const dataList = [
    {
      date: "JUL 16",
      state: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },

    { date: "JUL 19", state: "TORONTO,ON", place: "BUDWEISER STAGE" },
  ];

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
        </div>
        <div>
          <table className="text-left" align="center">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">State</th>
              <th className="p-3">Place</th>
              <th className="p-3">Action</th>
            </tr>
            {dataList.map((item) => (
              <DataListTable
                key={item.date}
                date={item.date}
                state={item.state}
                place={item.place}
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
