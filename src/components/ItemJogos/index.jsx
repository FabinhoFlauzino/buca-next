import xboxLogo from "../../../public/assets/xbox.png";
import playstationLogo from "../../../public/assets/playstation.jpg";
import nintendoLogo from "../../../public/assets/nintendo.jpg";
import Image from "next/image";
import styles from "./ItemJogos.module.css"

const ItemJogos = ({ nome, plataforma }) => {
  return (
    <div className={styles.card}>
      <div>
        <Image
          src={
            plataforma === "xbox"
              ? xboxLogo
              : plataforma === "playstation"
              ? playstationLogo
              : nintendoLogo
          }
          alt="logo"
        />
      </div>
      <div>
        <p>{nome}</p>
      </div>
    </div>
  );
};
export default ItemJogos;