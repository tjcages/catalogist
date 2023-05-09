import Image from "next/image";
import { useStore } from "@/store";
import styles from "@/styles/overlay.module.scss";
import Button from "@/components/Button";

const _ = () => {
  const page = useStore(
    (state: { page: "home" | "apple" | "spotify" }) => state.page
  );
  const pushPage = useStore((state) => state.pushPage);
  const previewPage = useStore((state) => state.previewPage);

  return (
    <div
      className={`${styles.underlay} ${
        page == "apple" ? styles.apple : page == "spotify" ? styles.spotify : ""
      }`}
    >
      <div className={styles.header}>
        <p className={styles.title} onClick={() => pushPage("home")}>
          Catalogist<span>™</span>
        </p>
        <Image
          className={styles.icon}
          src="/logo.png"
          alt="logo"
          width={24}
          height={24}
        />
      </div>
      <div className={styles.description}>
        <p>
          <b>Playlist Converter</b>
          <br />
          Your playlists, wherever you want them.
          <br />
          <b>—</b>
        </p>
        <p className={styles.drag}>
          • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Off–Brand™&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; •
        </p>
      </div>

      <div className={styles.providers}>
        <div className={styles.provider}>
          <h1 className={styles.appleTitle}>
            Apple
            <br />
            Music
          </h1>
          <Button
            theme="apple"
            onHover={() => previewPage("apple")}
            onHoverOut={() => previewPage("home")}
            onClick={() => pushPage("apple")}
          />
        </div>
        <div className={styles.provider}>
          <h1 className={styles.spotifyTitle}>Spotify</h1>
          <Button
            theme="spotify"
            onHover={() => previewPage("spotify")}
            onHoverOut={() => previewPage("home")}
            onClick={() => pushPage("spotify")}
          />
        </div>
      </div>
      <div className={styles.credits}>
        <p>
          <b>Wonders of Antiquity</b>
          <br />
          Pythagorean Mathematics
        </p>
        <p className={styles.title}>{page}</p>
        <p>tylerj</p>
      </div>
    </div>
  );
};

export default _;
