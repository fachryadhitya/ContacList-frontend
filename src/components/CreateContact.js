import React, { Component } from "react";
import { Form, Input, Radio, Button, Alert } from "antd";
import axios from 'axios'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};
const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

class CreateContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contact_name: "",
      contact_number: "",
      contact_priority: "",
    };

    this.onChangeContactnumber = this.onChangeContactNumber.bind(this);
    this.onChangeContactName = this.onChangeContactName.bind(this);
    this.onChangeContactPriority = this.onChangeContactPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChangeContactName = (event) => {
    this.setState({
      contact_name: event.target.value,
    });
  };

  onChangeContactNumber = (event) => {
    this.setState({
      contact_number: event.target.value,
    });
  };

  onChangeContactPriority = (event) => {
    this.setState({
      contact_priority: event.target.value,
    });
  };

  onSubmit = (event) => {
    if (event && event.preventDefault) {
        event.preventDefault()
    }
    console.log("Contact Submitted");
    console.log(`Name: ${this.state.contact_name}`);
    console.log(`number: ${this.state.contact_number}`);
    console.log(`Priority: ${this.state.contact_priority}`);
    

    const newContact = {
      contact_name: this.state.contact_name,
      contact_number: this.state.contact_number,
      contact_priority: this.state.contact_priority
    }

    axios.post('https://intense-sea-30415.herokuapp.com/contact/add', newContact)
    .then(res => console.log(res.data))
    
    

    this.setState({
      contact_name: "",
      contact_number: "",
      contact_priority: "",
    });
  };

  render() {
    const { contact_name, contact_number, contact_priority } = this.state;

    return (
      <Form style={{ marginTop: "10px" }} onFinish  ={this.onSubmit} {...layout}>
        <Form.Item
          label="Name"
          rules={[{ required: true, message: "Please Input Your Name" }]}
        >
          <Input onChange={this.onChangeContactName} value={contact_name} />
        </Form.Item>

        <Form.Item
          label="Number"
          rules={[
            { required: true, message: "Please Input Your Phone Number" },
          ]}
        >
          <Input
            onChange={this.onChangeContactNumber}
            value={contact_number}
          ></Input>
        </Form.Item>

        <Radio.Group
          onChange={this.onChangeContactPriority}
          value={contact_priority}
          style={{display: "flex", justifyContent: "center"}}
        >
          <Radio style={radioStyle } value="Personal" checked={contact_priority === "Personal"}>
            Personal
          </Radio>

          <Radio style={radioStyle} value="Work" checked={contact_priority === "Work"}>
            Work
          </Radio>
        </Radio.Group>

        <Form.Item style={{display: 'flex', justifyContent: "center"}}>
            <Button type="primary" htmlType="submit" >Submit</Button>
        </Form.Item>
        
      </Form>
      
    );
  }
}

export default CreateContact;
