/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/**
 *
 * TutorsForm
 *
 */

import Form from 'antd/lib/form';
import Radio from 'antd/lib/radio';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import List from 'antd/lib/list';
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Select from 'antd/lib/select';
import InputNumber from 'antd/lib/input-number';
import styled from 'styled-components';
import Alert from 'antd/lib/alert';
import Logo from 'images/icon-512x512.png';
import CustomCard from '../CustomCard';

const StyledRow = styled(Row)`
  label {
    font-size: 16px !important;
    margin: 4px !important;

    ::before {
      font-weight: 800 !important;
      color: #9d0000 !important;
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
  }
`;

const { Option } = Select;

const degrees = [
  'SCHOOL',
  'ASSOCIATE',
  'BACHELORS',
  'MASTERS',
  'P.H.D. OR SIMILAR',
];

function TutorsForm(props) {
  const [scripts, setScript] = useState(0);

  const onChange = index => {
    setScript(index);
  };

  const onChangeBankDetails = e => {
    // props.setAddBankDetails(e.target.value);
  };

  return (
    <div style={{ background: 'fff' }}>
      <StyledRow align="middle" justify="center">
        <Col
          style={{ padding: '3% 0' }}
          sm={{ span: 24 }}
          md={{ span: 20 }}
          lg={{ span: 16 }}
          xl={{ span: 12 }}
        >
          <CustomCard
            margin="1%"
            // width="70%"
            shadow="0 1px 6px 0 rgb(32 33 36 / 20%)"
            borderRadius="8px"
            padding="20px"
            // color={'fff'}
          >
            <Col span={22} offset={1} style={{ alignItems: 'center' }}>
              <div style={{ fontSize: '40px', fontWeight: 600 }}>
                Composite Structure Generator
                <br />
              </div>
              <div style={{ fontSize: '17px', margin: '6px 2px' }}>
                Hi, welcome to the composite structure generator website, here
                you can generate Abaqus scripts to quickly generate composite
                structures of various types. New types will keep being added.{' '}
                <br /> <br />
                Run By: Dr. Atul Jain, Professor of Mechanical Engineering at
                IIT Kharagpur.
              </div>
              {props.errorMessages ? (
                props.errorMessages.map(errorMessage => (
                  <Alert
                    style={{ marginTop: '10px' }}
                    message={errorMessage}
                    type="error"
                    showIcon
                  />
                ))
              ) : (
                <span />
              )}
            </Col>

            <Form
              name="TutorsForm"
              style={{ marginTop: '3%' }}
              layout="vertical"
              labelCol={{
                span: 21,
                offset: 1,
              }}
              wrapperCol={{
                span: 21,
                offset: 1,
              }}
              initialValues={{
                phone_code: 91,
                already_tutor_somewhere_else: false,
                // add_bank_details: props.addBankDetails,
              }}
              autoComplete="off"
              // onFinish={props.handleSubmit}
            >
              <Form.Item
                label="Choose Your Script"
                placeholder="Script"
                name="script"
                rules={[{ required: true, message: 'This field is required' }]}
              >
                <Select
                  onChange={onChange}
                  style={{ width: '100%' }}
                  showSearch
                  defaultValue={0}
                >
                  {['Script1', 'Script2', 'Script3', 'Script4'].map(
                    (major, index) => (
                      <Option key={index} value={index}>
                        {major}
                      </Option>
                    ),
                  )}
                </Select>
              </Form.Item>

              {scripts === 0 ? (
                <div>
                  {' '}
                  <Form.Item
                    label="Breadth"
                    placeholder="Breadth"
                    name="breadth"
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label="Length"
                    placeholder="Length"
                    name="length"
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label="Depth/Height"
                    placeholder="Depth/Height"
                    name="height"
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label="Number of Fibres"
                    placeholder="Number of Fibres"
                    name="height"
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Matrix Youngs Modulus"
                    placeholder="Matrix Youngs Modulus"
                    name="height"
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label="Matrix Poisson's Ratio"
                    placeholder="Matrix Poisson's Ratio"
                    name="height"
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label="Fibre Youngs Modulus"
                    placeholder="Fibre Youngs Modulus"
                    name="height"
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label="Fibre Poisson's Ratio"
                    placeholder="Fibre Poisson's Ratio"
                    name="height"
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item justify="right">
                    <Button style={{ backgroundColor: 'blue', color: '#fff' }}>
                      Download Python Script
                    </Button>
                  </Form.Item>
                </div>
              ) : scripts === 1 ? (
                <div>
                  <Form.Item
                    label="Depth/Height"
                    placeholder="Depth/Height"
                    name="height"
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label="Number of Fibres"
                    placeholder="Number of Fibres"
                    name="height"
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item justify="right">
                    <Button style={{ backgroundColor: 'blue', color: '#fff' }}>
                      Download Python Script
                    </Button>
                  </Form.Item>
                </div>
              ) : (
                <div>
                  <Form.Item
                    label="Fibre Youngs Modulus"
                    placeholder="Fibre Youngs Modulus"
                    name="height"
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label="Fibre Poisson's Ratio"
                    placeholder="Fibre Poisson's Ratio"
                    name="height"
                    rules={[
                      { required: true, message: 'This field is required' },
                    ]}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item justify="right">
                    <Button style={{ backgroundColor: 'blue', color: '#fff' }}>
                      Download Python Script
                    </Button>
                  </Form.Item>
                </div>
              )}
            </Form>
          </CustomCard>
        </Col>
      </StyledRow>
    </div>
  );
}

TutorsForm.propTypes = {
  // handleSubmit: PropTypes.func,
  // handleDelete: PropTypes.func,
  // handleChange: PropTypes.func,
  // countryCodes: PropTypes.array,
  // universities: PropTypes.array,
  // skills: PropTypes.array,
  // currencyName: PropTypes.array,
  // currencyCode: PropTypes.array,
  // files: PropTypes.array,
  // errorMessages: PropTypes.array,
  // majors: PropTypes.array,
};

export default memo(TutorsForm);
