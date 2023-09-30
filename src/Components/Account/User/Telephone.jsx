import React , {useState} from "react";

const Telephone = () => {
    const [telephone, setTelephone] = useState('+62 000 1111 1234');

    const changeTelephone = () => {
      const newTelephone = prompt('Enter your new No Telephone:'); 
      if (newTelephone !== null) {
        setTelephone(newTelephone);
      }
    };
  return (
    <div className="flex flex-col">
      <div className="px-3 py-2 bg-button rounded-md flex justify-between items-center">
        <p>No Telephone</p>
        <i onClick={changeTelephone} className="bx bx-edit text-[24px] cursor-pointer"></i>
      </div>
      <div className="text-[#000000] px-5 py-2">
        <p>{telephone}</p>
      </div>
    </div>
  );
};

export default Telephone;
