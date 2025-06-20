import React from "react";
import Button from "../components/button/Button";
import List from "../components/list/List";
import "./app.scss";
import Card from "../components/card/Card";

const App = () => {
  const countryCard = {
    visaFree: {
      title: "Список безвизовых стран:",
      items: ["Бразилия", "Доминикана", "Индонезия", "Маврикий", "Мальдивы"],
    },
    visa: {
      title: "Список стран, в которые необходима виза:",
      items: ["Австралия", "Великобритания", "Германия", "Италия", "Кения"],
    },
    Mauritius: {
      title: "Маврикий",
      items: [
        "Круглый год лето",
        "Нет сезона дождей",
        "Теплый океан",
        "Безопасно",
      ],
      imgLink:
        "https://cdn2.tu-tu.ru/image/pagetree_node_data/1/6663169f53d15913ac1a893e72cbe4b0/",
      imgAlt: "Mauritius",
    },
    Thailand: {
      title: "Тайланд",
      items: [
        "Прекрасные пляжи",
        "Тайский массаж",
        "Национальные парки",
        "Тайская кухня",
      ],
      imgLink:
        "https://aerotur.travel/storage/app/uploads/public/67e/a93/285/67ea932853248786330828.jpg",
      imgAlt: "Thailand",
    },
    Maldives: {
      title: "Мальдивы",
      items: [
        "Богатый подводный мир",
        "Круглый год лето",
        "Вкусная кухня",
        "Абсолютно безопасно",
      ],
      imgLink:
        "https://avatars.mds.yandex.net/get-vertis-journal/4220003/shutterstock_2246668085.jpg_1722948570769/1920x1920",
      imgAlt: "Maldives",
    },
  };
  const { visa, visaFree, Mauritius, Thailand, Maldives } = countryCard;
  return (
    <div className='pj'>
      <div className='pj-container pj-container--visa-free'>
        <div className='pj-content'>
          <List
            title={visaFree.title}
            items={visaFree.items}
            listClassName={'pj-list--col'}
            itemClassName={"pj-list__item--circle"}
            textClassName={'pj-text-lg'}
          />
        </div>
        <div className='pj-button'>
          <Button
            textBtn={"Купить билет"}
            className={"button--primary button--lg"}
          />
        </div>
      </div>
      <div className='pj-container pj-container--visa'>
        <div className='pj-content'>
          <List
            title={visa.title}
            items={visa.items}
            listClassName={'pj-list--col'}
            itemClassName={"pj-list__item--number"}
            textClassName={'pj-text-lg'}
          />
        </div>
        <div className='pj-button'>
          <Button
            textBtn={"Купить билет"}
            className={"button--secondary button--lg"}
          />
        </div>
      </div>
      <div className='pj-container pj-container--cards'>
        <Card
          country={Mauritius}
          cardClassName={"pj-card--md pj-card--none-reverse pj-card--align-center"}
          listClassName={'pj-list--col pj-card--align-center'}
          textClassName={'pj-text-md'}
          textBtn={"Перейти"}
          buttonSize={"button--md"}
        />
        <Card
          country={Thailand}
          cardClassName={"pj-card--md pj-card--reverse pj-card--align-center"}
          listClassName={'pj-list--col pj-card--align-center'}
          textClassName={'pj-text-md'}
          textBtn={"Перейти"}
          buttonSize={"button--md"}
        />
        <Card
          country={Maldives}
          cardClassName={"pj-card--md pj-card--none-reverse pj-card--align-center"}
          listClassName={'pj-list--col pj-card--align-center'}
          textClassName={'pj-text-md'}
        />
      </div>
      <div className='pj-container pj-container--cards'>
        <Card
          country={Mauritius}
          cardClassName={"pj-card--sm pj-card--none-reverse"}
          listClassName={'pj-list--col'}
          itemClassName={"pj-list__item--square"}
          textClassName={'pj-text-xs'}
          textBtn={"Перейти"}
          buttonSize={"button--sm"}
        />
        <Card
          country={Thailand}
          cardClassName={"pj-card--sm pj-card--reverse"}
          listClassName={'pj-list--col'}
          itemClassName={"pj-list__item--number"}
          textClassName={'pj-text-xs'}
          textBtn={"Перейти"}
          buttonSize={"button--sm"}
        />
        <Card
          country={Maldives}
          cardClassName={"pj-card--sm pj-card--none-reverse"}
          listClassName={'pj-list--col'}
          itemClassName={"pj-list__item--disc"}
          textClassName={'pj-text-xs'}
        />
      </div>
    </div>
  );
};

export default App;
