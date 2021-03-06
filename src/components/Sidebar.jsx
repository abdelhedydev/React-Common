/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import SidebarWrapper from './SidebarWrapper';

const Sidebar = ({ className }) => (
  <div className={className}>
    <div className="navbar">
      <input type="checkbox" hidden className="navbar__checkbox" id="navbar__checkbox" />
      <label htmlFor="navbar__checkbox" id="test">
        <div className="navbar-icon">
            &nbsp;
        </div>
      </label>
      <ul className="navbar__menu">
        <li>Item number 1</li>
        <li>Item number 2</li>
        <li>Item number 3</li>
      </ul>
    </div>
  </div>
);
Sidebar.propTypes = {
  className: PropTypes.string,
};
export default SidebarWrapper(Sidebar);
