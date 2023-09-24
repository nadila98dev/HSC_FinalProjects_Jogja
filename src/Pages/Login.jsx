import AuthLayout from '../Layouts/AuthLayout'
import FormLogin from '../Fragments/FormLogin'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
      <AuthLayout title="Login">
        <FormLogin />
        <p className="text-sm mt-5">Don't have an account?{' '}
          <Link to="/register" className="font-bold text-button font-Poppins">
            Register
          </Link>
        </p>
        <Link to="/">
          <div className='mt-3 bg-button w-[36px] p-2 rounded-md cursor-pointer'>
            <i className='bx bx-home text-[20px] text-white' ></i>
          </div>
        </Link>
      </AuthLayout>
    );
  };
  export default Login;
