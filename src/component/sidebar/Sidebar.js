import React from 'react';
import { AiTwotoneShop } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { routes } from '../data/dummy';
import { user } from '../data/dummy';
import './Sidebar.css';




function Sidebar() {
  return (
    <div className='app_sidebar'>
      <div className='sidebar_header'>
        <AiTwotoneShop />
        <p>ALMADINA<span> CLINIC </span></p>
      </div>
      <div className='sidebar_routes'>
        <ul>
          {routes.map((route) => (
            <li key={route.icon}>
              <NavLink to={route.path}>
                <route.icon />
                <span>{route.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='user-profile-container'>
          <div className='user-container'>
            <img src={user} alt='' />
            <p>BUKAR SAMUEL</p>
          </div>
          <NavLink to='/settings' className='profile_link'>
            Open Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;