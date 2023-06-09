import styles from "./style.module.scss";

interface Props {
  theme: "apple" | "spotify";
  onHover: () => void;
  onHoverOut: () => void;
  onClick: () => void;
}

const _ = ({ theme, onHover, onHoverOut, onClick }: Props) => {
  return (
    <div
      className={`${styles.main} ${
        theme == "apple" ? styles.apple : styles.spotify
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
      onClick={() => onClick()}
    >
      <button className={styles.button}>
        <div className={styles.background} />
        <div className={styles.title}>
          Convert to {theme == "apple" ? "Spotify" : "Apple Music"}
        </div>
      </button>
      <div className={styles.arrows}>
        <div className={styles.arrow} />
        <div className={styles.arrow} />
        <div className={styles.arrow} />
        <div className={styles.arrow} />
      </div>
    </div>
  );
};

export default _;
