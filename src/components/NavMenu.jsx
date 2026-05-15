import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const menuItems = [
  '관람 정보',
  '전시',
  '교육',
  '문화행사',
  '소장품',
  '학술행사·출판',
  '소식·참여',
  '박물관 소개'
];

function NavMenu() {
  return (
    <nav className="main-nav-menu">
      <div className="nav-menu-container">
        <ul className="nav-menu-list">
          {menuItems.map((item, index) => (
            <li key={index} className="nav-menu-item">
              <Link to="/test-page" className="nav-menu-link">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavMenu;
