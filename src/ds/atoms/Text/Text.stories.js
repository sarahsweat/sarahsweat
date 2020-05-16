import React from 'react';
import { Heading, SubHeading, BodyText } from './Text';

export default { title: 'Text' };

const style = {
  backgroundColor: 'grey',
}

export const Text = () => (
  <div style={style}>
    <Heading>Heading</Heading>
    <SubHeading>SubHeading</SubHeading>
    <BodyText>BodyText</BodyText>
  </div>
);

