import React from "react";
import { UserProfile } from "../../components/UserProfile";
import { AntDesign } from "@expo/vector-icons";

import { CardList, Container, Content, Header } from "./styles";
import theme from "../../global/styles/theme";
import { Card } from "../../components/Card";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <Content>
          <UserProfile title="Rafael" />
          <AntDesign size={24} name="poweroff" color={theme.colors.orange} />
        </Content>
      </Header>

      <CardList
        
      >
        <Card />
        <Card />
        <Card />
      </CardList>
    </Container>
  );
}
