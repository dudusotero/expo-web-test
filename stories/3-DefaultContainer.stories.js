import React from 'react';
import { Text } from 'react-native'
import { DefaultContainer } from '../components'

export default {
  title: 'DefaultContainer',
};

export const defaultContainer = () => (
  <DefaultContainer>
    <Text>Default Container</Text>
  </DefaultContainer>
);