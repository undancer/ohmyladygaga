/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './Navigation.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';

@withStyles(styles)
class Navigation {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <a className="Navigation-link" href="/news" onClick={Link.handleClick}>新鲜事</a>
        <a className="Navigation-link" href="/chat" onClick={Link.handleClick}>交流</a>
        <a className="Navigation-link" href="/events" onClick={Link.handleClick}>活动</a>
        <a className="Navigation-link" href="/profile" onClick={Link.handleClick}>个人主页</a>
      </div>
    );
  }

}

export default Navigation;
