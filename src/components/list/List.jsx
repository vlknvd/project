import React from "react";

const List = ({ items, title, listClassName, itemClassName, textClassName }) => {
  return (
    <>
      <h1 className='pj-h2'>{title}</h1>
      <ul className={`pj-list ${listClassName} `}>
        {items.map((el) => {
          return (
            <li className={`pj-list__item ${itemClassName} `}>
              <p className={`pj-text ${textClassName}`}>{el}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
