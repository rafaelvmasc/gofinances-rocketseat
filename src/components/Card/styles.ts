import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: ${RFValue(300)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 19px 24px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 18px;
`;
export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.green};
`;

export const Body = styled.View``;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.title};
`;
export const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;
