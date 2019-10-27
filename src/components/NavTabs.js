import React from "react";



const NavTabs = (props) => {
return (
<div className='navbarCont' >
            <ul className ='navLinks'>
                <li><div class="glogo">Glow</div> Clicky Game </li>
                <li>{props.message}</li>
                <li>{`Score : ${props.wins} wins and ${props.losses} losses `}</li>
            </ul>

        </div>
        )
}

export default NavTabs;