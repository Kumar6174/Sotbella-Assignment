import {
  Container,
  PhotoArea,
  Photo,
  RatingArea,
  NumberRating,
  Icon,
  Name,
  Description,
  NameArea,
  Price,
} from './styles';

export type ProductProps = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
};

export default function ProductCard({
  id,
  category,
  description,
  image,
  price,
  rating,
  title,
}: ProductProps) {


  return (
    <Container onPress={()=>{}}>
      <PhotoArea>
        <Photo source={{ uri: image }} />
        <RatingArea>
          <Icon name="star" />
          <NumberRating>{rating.rate}</NumberRating>
        </RatingArea>
      </PhotoArea>
      <NameArea>
        <Name>
          {
            title.length > 15 ? `${title.substr(0, 15)}...` : title
          }
        </Name>
        <Price>$ {Number(price).toFixed(2)}</Price>
      </NameArea>
      <Description numberOfLines={2}>
        {description}
      </Description>

    </Container>
  );
}
