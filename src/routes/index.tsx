import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { useAuth } from '../contexts/auth';

import { AuthRoutes } from './auth.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}