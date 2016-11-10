import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import {Signin, Register, Forgot, PasswordReset} from '../components/Accounts.jsx';
//import UserAdmin from '../components/admin/Users.jsx';
import CardContainer from './Card.jsx';
import ComponentView from '../components/Component.jsx';
import Config from './Config.jsx';
import Lobby from './Lobby.jsx';
import Client from '../components/Client.jsx';

const TestCard = (props) => {
  return <CardContainer test={true} params={props.params} />
};
class NoMatch extends Component {
  render(){
    return (<div>No route matches your request. <a href="/">Go Home.</a></div>);
  }
}

const routes = [
{
  path: '/config',
  component: Config,
},
{
  path: '/app',
  component: Client,
},
{
  path: '/component/:component',
  component: ComponentView,
},
{
  path: '/',
  component: Lobby,
},
{
  path: '/login',
  component: Signin
},
{
  path: '/register',
  component: Register
},
{
  path: '/forgot',
  component: Forgot
},
{
  path: '/test',
  component: TestCard
},
{
  path: '/test/:component',
  component: TestCard
},
/* This component is currently broken. Needs fixed.
{
  path: '/admin/users',
  component: UserAdmin
},*/
{
  path: "/reset_password/:resetLink",
  component: PasswordReset
},
{
  path: '*',
  component:NoMatch
}
];

export default class App extends Component {
  render() {
    return (
      <Router routes={routes} history={browserHistory} />
      );
  }
}