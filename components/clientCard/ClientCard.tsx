import React from "react";
import styles from "../../styles/ClientCard.module.css";

interface Props {
  name: string;
  imageUrl: string;
  description: string;
}

const ClientCard: React.FC<Props> = ({ name, imageUrl, description }) => {
  return (
    <div style={{ width: "60%", marginLeft: "300px", marginTop: "30px" }}>
      <div className={styles.cards}>
        <img src={imageUrl} alt={name} className={styles.image} />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ClientCard;
