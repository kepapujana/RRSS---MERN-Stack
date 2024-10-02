import React from 'react';
import { Button, Form, InputNumber, Select, Input } from 'antd';

const AddBook = () => {
  const { Option } = Select;

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item label="Book Name" name="name">
        <Input placeholder="Book name" />
      </Form.Item>
      <Form.Item name="GenreId" label="Select Genres">
        <Select mode="multiple" placeholder="Please select genre">
          <Option value="red">Red</Option>
          <Option value="green">Green</Option>
          <Option value="blue">Blue</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Price">
        <Form.Item name="price" noStyle>
          <InputNumber />
        </Form.Item>
        <span className="ant-form-text"> €</span>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddBook;
