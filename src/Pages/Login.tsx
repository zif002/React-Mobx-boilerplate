import React from 'react'
import { inject } from 'mobx-react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};
const Login = () => {
  return <Row justify="center">
    <Col span={8}>
    
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
        >
          <Form.Item
            labelCol={{ span: 24 }}
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 24 }}
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}  labelCol={{ span: 24 }} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout} >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
    </Col>
  </Row>
}

export default inject("AppState")(Login);