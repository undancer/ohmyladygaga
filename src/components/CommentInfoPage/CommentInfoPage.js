/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

class CommentsListPage extends React.Component {
  render() {
    var createItem = function(itemText, index) {
      return (
      <div className="media">
        <div className="media-left">
          <a>
            <img className="media-object" src="http://placehold.it/50x50" alt="userPhoto" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">用户1</h4>
          <p> {itemText}</p>
        </div>
      </div>
      );
    };
    return <div className="list-group">{this.props.items.map(createItem)}</div>;
  }
}
class CommentInfoPage extends React.Component{


  static propTypes = {
    items: PropTypes.array,
    text: PropTypes.string
  };
  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };
  static defaultProps = {
    items: [],
    text: ''
  };
  constructor(props) {
    super(props);
    this.state = { items: props.items, text: props.text};
  }
  onChange(e) {
    console.log(e.target.value);
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  }

  render() {
    let title = '活动';
    this.context.onSetTitle(title);
    return (
      <div className="media">
        <div className="media-left">
          <a>
            <img className="media-object" src="http://placehold.it/50x50" alt="userPhoto" />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">用户1</h4>
            <p>发布于 2015</p>
          </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea onChange={this.onChange.bind(this)} value={this.state.text} />
          <button>{'发送'}</button>
        </form>
        <CommentsListPage items={this.state.items} />
        </div>
    );
  }

}


export default CommentInfoPage;
