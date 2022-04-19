import React from 'react';
import {
  Container,
  ContainerAddress,
  ContainerDate,
  ContainerDuration,
  Date,
  DestinationAddress,
  Distance,
  Duration,
  OriginAddress,
  Value
} from './styles';

import { RectButtonProps } from 'react-native-gesture-handler';

export interface CustomerOrderListItemProps {
  created_at: string;
  description_origin: string;
  description_destination: string;
  distance_text: string;
  duration_text: string;
  payment_method: string;
  value: string;
}

interface Props extends RectButtonProps {
  data: CustomerOrderListItemProps;
}

export function CustomerOrderListItem({ data, ...rest }: Props) {
  return (
    <Container
      {...rest}
    >
      <ContainerDate>
        <Date>{data.created_at}</Date>
        <Value>{data.value}</Value>
      </ContainerDate>

      <ContainerDuration>
        <Distance>{data.distance_text}</Distance>
        <Duration>{data.duration_text}</Duration>
      </ContainerDuration>

      <ContainerAddress>
        <OriginAddress>{data.description_origin}</OriginAddress>
        <DestinationAddress>{data.description_destination}</DestinationAddress>
      </ContainerAddress>


    </Container>
  );
}