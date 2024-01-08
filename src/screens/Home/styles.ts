import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.white};
  paddingLeft: 5%;
  paddingRight: 5%;
`;

export const EmptyArea = styled.View`
  width: 100%;
  align-items: center;
  margin: 30px 0;
`;

export const EmptyText = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.black};
  margin-top: 30px;
`;

export const InputSearchArea = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.grayLight};
  border-radius: 7px;
  padding: 0 4%;
  margin-bottom: 16px;
  margin-top: 16px;

`;

export const InputSearch = styled.TextInput`
  flex-grow: 1;
  font-size: 16px;
  color: ${props => props.theme.colors.black};
  height: 50px;
  width: 90%;
`;

export const ButtonSearch = styled.TouchableOpacity``;

export const SortingButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.green};
  padding-vertical: 5px;
  padding-horizontal: 10px;
  border-radius: 8px;
  margin-vertical: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const SortingButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  font-weight: bold;
`;

export const Icon = styled(AntDesign)`
  font-size: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
`;
