import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.purple};
  `;

export const Content = styled.View`
margin-top: ${getStatusBarHeight()};
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardList = styled.ScrollView.attrs({
    horizontal: true,
        showsHorizontalScrollIndicator: false,
        contentContainerStyle:{ paddingHorizontal: 24 },
})`


`
