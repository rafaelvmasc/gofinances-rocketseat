import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
`;

export const Image = styled.View`
  width: 48px;
  height: 48px;
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
