import React , {useState} from 'react'
import { getUsernameFromLocalStorage } from '../../../Utils/userDatas'

const Name = () => {
    const username = getUsernameFromLocalStorage();
    return (
        <div className="flex flex-col">
          <div className="px-3 py-2 bg-button rounded-md flex justify-between items-center">
            <p>Username</p>
          </div>
          <div className="text-[#000000] px-5 py-2">
            <p>{username}</p>
          </div>
        </div>
      );
}

export default Name

