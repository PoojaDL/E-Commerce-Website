import styles from "./HeadContent.module.css";

const HeadContent = () => {
  return (
    <div className={`${styles.main} text-center`}>
      <h1>
        <b>Mart In Cart</b>
      </h1>
    </div>
  );
};

export default HeadContent;
