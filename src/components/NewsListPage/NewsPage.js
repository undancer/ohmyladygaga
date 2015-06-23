/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import styles from './NewsPage.less';

import withStyles from '../../decorators/withStyles';
@withStyles(styles)
class NewsListPage extends React.Component {
  render() {
  var createItem = function(itemText, index) {
    return (
      <a href="/news/1" className="list-group-item" key={index + itemText}>
        <div className="row">
          <div className="col-xs-12">
            <h4 className="list-group-item-heading"> {itemText}</h4>
          </div>
          <div className="col-xs-8">
            <p className="list-group-item-text">发布人:lizhi 日期<time> 2015.02.01</time></p>
          </div>
          <div className="col-xs-2">
            <p><i className="fa fa-heart-o"></i> 23</p>
          </div>
          <div className="col-xs-2">
            <p><i className="fa fa-comments-o"></i> 23</p>
          </div>
        </div>
      </a>
    );
  };
  return (
    <div className="list-group">
      <a href="/event/1" className="list-group-item">
        <div className="row object">
          <img src="/images/picture_2.png" alt="" className="img-thumbnail object-thumbnail"/>
          <div className="object-caption text—center">
           <h3>佛罗里达的致富经</h3>
          </div>
        </div>
      </a>
      {this.props.items.map(createItem)}
    </div>
  );
}
}
class NewsPage extends React.Component{

  static propTypes = {
    items: PropTypes.array,
    text: PropTypes.string
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  static defaultProps = {
    items: ['宝源国际购物中心招商', '望京soho招商'],
    text: ''
  };

  constructor(props) {
    super(props);
    this.state = { items: props.items, text: props.text};
  }
  render() {
    let title = '新鲜事';
    this.context.onSetTitle(title);
    return (
      <div>
        <NewsListPage items={this.state.items} />
      </div>
    );
  }

}


export default NewsPage;
