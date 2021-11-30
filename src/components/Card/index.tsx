import React from "react";
import { Body, Container, Header, Icon, LastTransaction, Title, Value } from "./styles";
import { View, Text } from "react-native";

export function Card() {
  return (
    <Container>
      <Header>
        <Title>Entradas</Title>
        <Icon name="arrow-up-circle" size={40} />
      </Header>
      <Body>
          <Value>R$ 17.400,00</Value>
          <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Body>
      
    </Container>
  );
}
