/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Firebase from 'firebase';
//var firebaseRef = new Firebase("https://reactchat-satococoa.firebaseio.com/");

//class CommentBox extends React.Component{
//  static propTypes = {
//    data: PropTypes.array
//  };
//
//  static contextTypes = {
//    onSetTitle: PropTypes.func.isRequired
//  };
//
//  static defaultProps = {
//    data: []
//  };
//
//  componentDidMount() {
//    this.fetchComment();
//  }
//  fetchComment() {
//    firebaseRef.child('comments').on('child_added', function(snapshot) {
//      comment = snapshot.val();
//      comment.id = snapshot.key();
//      data = this.state.data;
//      data.push(comment);
//      this.setState({data: data});
//    }.bind(this));
//  }
//  postComment(comment) {
//    firebaseRef.child('comments').push(comment);
//  }
//  render() {
//    let title = '最近联系人';
//    this.context.onSetTitle(title);
//    return (
//      <div className="commentBox">
//        <CommentForm commentHandler={this.postComment} />
//        <CommentList data={this.state.data} />
//      </div>
//    );
//  }
//};
//
//var Comment = React.createClass({
//  render: function() {
//    return (
//      <li className="commentList__comment">
//        <div className="commentList__name">
//          {this.props.name}
//        </div>
//        <div className="commentList__body">
//          {this.props.children}
//        </div>
//      </li>
//    );
//  }
//});
//
//var CommentList = React.createClass({
//  render: function() {
//    var comments = this.props.data.map(function(comment) {
//      return (
//        <Comment key={comment.id} name={comment.name}>
//          {comment.text}
//        </Comment>
//      );
//    });
//    return (
//      <ul className="commentList">
//        {comments.reverse()}
//      </ul>
//    );
//  }
//});
//
//var CommentForm = React.createClass({
//  handleSubmit: function(e) {
//    e.preventDefault();
//    nameElem = React.findDOMNode(this.refs.name);
//    commentElem = React.findDOMNode(this.refs.comment);
//    comment = {
//      name: nameElem.value.trim(),
//      text: commentElem.value.trim()
//    };
//    commentElem.value = '';
//    this.props.commentHandler(comment);
//  },
//  render: function() {
//    return (
//      <form className="commentForm" onSubmit={this.handleSubmit}>
//        <div className="commentForm__name">
//          <input type="text" placeholder="Your name..." ref="name" />
//        </div>
//        <div className="commentForm__body">
//          <input type="text" placeholder="Comment here..." ref="comment" />
//        </div>
//        <div className="commentForm__submit">
//          <input type="submit" value="Submit" />
//        </div>
//      </form>
//    );
//  }
//});
//
//export default CommentBox;
