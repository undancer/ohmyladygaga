/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Navigation.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';

@withStyles(styles)
class Navigation {

  render() {
    return (
      <ul className="nav navbar-nav">
        <li><a href="/news" onClick={Link.handleClick}>新鲜事</a></li>
        <li><a href="/chat">交流</a></li>
        <li><a className="logo" href="/" onClick={Link.handleClick}>
          <img alt="Brand" src="/images/logo.png"/>
          </a></li>
          <li><a href="/events" onClick={Link.handleClick}>活动</a></li>
          <li><a href="/profile" onClick={Link.handleClick}>个人主页</a></li>
        </ul>
    );
  }

}

export default Navigation;
