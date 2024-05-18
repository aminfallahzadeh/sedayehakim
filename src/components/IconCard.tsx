import React from "react";

interface IconCardProps {
  title: string;
  icon: string;
  link: string;
}

const IconCard: React.FC<IconCardProps> = ({ title, icon, link }) => {
  const content = (
    <a href={link} className="IconCard">
      <div className="IconCard__icon">
        <img src={icon} alt={title} className="IconCard__icon--img" />
      </div>
      <span className="IconCard__title">{title}</span>
    </a>
  );

  return content;
};

export default IconCard;
