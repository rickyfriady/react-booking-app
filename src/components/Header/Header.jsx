import './header.css'
import { IoBedOutline,IoAirplaneOutline, IoCarSportOutline, IoTrailSignSharp, IoCalendarNumberOutline } from "react-icons/io5";
import { RiTaxiLine } from "react-icons/ri";
import { MdFamilyRestroom } from "react-icons/md";

import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useState} from 'react'


const Header = () => {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  return (
    <div className='header'>
      <div className="header-container">
        <div className="header-list">
          <div className="header-list-items active">
            <IoBedOutline/>
            <span>stays</span>
          </div>
          <div className="header-list-items">
            <IoAirplaneOutline/>
            <span>Flights</span>
          </div>
          <div className="header-list-items">
            <IoCarSportOutline/>
            <span>Car Rentals</span>
          </div>
          <div className="header-list-items">
            <IoTrailSignSharp/>
            <span>Acctractions</span>
          </div>
          <div className="header-list-items">
            <RiTaxiLine/>
            <span>Airport Taxi</span>
          </div>
        </div>
        <h1 className="header-title">A Lifetime of discounts? It's Genius</h1>
        <p className="header-disc">
          Get rewarded for your travels - unlock instan savings of 10px or more with Alluky HotelBook Account
        </p>
        <button className="header-btn">
          Sign In or Register
        </button>
        {/* header serach area */}
        <div className="header-search">
          <div className="header-search-items">
            <IoBedOutline className='header-icon'/>
            <input type="text" 
            name="search" 
            id="search"
            placeholder='Where your going?' className='header-search-Input' />
          </div>
          <div className="header-search-items">
            <IoCalendarNumberOutline className='header-icon'/>
            <span className='header-search-text'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date-picker"
          />
          </div>
          <div className="header-search-items">
          <MdFamilyRestroom className='header-icon'/>
            <span className='header-search-text'>2 adult 2 children 1 room</span>
          </div>
          <div className="header-search-items">
          <button className="header-btn">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header