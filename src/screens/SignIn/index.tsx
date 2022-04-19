import React from 'react';
import { Alert } from 'react-native';
import {
  Container,
  ContainerTextSign,
  Form,
  LinkSignin,
  TextSignin,

} from './styles';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Button';

import { useAuth } from '../../contexts/auth';

interface FormData {
  email: string;
  password: string;
}

/* Validation Form - Start */
const schema = Yup.object().shape({
  email: Yup.string().required('Informe o seu e-mail'),
  password: Yup.string().required('Informe a sua senha')
});
/* Validation Form - End */

export function SignIn({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const { signInWithXano, user } = useAuth();

  async function handleSignInWithXano(form: FormData) {
    const SignInUser = {
      email: form.email,
      password: form.password
    }

    try {
      await signInWithXano(SignInUser);
      if (user.isAdmin) {
        navigation.navigate('Home Admin')
      } else {
        navigation.navigate('Home')
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Credenciais Inválidas.');
    }
  };

  return (
    <Container>
      <Form>
        <InputForm
          name='email'
          label='E-mail'
          placeholder='email@exemplo.com'
          control={control}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          error={errors.email && errors.email.message}
        />

        <InputForm
          name='password'
          label='Senha'
          placeholder='Sua senha'
          control={control}
          autoCapitalize='none'
          autoCorrect={false}
          error={errors.password && errors.password.message}
        />

        <Button
          title='Login'
          onPress={handleSubmit(handleSignInWithXano)}
        />

        <ContainerTextSign>
          <TextSignin>Não tem uma conta? <LinkSignin onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</LinkSignin></TextSignin>
        </ContainerTextSign>
      </Form>
    </Container>
  );
}