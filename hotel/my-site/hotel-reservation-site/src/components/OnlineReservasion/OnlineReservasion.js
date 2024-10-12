import React, { useEffect } from "react";
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchPannel from "../SearchPanel/SearchPanel";
import ShowRooms from "../ShowRooms/ShowRooms";
import DatePicker from "../DatePicker/DatePicker";
import "../../styles/main.scss";
import { useState } from "react";
import Space from "../../components/Space/Space";
import Error from "../Error/Error";
import ShowCalcute from "../ShowCalcute/ShowCalcute";

const OnlineReservasion = () => {
  const [startReservDate, setStartReservDate] = useState();
  const [endReservDate, setEndReservDate] = useState();

  useEffect(() => {}, []);

  const handleSearchRoomsClick = (startDate, endDate) => {
    setStartReservDate(startDate);
    setEndReservDate(endDate);
  };
  return (
    <div className="online-reserve">
      <TopMenu />
      <Header />
      <Space />
      <Space/>
      <Space/>
      <Space/>
      <div className="online-reserve__container container-custom">
<div className="online-reserve__container--right">

      <DatePicker handleSearchRoomsClick={handleSearchRoomsClick}></DatePicker>
      {startReservDate && endReservDate ? (
        new Date(startReservDate) >= new Date(endReservDate) ? (
          <Error>
            تاریخ خروج نباید از تاریخ ورود کوچکتر یا برابر با آن باشد
          </Error>
        ) : (
          <ShowRooms
            startReservDate={startReservDate}
            endReservDate={endReservDate}
          ></ShowRooms>
        )
      ) : null}
</div>


      <ShowCalcute/>


      </div>
      <Space />
      

      <Footer />
    </div>
  );
};

export default OnlineReservasion;
