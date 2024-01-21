import { Outlet, Link } from 'react-router-dom';

import Login from "../Components/Login"

export default function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li className='float-right'>
            <Login />
          </li>
        </ul>

      </nav>

      <Outlet />
    </>
  );
};