import React from "react";
import List from "../list/List";
import Button from "../button/Button";

const Card = ({
  country,
  cardClassName,
  listClassName,
  itemClassName,
  textClassName,
  textBtn,
  buttonSize,
}) => {
  const { title, items, imgLink, imgAlt } = country;
  return (
    <div className={`pj-card ${cardClassName} pj-card${buttonSize ? `--justify-content-s-b`: `--justify-content-f-s`}`}>
      <img src={imgLink} alt={imgAlt} className='pj-card-img' />
      {listClassName ? (
        <List items={items} title={title} listClassName={`${listClassName}`} itemClassName={`${itemClassName}`} textClassName={`${textClassName}`} />
      ) : (
        ""
      )}
      {buttonSize || textBtn ? 
        <Button
          textBtn={textBtn}
          className={`button--primary ${buttonSize}`}
        />
      : ''}
    </div>
  );
};

export default Card;
