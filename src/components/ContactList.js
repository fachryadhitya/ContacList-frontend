import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './index.css'
const Contact = (props) => (
  <tr>
    <td>{props.contact.contact_name}</td>
    <td>{props.contact.contact_number}</td>
    <td>{props.contact.contact_priority}</td>
    <td>
      <Link to={"/edit/" + props.contact._id}>Edit</Link>
    </td>
  </tr>
);

class Contactlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://intense-sea-30415.herokuapp.com/contact/")
      .then((response) => {
        this.setState({
          contact: response.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  contactList() {
    return this.state.contact.map((currentContact, i) => {
      return <Contact contact={currentContact} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h2 style={{textAlign: 'center'}}>Contact List</h2>
        <table className="redTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.contactList()}</tbody>
        </table>
      </div>
    );
  }
}

export default Contactlist;
