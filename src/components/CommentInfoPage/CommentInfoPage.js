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
    var createItem = function(itemText) {
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
    let title = '活动详情';
    this.context.onSetTitle(title);
    return (
      <div className="container">
        <div className="row">
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

          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <h3>xx行业交流会</h3>
            <div className="thumbnail">
              <img src="http://placehold.it/50x50" />
                <div className="caption">
                  <p>地点</p>
                  <p>联系人</p>
                </div>
              </div>
            </div>
          </div>
        <div className="row">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <textarea className="form-control" rows="3" onChange={this.onChange.bind(this)} value={this.state.text} />
            <button  className="btn btn-primary">{'发送'}</button>
          </form>
        </div>
        <div className="row">
          <h4>网友评论</h4>
          <hr/>
          <CommentsListPage items={this.state.items} />
        </div>
      </div>

    );
  }

}


export default CommentInfoPage;
