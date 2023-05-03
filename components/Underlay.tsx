import Image from "next/image";
import style from "@/styles/overlay.module.scss";
import Button from "@/components/Button";

interface Props {
  setTheme: (theme: string | null) => void;
}

const _ = ({ setTheme }: Props) => {
  return (
    <div className={style.underlay}>
      <div className={style.header}>
        <p className={style.title}>
          Catalogist<span>™</span>
        </p>
        <Image
          className={style.icon}
          src="/logo.png"
          alt="logo"
          width={24}
          height={24}
        />
      </div>
      <div className={style.description}>
        <p>
          <b>Playlist Converter</b>
          <br />
          Your playlists, wherever you want them.
          <br />
          <b>—</b>
        </p>
        <p className={style.drag}>
          • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Off–Brand™&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; •
        </p>
      </div>

      <div className={style.providers}>
        <div className={style.provider}>
          <h1>
            Apple
            <br />
            Music
          </h1>
          <Button
            theme="apple"
            onHover={() => setTheme("apple")}
            onHoverOut={() => setTheme(null)}
          />
        </div>
        <div className={style.provider}>
          <h1>Spotify</h1>
          <Button
            theme="spotify"
            onHover={() => setTheme("spotify")}
            onHoverOut={() => setTheme(null)}
          />
        </div>
      </div>
      <div className={style.credits}>
        <p>
          <b>Wonders of Antiquity</b>
          <br />
          Pythagorean Mathematics
        </p>
        <p className={style.title}>THE SUMMIT OF THE MANY</p>
        <p>David Hume — Cicero — Plato — Shakespeare — Einstein</p>
      </div>
    </div>
  );
};

export default _;
