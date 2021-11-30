import React from "react";

import { View, Text } from "react-native";
import { Container, Greeting, Image, Title, Username } from "./styles";

type UserProps = {
    title: string;
}


export function UserProfile({title}: UserProps) {
  return (
    <Container>
        <Image/>
      <Greeting>
        <Title>Olá,</Title>
        <Username>{title}</Username>
      </Greeting>
    </Container>
  );
}
