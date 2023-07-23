import React from 'react';
import {Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Links = ({route}) => {
    return (
        <li className='mr-4 hover:bg-purple-600'>
            {/* <Link  to={route.path}>{route.name}</Link> */}
            <ActiveLink to={route.path}>{route.name}</ActiveLink>
        </li>
    );
};

export default Links;