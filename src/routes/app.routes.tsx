import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'

import { CustomDrawer } from '../components/CustomDrawer';

import { CustomerOrders } from '../screens/CustomerOrders';
import { UserProfile } from '../screens/UserProfile';
import { MapRide } from '../screens/MapRide';
import { Support } from '../screens/Support';
import { Home } from '../screens/Home';

const Drawer = createDrawerNavigator();

export function AppRoutes() {
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
        name='Novo Pedido'
        component={Home}
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
        name='Mapa'
        component={MapRide}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name='map-outline'
              size={20}
              color={color}
            />
          )
        }}
      />

      <Drawer.Screen
        name='Histórico de Pedidos'
        component={CustomerOrders}
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

      <Drawer.Screen
        name='Suporte'
        component={Support}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name='help-buoy-outline'
              size={20}
              color={color}
            />
          )
        }}
      />

    </Drawer.Navigator>
  )
}