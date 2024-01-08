import Lottie from 'lottie-react-native';

import {
  Container,
  Title,
  EmptyArea,
  EmptyText,
  TitleArea,

} from './styles';


export default function Cart() {



  return (
    <Container>
      <TitleArea>
        <Title>My Cart</Title>
      </TitleArea>

      {
          <EmptyArea>
            <Lottie
              source={require('../../assets/animations/empty-cart.json')}
              autoPlay
              loop
              style={{ width: 250 }}
            />
            <EmptyText>Your cart is empty...</EmptyText>
          </EmptyArea>
          
      }

    </Container>
  );
}
