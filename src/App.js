import React from "react";
import "./App.css";
import { PageHeader, Menu } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contactlist from "./components/ContactList";
import EditContact from "./components/EditContact";
import CreateContact from "./components/CreateContact";
import {EditTwoTone} from '@ant-design/icons'


function App() {
  return (
    <Router>
      <PageHeader title="Contact App" />
      <div>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item>
            <Link to="/">Contact List</Link>
          </Menu.Item>
          <Menu.Item icon={<EditTwoTone />}>
            <Link to='/create'>Add Contact</Link>
          </Menu.Item>
        </Menu>
      </div>

      <Route path="/" component={Contactlist} exact = {true}  />
      <Route path="/edit/:id" component={EditContact} />
      <Route path="/create" component={CreateContact} />
    </Router>
  );
}

export default App;
