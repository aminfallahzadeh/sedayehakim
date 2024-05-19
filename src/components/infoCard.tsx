import React from "react";

interface CardProps {
  image: string;
  caption: string;
}

const infoCard: React.FC<CardProps> = ({ image, caption }) => {
  const content = (
    <div className="infoCard">
      <img className="infoCard__img" src={image} alt={caption} />
      <p className="infoCard__caption">{caption}</p>
    </div>
  );
  return content;
};

export default infoCard;
