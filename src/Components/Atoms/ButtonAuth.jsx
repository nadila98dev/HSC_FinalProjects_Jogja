const Button = (props) => {
  const { children, variant = "bg-black", action } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white `}
      // type="submit"
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;
