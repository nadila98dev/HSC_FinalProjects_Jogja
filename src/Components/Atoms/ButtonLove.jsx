import React, { useState , useEffect } from "react";
import { addProductToLocalStorage , removeProductFromLocalStorage } from "../../Utils/Products";
import { setIsSolidToLocalStorage , getIsSolidFromLocalStorage } from '../../Utils/activatedButton'

const ButtonLove = ({ id }) => {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    // Ambil nilai isSolid dari localStorage saat komponen dimuat
    const storedIsSolid = getIsSolidFromLocalStorage(id);
    if (storedIsSolid !== null) {
      setIsSolid(storedIsSolid);
    }
  }, [id]);

  const toggleIcon = () => {
    setIsSolid((prevIsSolid) => !prevIsSolid);
    const product = { id, isSolid: !isSolid };

    isSolid ? removeProductFromLocalStorage(id) : addProductToLocalStorage(product);
    setIsSolidToLocalStorage(id, !isSolid);
  };
  return (
    <div>
      <button
        onClick={toggleIcon}
        className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]"
      >
        {isSolid ? (
          <i className="bx bxs-heart text-button"></i>
        ) : (
          <i className="bx bx-heart text-button"></i>
        )}
      </button>
    </div>
  );
};

export default ButtonLove;
