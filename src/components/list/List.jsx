import React from "react";

const List = ({ listItems }) => {
  const { title, items } = listItems;
  return (
    <>
      <h1 className='pj-title pj-h1'>{title}</h1>
      <ul className='pj-list'>
        {items.map((el) => {
          return (
            <li className='pj-list__item pj-list__item-lg'>
              <p className='pj-text-lg'>{el}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
