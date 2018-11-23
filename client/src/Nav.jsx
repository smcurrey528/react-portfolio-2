import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="site-intro">
            <div className="site-text">
             Hey I'm Sarah, an enthusiast of
             <br/>
             Southern hospitality and Northern efficiency.
            </div>
          </div>
          <nav className="site-nav">
                    <ul className="site-menu site-menu-animated">
              <li className="site-menu-item category-blog">
                <a href="/blog/">Work</a>
              </li>
              <li className="site-menu-item category-work">
                <a href="/">Articles</a>
              </li>
              <li className="site-menu-item category-contact">
                <a href="/contact/">About</a>
              </li>
              <li className="site-menu-item category-shop">
                <a href="/shop/">Chat</a>
              </li>
            </ul>
         </nav>

         </React.Fragment>

    );
  }
}

export default Nav;