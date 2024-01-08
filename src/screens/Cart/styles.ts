import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.white};
  padding: 5%;
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

export const TitleArea = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;
