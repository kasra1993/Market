import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import { Calendar } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import HourPicker from "../../components/Hourpicker/HourPicker";
import Icon from "react-multi-date-picker/components/icon";

const Home = () => {
  const now = new Date();
  const [value, setValue] = useState();
  const handleChange = (value) => {
    setValue(value);
  };
  const d = new Date();
  const day = d.getDay();
  const month = d.getMonth();
  const year = d.getFullYear();

  const valueDate = value?.toDate();

  const valueDay = valueDate?.getDay();
  const valueMonth = valueDate?.getMonth();
  const valueYear = valueDate?.getFullYear();
  // const date = new DateObject();

  // console.log(day, month, year);
  // console.log(valueDay, valueMonth, valueYear);
  // console.log(value);

  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        {/* <Calendar calendar={persian} locale={persian_fa} onChange={setValue} /> */}
        <DatePicker
          minDate={new DateObject({ calendar: persian }).set("day", 5)}
          render={<Icon />}
          value={value}
          onChange={handleChange}
          calendar={persian}
          locale={persian_fa}
          plugins={[<TimePicker position="bottom" />]}
        />
        <HourPicker />
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
