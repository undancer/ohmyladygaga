/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './PublishPage.less';

import withStyles from '../../decorators/withStyles';
@withStyles(styles)
class PublishPage {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
    maxLines: PropTypes.number
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: '发布',
    maxLines: 1
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className="container Publish-container">
        <div className="row">
          <a href="">
            <div className="col-xs-12 text-center">
              <img src="/images/button_createactivity.png" alt=""/>
            </div>
          </a>
        </div>
        <div className="row">
          <a href="">
            <div className="col-xs-12 text-center">
              <img src="/images/button_createtopic.png" alt=""/>
            </div>
          </a>
        </div>
        <div className="row">
          <a href="">
            <div className="col-xs-12 text-center">
              <img src="/images/button_createpassage.png" alt=""/>
            </div>
          </a>
        </div>
      </div>

    );
  }

}

export default PublishPage;
