/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import Navigation from '../Navigation';
import AppActions from '../../actions/AppActions';
@withStyles(styles)
class Header {
  onChange() {
    AppActions.navigateTo(window.location.history(-1));
  }

  render() {
    return (

    <div className="Header">
      <div className="Header-container">
        <a className="Header-brand" href="/" onClick={this.onChange}>
          <i className="fa fa-chevron-left"></i>
        </a>
        <h3>{this.state}</h3>
      </div>
      <nav className="navbar navbar-default">
        <div className="container container-fluid">
          <Navigation className="Header-nav" />

        </div>
      </nav>
    </div>

    );
  }

}

export default Header;
