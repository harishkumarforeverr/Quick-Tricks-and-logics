import React from "react";
import { Form, Input, Button } from "antd";

const ModalFormComponent = ({ form }) => {
  const { getFieldDecorator } = form;
  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  const rule = ({ required, message }) => {
    return {
      rules: [
        {
          required,
          message
        }
      ]
    };
  };
  const rulesObj = {
    title: rule({
      required: true,
      message: "Please input the title of collection!"
    })
  };
  return (
    <Form onSubmit={handleSubmit} layout="vertical">
      <Form.Item label="Title">
        {getFieldDecorator("title", rulesObj.title)(<Input />)}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

const ModalForm = Form.create({ name: "modal_form" })(ModalFormComponent);

export default ModalForm;
