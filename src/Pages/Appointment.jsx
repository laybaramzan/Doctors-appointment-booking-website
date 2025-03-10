import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import tick from "../assets/verified_icon.svg";
import infoicon from "../assets/info_icon.svg";
import Relateddoctors from "../components/Relateddoctors";
const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencysymbol } = useContext(AppContext);
  const daysofweek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const getAvailableSlots = async () => {
    //getting current date
    let today = new Date();
    let allSlots = [];
    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currentdate = new Date(today);
      currentdate.setDate(today.getDate() + i);
      //setting end time of the date with index
      let endtime = new Date();
      endtime.setDate(today.getDate() + i);
      endtime.setHours(21, 0, 0, 0);
      //setting hour
      if (i === 0) {
        currentdate.setHours(
          currentdate.getHours() > 10 ? currentdate.getHours() + 1 : 10
        );

        currentdate.setMinutes(currentdate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentdate.setHours(10);
        currentdate.setMinutes(0);
      }
      let timeslot = [];
      while (currentdate < endtime) {
        let formattedtime = currentdate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        //add slot to array
        timeslot.push({
          datetime: new Date(currentdate),
          time: formattedtime,
        });
        //increment current time by 30 min
        currentdate.setMinutes(currentdate.getMinutes() + 30);
      }

      allSlots.push(timeslot);
    }
    setDocSlots(allSlots);
  };
  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);
  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);
  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-[var(--color-primary)] w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
            ></img>
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={tick}></img>
            </p>
            <div className=" flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border rounded-full text-xs">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={infoicon}></img>
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:
              <span className="text-gray-600">
                {currencysymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        <div className="text-gray-700 font-medium sm:ml-72 sm:pl-4 mt-4">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16  rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-[var(--color-primary)] text-white"
                      : "border border-gray-200"
                  }`}
                  key={index}
                >
                  <p>{item[0] && daysofweek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && [item[0].datetime.getDate()]}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  className={`font-sm font-light cursor-pointer rounded-full px-5 py-2 flex-shrink-0 ${
                    item.time === slotTime
                      ? "bg-[var(--color-primary)] text-white"
                      : "border border-gray-300 text-gray-400"
                  }`}
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="bg-[var(--color-primary)] text-white text-sm font-light px-14 py-3 my-6 rounded-full">
            Book an appointment
          </button>
        </div>
        <Relateddoctors
          docid={docId}
          speciality={docInfo.speciality}
        ></Relateddoctors>
      </div>
    )
  );
};

export default Appointment;
