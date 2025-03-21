import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();

  const { doctors } = useContext(AppContext);
  const [filterDoc, setfilterDoc] = useState([]);
  const navigate = useNavigate();
  const applyFilter = () => {
    if (speciality) {
      setfilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setfilterDoc(doctors);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row mt-5 gap-5">
        <div className=" flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              speciality === "General physician" ? navigate("/doctors") : navigate("/doctors/General physician")
            }
            className={`w-[94vw] sm:w-auto border border-gray-300 rounded pl-3 pr-15 py-1.5 cursor-pointer  ${speciality==='General physician'?'bg-indigo-100 text-black':''}`}
          >
            General physician
          </p>
          <p onClick={() =>
              speciality === "Gynecologist" ? navigate("/doctors") : navigate("/doctors/Gynecologist")
            } className={`w-[94vw] sm:w-auto border border-gray-300 rounded pl-3 pr-15 py-1.5 cursor-pointer ${speciality==='Gynecologist'?'bg-indigo-100 text-black':''}`}>
            Gynecologist
          </p>
          <p onClick={() =>
              speciality === "Dermatologist" ? navigate("/doctors") : navigate("/doctors/Dermatologist")
            } className={`w-[94vw] sm:w-auto border border-gray-300 rounded pl-3 pr-15 py-1.5 cursor-pointer ${speciality==='Dermatologist'?'bg-indigo-100 text-black':''}`}>
            Dermatologist
          </p>
          <p onClick={() =>
              speciality === "Pediatricians" ? navigate("/doctors") : navigate("/doctors/Pediatricians")
            } className={`w-[94vw] sm:w-auto border border-gray-300 rounded pl-3 pr-15 py-1.5 cursor-pointer ${speciality==='Pediatricians'?'bg-indigo-100 text-black':''}`}>
            Pediatricians
          </p>
          <p onClick={() =>
              speciality === "Neurologist" ? navigate("/doctors") : navigate("/doctors/Neurologist")
            } className={`w-[94vw] sm:w-auto border border-gray-300 rounded pl-3 pr-15 py-1.5 cursor-pointer ${speciality==='Neurologist'?'bg-indigo-100 text-black':''}`}>
            Neurologist
          </p>
          <p onClick={() =>
              speciality === "Gastroenterologist" ? navigate("/doctors") : navigate("/doctors/Gastroenterologist")
            } className={`w-[94vw] sm:w-auto border border-gray-300 rounded pl-3 pr-15 py-1.5 cursor-pointer ${speciality==='Gastroenterologist'?'bg-indigo-100 text-black':''}`}>
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img src={item.image} className="bg-blue-50"></img>
              <div className="p-4">
                <div className="flex gap-2 items-center text-center  text-sm  text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-lg font-medium text-gray-900">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
