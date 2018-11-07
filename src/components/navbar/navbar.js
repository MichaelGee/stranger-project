import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
        <div>
            <nav>
    <div className="nav-wrapper navbar">
      <a href="" className="brand-logo logo">Stranger</a>
      <a href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
      <li><a href="sass.html">LOCATE A BUSINESS</a></li>
    <li><a href="badges.html">LOGIN</a></li>
    <li><a href="collapsible.html">SIGN UP</a></li>
      </ul>
    </div>
  </nav>
  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html">LOCATE A BUSINESS</a></li>
    <li><a href="badges.html">LOGIN</a></li>
    <li><a href="collapsible.html">SIGN UP</a></li>
  </ul>
  </div>
     )
    }
}

export default Navbar;