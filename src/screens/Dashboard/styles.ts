import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const Header = styled.View`
  padding: 0 24px;
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.purple};
  `;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
