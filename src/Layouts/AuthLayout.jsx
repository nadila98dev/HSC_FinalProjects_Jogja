const AuthLayout = (props) => {
    const { children, title } = props;
    return (
      <div className="flex justify-center min-h-screen items-center bg-cover bg-center bg-no-repeat bg-[url('./assets/coverlogin.png')]">
        <div className="w-full max-w-xs bg-background1 px-5 py-4 shadow-md rounded-md opacity-90">
          <h1 className="text-3xl mb-2 text-button">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">
            welcome, please enter your detail
          </p>
          {children}
        </div>
      </div>
    );
  };
  
  export default AuthLayout;
  