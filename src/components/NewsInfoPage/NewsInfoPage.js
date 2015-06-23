/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import styles from './NewsInfoPage.less';

import withStyles from '../../decorators/withStyles';
@withStyles(styles)

class NewsInfoPage extends React.Component{


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

  render() {
    let title = '新鲜事';
    this.context.onSetTitle(title);
    return (
      <div className="NewsPage-container container">
        <div className="row">
          <div className="col-xs-12">
            <h3 className="text-center">佛罗里达的致富经</h3>
            <img src="/images/picture_1.png" className="object-thumbnail"/>
            <p>Twitter 在递交</p>
            <p>地点: 北京大饭店会议厅</p>
            <p>活动详情:</p>
            <p>为了帮助上海包装企业家拓宽发展思路，本次会议特别将河南省南阳金牛彩印集团有限公司副总经理张惠忠两位专家“请进来”交流</p>
            <p>联系人: 李女士 138000000</p>
            <p>报名截止: 2015.05.30</p>
            <p>报名限制: 100人</p>
          </div>
        </div>

      </div>
    );
  }

}


export default NewsInfoPage;
