/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import withStyles from '../../decorators/withStyles';
import styles from './ChatPage.less';
@withStyles(styles)


class ChatContainer extends React.Component {
  render() {
    var createItem = function(itemText) {
      return (
        <div className="message me">
          <img src="http://api.randomuser.me/portraits/med/women/36.jpg" />
          <div><p>{itemText}</p></div>
        </div>
      );
    };
    return <div>{this.props.items.map(createItem)}</div>;
  }
}
class ChatPage extends React.Component{

  static propTypes = {
    items: PropTypes.array.isRequired,
    text: PropTypes.string
  };
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };
  static defaultProps = {
    items: [],
    text: ''
  };

  componentWillUpdate() {
    var node = React.findDOMNode(this);
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      var node = React.findDOMNode(this);
      console.log(node);
      node.scrollTop = node.scrollHeight
    }
  }

  constructor(props) {
    super(props);
    this.state = { items: props.items, text: props.text};
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  }

  render() {
    let title = '聊天';
    this.context.onSetTitle(title);
    return (
    <div id="device">
      <div className="chat">
        <div className="message">
          <img src="http://api.randomuser.me/portraits/med/men/66.jpg" />
          <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget pretium sapien, et gravida metus.</p></div>
        </div>
        <div className="message">
          <img src="http://api.randomuser.me/portraits/med/men/66.jpg" />
          <div><p>Aliquam gravida semper pharetra.</p></div>
        </div>
        <div className="message me">
          <img src="http://api.randomuser.me/portraits/med/women/36.jpg" />
          <div><p>
            Curabitur congue lorem quis dolor blandit hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Vivamus bibendum efficitur tortor, non porttitor magna imperdiet in.
          </p></div>
        </div>
        <div className="message me">
          <img src="http://api.randomuser.me/portraits/med/women/36.jpg" />
          <div><p>Curabitur feugiat libero sed lacinia sollicitudin.</p></div>
        </div>
        <div className="message me">
          <img src="http://api.randomuser.me/portraits/med/women/36.jpg" />
          <div><p>Cras mollis nisl ac velit euismod ultrices.</p></div>
        </div>
        <div className="message">
          <img src="http://api.randomuser.me/portraits/med/men/66.jpg" />
          <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget pretium sapien, et gravida metus.</p></div>
        </div>
        <div className="message">
          <img src="http://api.randomuser.me/portraits/med/men/66.jpg" />
          <div><p>Aliquam gravida semper pharetra.</p></div>
        </div>
        <ChatContainer items={this.state.items}/>
      </div>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div className="input-area">
        <div className="input-wrapper">
          <input type="text" onChange={this.onChange.bind(this)} value={this.state.text} />
          </div>
          </div>
        </form>
        </div>
    );
  }
}

export default ChatPage;
