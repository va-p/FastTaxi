import React from 'react';
import {
  Container,
  ScrollView,
  UpdateDate,
  Title,
  SubTitle,
  SubSubTitle,
  Text
} from './styles';

export function PrivacyPolicy() {
  return (
    <Container>
      <ScrollView>
        <UpdateDate>Última alteração: 19/04/2022</UpdateDate>
        <Title>Aviso de Privacidade da Fast Taxi</Title>
        <SubTitle>I. Introdução</SubTitle>
        <Text>
          Ao usar os apps da Fast Taxi, você nos confia seus dados pessoais. Temos o compromisso de manter essa confiança. Para começar, queremos ajudar você a entender as nossas práticas de privacidade.{'\n'}
          {'\n'}
          Este aviso descreve os dados pessoais que coletamos, como são usados e compartilhados e as suas opções com relação a eles.
        </Text>
        <SubTitle>II. Visão geral</SubTitle>
        <SubSubTitle>A. Escopo</SubSubTitle>
        <Text>
          Este aviso descreve de que maneira a Uber e suas afiliadas coletam e usam dados pessoais e é aplicável a todos os usuários dos nossos apps, sites, recursos ou outros serviços em qualquer lugar do mundo. Esse aviso se aplica especificamente a:
          
        </Text>
      </ScrollView>
    </Container>
  );
}