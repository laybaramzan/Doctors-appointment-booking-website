import React, { useState } from "react";
import profilepic from "../assets/profile_pic.png";

const Myprofile = () => {
  const [UserData, setUserData] = useState({
    name: "Laiba Ramzan",
    image: profilepic,
    email: "laibaramzan972@gmail.com",
    phone: "00000000000",
    address: {
      line1: "xxx,xxx",
      line2: "xxx,xxx,xxx",
    },
    gender: "female",
    DOB: "0000,00,00",
  });
  const [isEdit, setisEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={UserData.image}></img>
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium mt-4 max-w-60"
          type="text"
          value={UserData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        ></input>
      ) : (
        <p className="font-medium text-3xl mt-4 text-neutral-800">
          {UserData.name}
        </p>
      )}
      <hr className="text-zinc-400  " />
      <div>
        <p className="text-neutral-500 underline mt-3"> CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700 mt-3">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{UserData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={UserData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            ></input>
          ) : (
            <p className="text-blue-400">{UserData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50"
                type="text"
                value={UserData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              ></input>
              <br />
              <input
                className="bg-gray-50"
                type="text"
                value={UserData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              ></input>
            </p>
          ) : (
            <p className="text-gray-500">
              {UserData.address.line1}
              <br />
              {UserData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 text-neutral-700 mt-3">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={UserData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{UserData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, DOB: e.target.value }))
              }
              value={UserData.DOB}
            ></input>
          ) : (
            <p className="text-gray-400">{UserData.DOB}</p>
          )}
        </div>
      </div>
      <div className="my-10">
        {isEdit ? (
          <button
            className="border rounded-full border-[var(--color-primary)] py-2 px-8  hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
            onClick={() => setisEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border rounded-full border-[var(--color-primary)] py-2 px-8 hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300"
            onClick={() => setisEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Myprofile;
