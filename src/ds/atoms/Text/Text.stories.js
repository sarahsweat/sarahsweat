import React from 'react';
import { Heading, SubHeading, BodyText, SectionHeading } from './Text';

export default { title: 'Text' };

const style = {
  backgroundColor: 'grey',
}

export const Standard = () => (
  <div style={style}>
    <Heading>Heading</Heading>
    <SubHeading>SubHeading</SubHeading>
    <SectionHeading>Section Heading</SectionHeading>
    <BodyText>BodyText</BodyText>
  </div>
);

