import React from 'react';
import FilterToggle from '../containers/FilterToggle';


const Footer = () => (
    <p>
        Show: <FilterToggle filter="SHOW_ALL">ALL TASKS</FilterToggle>
        {" "}
        <FilterToggle filter="SHOW_ACTIVE">TASK ACTIVE</FilterToggle>
        {" "}
        <FilterToggle filter="SHOW_COMPLETED">TASK COMPLETED</FilterToggle>
    </p>
);

export default Footer;