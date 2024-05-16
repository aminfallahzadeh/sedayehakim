import React from "react";

interface IconCardProps {
  title: string;
  icon: string;
  link: string;
}

const IconCard: React.FC<IconCardProps> = ({ title, icon, link }) => {
  const content = (
    <a href={link} className="card">
      <div className="card__icon">
        <img src={icon} alt={title} className="card__icon--img" />
      </div>
      <span className="card__title">{title}</span>
    </a>
  );

  return content;
};

export default IconCard;
