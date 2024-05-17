import React from "react";

interface TitleProps {
  title: string;
  caption: string;
}

const TitleSecondary: React.FC<TitleProps> = ({ title, caption }) => {
  const content = (
    <div className="title-secondary">
      <h3 className="heading-secondary">{title}</h3>
      <span className="title-secondary__caption">{caption}</span>
    </div>
  );
  return content;
};

export default TitleSecondary;
