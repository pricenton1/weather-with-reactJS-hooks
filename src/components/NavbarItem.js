import React from 'react';
import {Link} from 'react-router-dom';

const NavbarItem = () => {
    const links = [
        {id:1, to:"/",url:"Home" },
        {id:2,to:"/cityname",url:"City Name"},
        {id:3,to:"/id",url:"ID City"},
        {id:4,to:"/coordinates",url:"Geographic Coordinates"},
        {id:5,to:"/zipcode",url:"Zip Code"}
    ]

    const linkList = links.map((link )=>{
        return(
        <li className="nav-item btn btn-outline-info btn-sm" style={{ marginRight: '20px' }}>
            <Link className="nav-link"
            key={link.id}
            to={link.to} 
        >
            {link.url}
            </Link>
        </li>
        )
    })
    return (
        <div>
            {linkList}
        </div>
    )
}
export default NavbarItem;
