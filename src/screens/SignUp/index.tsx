import React from 'react';
import { Alert } from 'react-native';
import {
  Container,
  Form,
  ContainerTerms,
  TextTerms,
  LinkTerms,
  LinkPolicyPrivacy
} from './styles';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Button';

import api from '../../api/api';

interface FormData {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

/* Validation Form - Start */
const schema = Yup.object().shape({
  name: Yup.string().required('Informe o seu nome'),
  lastName: Yup.string().required('Informe o seu sobrenome'),
  email: Yup.string().required('Informe o seu e-mail'),
  phone: Yup.number().required('Informe o seu telefone').typeError('Digite apenas números'),
  password: Yup.string().required('Digite a sua senha').min(8, 'A senha deve ter no mínimo 8 caracteres'),
  confirmPassword: Yup.string().required('Confirme a sua senha').oneOf([Yup.ref('password'), null], 'As senhas não conferem'),
  term: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
});
/* Validation Form - End */

export function SignUp({ navigation }) {
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  async function handleRegisterUser(form: FormData) {
    const newUser = {
      name: form.name,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone,
      password: form.password,
      is_admin: false
    }

    try {
      const response = await api.post('auth/signup', newUser);
      console.log(response);

      Alert.alert('Bem vindo à Fast Taxi! Você será redirecionado para a tela de login.', '', [{ text: 'OK', onPress: () => navigation.navigate('Login') }]);

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível cadastrar! Verifique os campos e tente novamente.');
    }
  }
  return (
    <KeyboardAwareScrollView>
      <Container>
        <Form>
          <InputForm
            name='name'
            label='Nome'
            placeholder='Seu nome'
            control={control}
            autoCapitalize='words'
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />

          <InputForm
            name='lastName'
            label='Sobrenome'
            placeholder='Seu sobrenome'
            control={control}
            autoCapitalize='words'
            autoCorrect={false}
            error={errors.lastName && errors.lastName.message}
          />

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
            name='phone'
            label='Telefone'
            placeholder='(00)00000-0000'
            control={control}
            keyboardType='phone-pad'
            maxLength={13}
            error={errors.phone && errors.phone.message}
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

          <InputForm
            name='confirmPassword'
            label='Confirme a Senha'
            placeholder='Confirme a sua senha'
            control={control}
            autoCapitalize='none'
            autoCorrect={false}
            error={errors.confirmPassword && errors.confirmPassword.message}
          />

          <ContainerTerms>
            <TextTerms>
              Ao continuar, eu concordo com os <LinkTerms onPress={() => navigation.navigate('Termos de Uso')}>Termos de Uso</LinkTerms> e afirmo que li a <LinkPolicyPrivacy onPress={() => navigation.navigate('Política de Privacidade')}>Política de Privacidade</LinkPolicyPrivacy>.
            </TextTerms>
          </ContainerTerms>

          <Button
            title='Cadastrar'
            onPress={handleSubmit(handleRegisterUser)}
          />

        </Form>
      </Container>
    </KeyboardAwareScrollView>
  );
}