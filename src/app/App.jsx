import React from "react";
import Button from "../components/button/Button";
import List from "../components/list/List";
import "./app.scss";

const App = () => {
  const listVisaFreeCountry = {
    title: "Список безвизовых стран:",
    items: ["Бразилия", "Доминикана", "Индонезия", "Маврикий", "Мальдивы"],
  };
  const listVisaCountry = {
    title: "Список стран, в которые необходима виза:",
    items: ["Австралия", "Великобритания", "Германия", "Италия", "Кения"],
  };
  return (
    <div className='pj'>
      <div className='pj-container pj-container--visa-free'>
        <div className='pj-content'>
          <List
            listItems={listVisaFreeCountry}
            className={"pj-list__item--circle"}
          />
        </div>
        <div className='pj-button'>
          <Button textBtn={"Купить билет"} className={"button--primary"} />
        </div>
      </div>
      <div className='pj-container pj-container--visa'>
        <div className='pj-content'>
          <List
            listItems={listVisaCountry}
            className={"pj-list__item--decimal"}
          />
        </div>
        <div className='pj-button'>
          <Button textBtn={"Купить билет"} className={"button--secondary"} />
        </div>
      </div>
    </div>
  );
};

export default App;
