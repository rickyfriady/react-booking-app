import './header.css'
import { IoBedOutline,IoAirplaneOutline, IoCarSportOutline, IoTrailSignSharp, IoCalendarNumberOutline } from "react-icons/io5";
import { RiTaxiLine } from "react-icons/ri";
import { MdFamilyRestroom } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa";

import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useState} from 'react'


const Header = ({type}) => {

  const [openDate, setOpenDate] = useState(false);
  const [openOption, setOpenOption] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const[option, setOption] = useState({
    adult: 1,
    children:0,
    room:1,
  })

  const handleOption =  (name, operation) => {
    setOption((prev)=>{
      return{
        ...prev,
        [name]:operation === "i" ? option[name] + 1 : option[name] - 1,
      }
    })
  }

  return (
    <div className='header'>
      <div className={type === "list" ? "header-container list-mode" : "header-container" }>
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
        { type !== "list" &&
          <>
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
            <span 
            onClick={()=>setOpenDate(!openDate)} 
            className='header-search-text'>
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
            </span>
            {openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date-picker"
          />}
          </div>
          <div className="header-search-items">
          <MdFamilyRestroom className='header-icon'/>
            <span onClick={()=>setOpenOption(!openOption)} className='header-search-text'>{`${option.adult} Adult - ${option.children} Children - ${option.room} Room`}</span>
            { openOption &&
            <div className="options">
              <div className="option-item">
                <span className="option-text">Adult</span>
                <div className="option-counter">
                <button disabled={option.adult <= 1} className="option-counter-button" onClick={()=> handleOption("adult","d")}><FaMinus/></button>
                <span className="option-counter-number">{option.adult}</span>
                <button className="option-counter-button" onClick={()=> handleOption("adult","i")}><FaPlus/></button>
                </div>
              </div>
              <div className="option-item">
                <span className="option-text">Children</span>
                <div className="option-counter">
                <button disabled={option.children <= 0} className="option-counter-button" onClick={()=> handleOption("children","d")}><FaMinus/></button>
                <span className="option-counter-number">{option.children}</span>
                <button className="option-counter-button" onClick={()=> handleOption("children","i")}><FaPlus/></button>
                </div>
              </div>
              <div className="option-item">
                <span className="option-text">Room</span>
                <div className="option-counter">
                <button disabled={option.room <= 1} className="option-counter-button" onClick={()=> handleOption("room","d")}><FaMinus/></button>
                <span className="option-counter-number">{option.room}</span>
                <button className="option-counter-button" onClick={()=> handleOption("room","i")}><FaPlus/></button>
                </div>
              </div>
            </div>
            }
          </div>
          <div className="header-search-items">
          <button className="header-btn">Search</button>
          </div>
        </div>
          </>
        }
      </div>
    </div>
  )
}

export default Header