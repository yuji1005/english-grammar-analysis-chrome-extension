import React, { ReactElement } from 'react';
import { Container, Select } from '@mantine/core';

const Popup = (): ReactElement => {
  document.body.style.width = '0rem';
  document.body.style.height = '0rem';
  return <Container p="xl"></Container>;
};

export default Popup;
