import React from "react";

import { View, Text } from "react-native";
import { Avatar, Container, Greeting, Title, Username } from "./styles";

type UserProps = {
    title: string;
}


export function UserProfile({title}: UserProps) {
  return (
    <Container>
        <Avatar/>
      <Greeting>
        <Title>Olá,</Title>
        <Username>{title}</Username>
      </Greeting>
    </Container>
  );
}
