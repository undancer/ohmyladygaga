/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import Header from '../Header';
import ProfilePage from '../ProfilePage';
import ContactPage from '../ContactPage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import NotFoundPage from '../NotFoundPage';
import CommentsListPage from '../CommentsListPage';
import CommentInfoPage from '../CommentInfoPage';
import NewsListPage from '../NewsListPage';
import ChatListPage from '../ChatListPage';
import ChatPage from '../ChatPage';
import PublishPage from '../PublishPage';
import NewsInfoPage from '../NewsInfoPage';
import Footer from '../Footer';
const pages = { ProfilePage, NewsListPage, LoginPage, RegisterPage, NotFoundPage, CommentsListPage, CommentInfoPage };

@withContext
@withStyles(styles)
class App {

  static propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.path !== nextProps.path;
  }

  render() {
    let component;

    switch (this.props.path) {

      case '/':
      case '/events':
        component = <CommentsListPage />;
        break;

      case '/events/1':
        component = <CommentInfoPage />;
        break;

      case '/profile':
        component = <ProfilePage />;
        break;

      case '/news':
        component = <NewsListPage />;
        break;
      case '/news/1':
        component = <NewsInfoPage />;
        break;
      case '/chat':
        component = <ChatListPage />;
        break;
      case '/chat/1':
        component = <ChaPage />;
        break;
      case '/publish':
        component = <PublishPage />;
        break;
    }
    console.log(this.props)
    return component ? (

      <div>
        <Header/>
        {component}
        <Footer path={this.props.path}/>
      </div>
    ) : <NotFoundPage />;
  }

  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, {replace: !!event.state});
  }

}

export default App;
