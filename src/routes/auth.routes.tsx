import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AdminRoutes } from './admin.routes';
import { AppRoutes } from './app.routes';

import { PrivacyPolicy } from '@screens/PrivacyPolicy';
import { TermsOfUse } from '@screens/TermsOfUse';
import { ResetPass } from '@screens/ResetPass';
import { Welcome } from '@screens/Welcome';
import { SignUp } from '@screens/SignUp';
import { SignIn } from '@screens/SignIn';

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name='Welcome'
        component={Welcome}
      />

      <Stack.Screen
        name='SignIn'
        component={SignIn}
      />

      <Stack.Screen
        name='Esqueci Minha Senha'
        component={ResetPass}
      />

      <Stack.Screen
        name='Cadastro'
        component={SignUp}
      />

      <Stack.Screen
        name='Termos de Uso'
        component={TermsOfUse}
      />

      <Stack.Screen
        name='Política de Privacidade'
        component={PrivacyPolicy}
      />

      <Stack.Screen
        name='Home'
        component={AppRoutes}
      />

      <Stack.Screen
        name='Home Admin'
        component={AdminRoutes}
      />

    </Stack.Navigator>
  )
}