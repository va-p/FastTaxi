import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'

import { CustomDrawer } from '../components/CustomDrawer';

import { UserProfile } from '../screens/UserProfile';
import { HomeAdmin } from '../screens/HomeAdmin';
import { Customers } from '../screens/Customers';
import { Orders } from '../screens/Orders';

const Drawer = createDrawerNavigator();

export function AdminRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: '#9387C0',
        drawerActiveTintColor: '#9387C0'
      }}
    >

      <Drawer.Screen
        name='Painel'
        component={HomeAdmin}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name='home-outline'
              size={20}
              color={color}
            />
          )
        }}
      />

      <Drawer.Screen
        name='Clientes'
        component={Customers}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name='people-outline'
              size={20}
              color={color}
            />
          )
        }}
      />

      <Drawer.Screen
        name='Histórico de Pedidos'
        component={Orders}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name='list-outline'
              size={20}
              color={color}
            />
          )
        }}
      />

      <Drawer.Screen
        name='Perfil'
        component={UserProfile}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name='person-outline'
              size={20}
              color={color}
            />
          )
        }}
      />

    </Drawer.Navigator>
  )
}