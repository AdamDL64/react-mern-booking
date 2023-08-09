import React from "react";
import { FaBed } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { BiSolidCar } from "react-icons/bi";
import { MdAttractions, MdDateRange, MdFamilyRestroom } from "react-icons/md";
import { useState } from "react";
import "./Header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom"; 

const Header = (props) => {
  const {type} =props
  // functionSearch 
  const [destination, setDestination] = useState("");

  //functions Data
  const [openDate, setOpenDate] = useState(false);
  const [date, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // room  add Data
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

    const navigate =useNavigate()
  //functions Search
  const handleSearch =()=>{
    navigate("/hotels" ,{state :{destination , date , options}})
  }

  return (
    <div className="header">
      <div className={type==="list"? "headerContainer listMode":"headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <IoIosAirplane />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <BiSolidCar />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <MdAttractions />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <BiSolidCar />
            <span>Airport taxis</span>
          </div>
        </div>
        {
          type !=="list" &&
          <>
        <h1 className="headerTitle">
          Lorem ipsum dolor ipsam rem nihil. Ea, quidem!
        </h1>
        <p className="headerDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          aspernatur ipsum nihil accusamus, eius itaque doloribus quos, libero
          fugiat dolore mollitia dicta dolorum deserunt molestiae velit
          recusandae veritatis fuga voluptatibus!
        </p>
        <button className="headerBtn">Siginin / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FaBed className="headerIcon" />
            <input
              type="text"
              placeholder="where are you going"
              className="headerSearchInput"
              onChange={(e)=>setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <MdDateRange className="headerIcon" />
            <span
              className="headerSearchText"
              onClick={() => setOpenDate(!openDate)}
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            <MdFamilyRestroom className="headerIcon" />
            <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult}adult. ${options.children}children.${options.room}`}room</span>
              {openOptions &&  <div className="options">
              <div className="optionItem">
                <spen className="optionText">Adult</spen>
                <div className="optionCounter">
                  <button
                    //disabled จะหยุดทำงานเมือมีค่าน้อยกว่า เท่ากับ1
                    disabled={options.adult <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="optionCounterButton "
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <spen className="optionText">Children</spen>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterButton"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <spen className="optionText"> Room</spen>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className="optionCounterButton"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="optionCounterButton"
                    onClick={() => {
                      handleOption("room", "i");
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn"onClick={handleSearch} >Search</button>
          </div>
        </div>
        </>}
      </div>
    </div>
  );
};

export default Header;
