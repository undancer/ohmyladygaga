/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles';
import styles from './CommentsListPage.less';
@withStyles(styles)
class CommentsListPage extends React.Component {
  render() {
  var createItem = function(itemText, index) {
    return (
      <a href="/events/1" className="list-group-item" key={index + itemText}>
        <div className="row orange-list-container">
          <div className="col-xs-8 ">
            <h4 className="list-group-item-heading"> {itemText}</h4>
            <p className="list-group-item-text bottom-aligned-text">发布人:lizhi 日期<time> 2015.02.01</time></p>
          </div>
          <div className="col-xs-4 text-center">
            <button className="btn btn-circle btn-lg">
              报名
            </button>
            <p>已有 <span className="orange">30</span> 人报名</p>
          </div>
        </div>
      </a>
    );
  };
  return <div className="list-group">{this.props.items.map(createItem)}</div>;
}
}
class CommentsPage extends React.Component{

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
    let title = '活动';
    this.context.onSetTitle(title);
    return (
      <div>
        <CommentsListPage items={this.state.items} />
      </div>
    );
  }

}


export default CommentsPage;
