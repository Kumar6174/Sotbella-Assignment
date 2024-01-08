import Lottie from 'lottie-react-native';

import {
  Container,
  EmptyArea,
  EmptyText,
  Title,
} from './styles';


export default function Favorites() {

  return (
    <Container>

      <Title>My Favorites</Title>

          <EmptyArea>
            <Lottie
              source={require('../../assets/animations/empty-fav.json')}
              autoPlay
              loop
              style={{ width: 250 }}
            />
            <EmptyText>You have no favorites...</EmptyText>
          </EmptyArea>

    </Container>
  );
}
