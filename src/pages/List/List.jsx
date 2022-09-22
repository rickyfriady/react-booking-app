import './List.css'
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";

import { useLocation } from 'react-router-dom';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [option, setOption] = useState(location.state.option);


  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="list-container">
        <div className="list-warpper">
          <div className="list-search">
            <h1 className="search-title">Search</h1>
            <div className="search-item">
              <label htmlFor="">Destination</label>
              <input type="text" name="" id="" placeholder={destination} />
            </div>
            <div className="search-item">
              <label htmlFor="">Check-in Date</label>
              <span 
              onClick={() => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              { openDate && <DateRange
            onChange={item => setDate([item.selection])}
            ranges={date}
            minDate={new Date()}
          />}
            </div>
            <div className="search-item">
              <label htmlFor="">Options</label>
              <div className="option-item">
                <span className='option-text'>Min Price <small>per night</small></span>
                <input type="number" name="" id="" className='option-input' />
              </div>
              <div className="option-item">
                <span className='option-text'>Max Price <small>per night</small></span>
                <input type="number" name="" id="" className='option-input' />
              </div>
              <div className="option-item">
                <span className='option-text'>Adult</span>
                <input type="number" name="" id="" className='option-input' placeholder={location.state.option.adult} />
              </div>
              <div className="option-item">
                <span className='option-text'>Children</span>
                <input type="number" name="" id="" className='option-input' />
              </div>
              <div className="option-item">
                <span className='option-text'>Room</span>
                <input type="number" name="" id="" className='option-input' />
              </div>
            </div>
          </div>
          <div className="list-result"></div>
        </div>
      </div>
    </div>
  )
}

export default List