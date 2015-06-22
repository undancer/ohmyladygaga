/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import styles from './CommentInfoPage.less';

import withStyles from '../../decorators/withStyles';
@withStyles(styles)
class CommentsListPage extends React.Component {
  render() {
    var createItem = function(itemText) {
      return (
        <div className="row list-group-item comments">
          <div className="col-xs-2">
            <img className="img-circle" src="/images/photo_marry.png" alt="userPhoto" />
          </div>
          <div className="col-xs-8">
            <h4 className="list-group-item-heading">Marry</h4>
            <p className="list-group-item-text">{itemText}</p>
          </div>

          <div className="col-xs-2">
            <span>凌晨 0:13</span>
            <a href="#"><p><span>回复他</span></p></a>
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
      <div className="CommentsPage container list-group">
        <div className="row list-group-item">
          <div className="col-xs-12">
            <div className="media">
              <div className="media-left">
                <a>
                  <img className="media-object img-circle" src="/images/photo_lili.png" alt="userPhoto" />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Marry</h4>
                <p>发布于: 2015.05.15</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row list-group-item">
          <div className="col-xs-12">
            <h3 className="text-center">xx行业交流会</h3>
            <img src="/images/picture_1.png" className="object-thumbnail"/>
            <p>时间: 2015.06.07 15:00</p>
            <p>地点: 北京大饭店会议厅</p>
            <p>活动详情:</p>
            <p>为了帮助上海包装企业家拓宽发展思路，本次会议特别将河南省南阳金牛彩印集团有限公司副总经理张惠忠两位专家“请进来”交流</p>
            <p>联系人: 李女士 138000000</p>
            <p>报名截止: 2015.05.30</p>
            <p>报名限制: 100人</p>
          </div>
          <div className="col-xs-12">
            <button className="btn btn-primary btn-block">立即报名</button>
          </div>
        </div>

        <div className="row list-group-item">
          <div className="col-xs-12">
            <h5>已报名用户</h5>
            <hr/>
          </div>
        </div>
        <div className="row list-group-item comments">
          <div className="col-xs-3">
            <img className="img-circle" src="/images/photo_marry.png" alt="userPhoto" />
          </div>
          <div className="col-xs-3">
            <img className="img-circle" src="/images/photo_marry.png" alt="userPhoto" />
          </div>
          <div className="col-xs-3">
            <img className="img-circle" src="/images/photo_marry.png" alt="userPhoto" />
          </div>
          <div className="col-xs-3">
            <img className="img-circle" src="/images/button_more.png" alt="userPhoto" />
          </div>
        </div>


        <div className="row list-group-item">
          <div className="col-xs-12">
            <h5>评论</h5>
            <hr/>
          </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="col-xs-12">
                <textarea className="form-control" rows="3" onChange={this.onChange.bind(this)} value={this.state.text} />
              </div>
              <div className="col-xs-10"></div>
              <div className="col-xs-2">
                <button className="btn btn-primary btn-block">{'发送'}</button>
              </div>
            </form>

        </div>
        <div className="row list-group-item">
          <div className="col-xs-12">
            <h5>网友评论</h5>
            <hr/>
          </div>
        </div>
        <CommentsListPage items={this.state.items}/>
      </div>
    );
  }

}


export default CommentInfoPage;
