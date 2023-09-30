const ButtonAccount = (props) => {
    const { children, variant = 'bg-black' } = props;
    return (
        <div className={`h-20 px-3 flex mb-2 text-[20px] rounded-md ${variant} text-white flex justify-between items-center cursor-pointer hover:brightness-110`}>
            <button
                type="submit"
            >
                {children}
            </button>
        </div>
    );
  };
  
  export default ButtonAccount;