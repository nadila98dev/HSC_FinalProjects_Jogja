import React , {useState} from 'react'

const Address = () => {
    const [address, setAddress] = useState('Jl. Malioboro');

  const changeAddress = () => {
    const newAddress = prompt('Enter your new Address:'); 
    if (newAddress !== null) {
      setAddress(newAddress);
    }
  };
  return (
    <div className="flex flex-col">
      <div className="px-3 py-2 bg-button rounded-md flex justify-between items-center">
        <p>Your Location</p>
        <i onClick={changeAddress} className="bx bx-edit text-[24px] cursor-pointer"></i>
      </div>
      <div className="text-[#000000] px-5 py-2">
        <p>{address}</p>
      </div>
    </div>
  )
}

export default Address
