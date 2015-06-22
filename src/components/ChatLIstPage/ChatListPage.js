/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
class GroupListPage extends React.Component {
  render() {
  var createItem = function(itemText, index) {
    return (
      <a href="/chat/1" key={index + itemText}>
        <div className="row list-group-item">
          <div className="col-xs-2">
            <img className="img-circle" src="http://placehold.it/50x50" alt="userPhoto" />
          </div>
          <div className="col-xs-8">
            <h4 className="list-group-item-heading">{itemText}</h4>
            <p className="list-group-item-text">消息</p>
          </div>

          <div className="col-xs-2">
            <p>凌晨</p>
          </div>
        </div>
      </a>
    );
  };
  return (
    <div>
      {this.props.items.map(createItem)}
    </div>
  );
}
}
class ChatPages extends React.Component{

  static propTypes = {
    groups: PropTypes.array,
    users: PropTypes.array,
    text: PropTypes.string
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  static defaultProps = {
    groups: ['宝源国际购物中心招商', '望京soho招商'],
    users: ['yonghu1','yonghu2']
  };

  constructor(props) {
    super(props);
    this.state = { groups: props.groups, users: props.users};
  }
  render() {
    let title = '最近联系人';
    this.context.onSetTitle(title);
    return (
      <div className="container">
        <div className="row">
          <p><i className="fa fa-users"></i> 最近联系组</p>
          <GroupListPage items={this.state.groups} />
        </div>

        <div className="row">
          <p><i className="fa fa-users"></i> 最近联系人</p>
          <GroupListPage items={this.state.users} />
        </div>

      </div>
    );
  }

}


export default ChatPages;
