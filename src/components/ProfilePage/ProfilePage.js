/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ProfilePage.less';

import withStyles from '../../decorators/withStyles';
@withStyles(styles)
class ProfilePage {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: '个人主页'
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className="ProfilePage">
        <div className="container list-group">
          <div className="row list-group-item">
            <div className="col-xs-6 text-center">
              <img src="./images/photo_lili.png" alt="" className="img-circle img-thumbnail"/>
            </div>
            <div className="col-xs-6">
              <table className="table table-condensed">
                <tbody>
                  <tr>
                    <td className="no-border-top">姓名: 李杰</td>
                    <td className="no-border-top">性别: 女</td>
                  </tr>
                <tr>
                  <td className="no-border-top">年龄: 31</td>
                  <td className="no-border-top">星座: 金牛座</td>
                </tr>
                <tr>
                  <td className="no-border-top">公司: 丰联广场</td>
                  <td className="no-border-top">职位: 专员</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="row list-group-item">
            <div className="col-xs-4 text-center">
              <h4>24</h4>
              <p>我like的人</p>
            </div>
            <div className="col-xs-4 text-center">
              <h4>36</h4>
              <p>like我的人</p>
            </div>
            <div className="col-xs-4 text-center">
              <h4>+3</h4>
              <p>好友添加</p>
            </div>
          </div>

          <div className="row list-group-item">
            <div className="col-xs-4">
              <p>我的群组</p>
            </div>
            <div className="col-xs-4">
              <p><i className="fa fa-users"></i> 丰联广场</p>
              <p><i className="fa fa-users"></i> 丰联广场</p>
              <p><i className="fa fa-users"></i> 丰联广场</p>
            </div>
          </div>

          <div className="row list-group-item">
            <div className="col-xs-12">我的动态</div>
          </div>

          <div className="row list-group-item">
            <div className="col-xs-12"><h4>#望京souho# 最近招商通知</h4></div>
            <div className="col-xs-6">日期：2015.05.21 <span>发表了话题</span></div>
            <div className="col-xs-3 text-right">
              <p><i className="fa fa-heart-o"></i> 23</p>
            </div>
            <div className="col-xs-3 text-right">
              <p><i className="fa fa-comments-o"></i> 45</p>
            </div>
          </div>

          <div className="row list-group-item">
            <div className="col-xs-12"><h4>大学生喜爱的就业行业</h4></div>
            <div className="col-xs-6">日期：2015.05.21 <span>发表了文章</span></div>
            <div className="col-xs-3 text-right">
              <p><i className="fa fa-heart-o"></i> 23</p>
            </div>
            <div className="col-xs-3 text-right">
              <p><i className="fa fa-comments-o"></i> 45</p>
            </div>
          </div>

          <div className="row list-group-item">
            <div className="col-xs-12"><h4>北京第三届xx行业交流会</h4></div>
            <div className="col-xs-6">日期：2015.05.21 <span>发表了活动</span></div>
            <div className="col-xs-3 text-right">
              <p><i className="fa fa-heart-o"></i> 23</p>
            </div>
            <div className="col-xs-3 text-right">
              <p><i className="fa fa-comments-o"></i> 45</p>
            </div>
          </div>


        </div>
      </div>
    );
  }

}

export default ProfilePage;
