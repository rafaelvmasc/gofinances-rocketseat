import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
`;

export const Avatar = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: black;
  border-radius: 10px;
  margin-right: 18px;
`;

export const Greeting = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: 18px;
  `;

export const Username = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: 18px;
`;
