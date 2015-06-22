/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Footer.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';

@withViewport
@withStyles(styles)
class Footer {

  static propTypes = {
    viewport: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired,
    path: PropTypes.string.isRequired
  };

  render() {
    // This is just an example how one can render CSS
    let { width, height } = this.props.viewport;
    this.renderCss(`.Footer-viewport:after {content:' ${width}x${height}';}`);

    return (
      <div className="Footer">
        <div className="Footer-container">
          {
            this.props.path === '/publish' ? (
              <a href="/">
                <img src="//placehold.it/100x30"/>
              </a>) : (
              <a href="/publish">
                 <img src="//placehold.it/100x30"/>
              </a>
            )
          }
        </div>
      </div>
    );
  }

}

export default Footer;
