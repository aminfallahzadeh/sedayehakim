import React from "react";

interface CardProps {
  image: string;
  title: string;
  caption: string;
}

const FeatureCard: React.FC<CardProps> = ({ image, title, caption }) => {
  const content = (
    <div className="featureCard">
      <img src={image} alt="{title}" className="featureCard__image" />

      <h2 className="featureCard__title">{title}</h2>
      <p className="featureCard__caption">{caption}</p>
    </div>
  );
  return content;
};

export default FeatureCard;
