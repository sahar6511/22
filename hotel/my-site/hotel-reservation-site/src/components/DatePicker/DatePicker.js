import { DtPicker, convertToEn } from "react-calendar-datetime-picker";
import "react-calendar-datetime-picker/dist/style.css";
import React, { useState, useEffect } from "react";
import "../../styles/main.scss";
import Input from "../Input/Input";
import moment from "jalali-moment";
import { Link, useLocation } from "react-router-dom";

import Button from "../Button/Button";
import Error from "../Error/Error";

const DatePicker = ({ handleSearchRoomsClick }) => {
  const [jalaliStartDate, setJalaliStartDate] = useState();
  const [jalaliEndDate, setJalaliEndDate] = useState();
  const [miladiStartDate, setMiladiStartDate] = useState();
  const [miladiEndDate, setMiladiEndDate] = useState();
  const [diffStartEndeDays, setDiffStartEndeDays] = useState(0);
  const location = useLocation();
  useEffect(() => {
    if (jalaliStartDate && jalaliEndDate) {
      setMiladiStartDate(convertToEn(jalaliStartDate));
      setMiladiEndDate(convertToEn(jalaliEndDate));
      setDiffStartEndeDays(
        Math.abs(new Date(miladiEndDate) - new Date(miladiStartDate)) /
          1000 /
          60 /
          60 /
          24
      );
    }
  }, [jalaliStartDate][jalaliEndDate]);

  return (
    <div className="box-shadow p-30">
      <div className="dtpicker">
        <div className="dtpicker-right">
          <DtPicker
            onChange={setJalaliStartDate}
            local="fa"
            clearBtn="true"
            isRequired="true"
            todayBtn="true"
            headerClass="custom-headr"
            inputClass="custom-input"
            placeholder="تاریخ ورود"
          />
        </div>
        <div className="dtpicker-center">
          <DtPicker
            onChange={setJalaliEndDate}
            local="fa"
            clearBtn="true"
            isRequired="true"
            todayBtn="true"
            headerClass="custom-headr"
            inputClass="custom-input"
            placeholder="تاریخ خروج"
          />
        </div>
        <div className="dtpicker-left">
          <Input
            type="text"
            disabled="disabled"
            value={`${diffStartEndeDays} شب`}
          />
        </div>

        <div
          className="btn"
          onClick={(event) =>
            handleSearchRoomsClick(miladiStartDate, miladiEndDate)
          }
        >
          جستجوی اتاق
        </div>
      </div>
      {location.pathname === "/onlinereservation" ? (
        jalaliStartDate && jalaliEndDate ? null : (
          <Error>لطفا تاریخ ورود و خروج به هتل را مشخص نمایید.</Error>
        )
      ) : null}

    </div>
  );
};
export default DatePicker;
