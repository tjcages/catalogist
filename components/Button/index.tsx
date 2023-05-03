import styles from "./style.module.scss";

interface Props {
  theme: "apple" | "spotify";
}

const _ = ({ theme }: Props) => {
  return (
    <button
      className={`${styles.main} ${
        theme == "apple" ? styles.apple : styles.spotify
      }`}
    >
      <div className={styles.title}>
        Convert to {theme == "apple" ? "Spotify" : "Apple Music"}
      </div>
    </button>
  );
};

export default _;
