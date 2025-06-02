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
      <div className='pj-container pj-container-visaFree'>
        <div className='pj-content'>
          <List listItems={listVisaFreeCountry} />
        </div>
        <div className='pj-button'>
          <Button textBtn={"Купить билет"} />
        </div>
      </div>
      <div className='pj-container pj-container-visa'>
        <div className='pj-content'>
          <List listItems={listVisaCountry} />
        </div>
        <div className='pj-button'>
          <Button textBtn={"Купить билет"} />
        </div>
      </div>
    </div>
  );
};

export default App;
