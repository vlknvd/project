import React from "react";

const List = ({ listItems, className }) => {
  const { title, items } = listItems;
  return (
    <>
      <h1 className='pj-h1'>{title}</h1>
      <ul className='pj-list'>
        {items.map((el) => {
          return (
            <li className={`pj-list__item ${className} `}>
              <p className='pj-text pj-text-lg'>{el}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
