import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>Matches</NavLink>
        </li>
        {/* <li>
            <NavLink to="/channels">Channels</NavLink>
        </li> */}
        {/* <li>
            <NavLink to="/1/places">Channels</NavLink>
        </li> */}
        {/* <li>
            <NavLink to="/places/new">New Place</NavLink>
        </li> */}
        <li>
            <NavLink to="/auth">Authenticate</NavLink>
        </li>
    </ul>
};

export default NavLinks;