/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container container-fluid">
          <Navigation className="Header-nav" />

          </div>
        </nav>
    );
  }

}

export default Header;
