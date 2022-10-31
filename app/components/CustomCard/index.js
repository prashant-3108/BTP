/**
 *
 * CustomCard
 *
 */

import React, { memo } from 'react';
import Card from 'antd/lib/card';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CustomCard(props) {
  return (
    <Card
      extra={props.extra}
      style={{
        backgroundColor: props.color ? props.color : 'white',
        boxShadow: props.shadow || '0 15px 40px rgb(16 8 3 / 8%)',
        marginBottom: props.marginBottom || 'auto',
        marginLeft: props.marginLeft || 'auto',
        marginRight: props.marginRight || 'auto',
        borderRadius: props.borderRadius || 'auto',
        width: props.width || 'auto',
      }}
    >
      {props.children}
    </Card>
  );
}

CustomCard.propTypes = {
  extra: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  shadow: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
};

export default memo(CustomCard);
