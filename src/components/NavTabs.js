import React from "react";
import { Link } from "react-router-dom";



function NavTabs() {
return (
<nav class="navbar">
    <ul>
        <li>
            <Link class="brand">
                <a href="/"><div class="glogo">GLOW</div> Clicky Game</a>
            </Link>
        </li>
        <li>
            Click an image to begin!
        </li>
        <li>
            Score: 0 | Top Score: 0
        </li>
    </ul>
</nav>);
}
export default NavTabs;