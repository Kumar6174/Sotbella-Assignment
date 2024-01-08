import React, { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, ListRenderItemInfo, FlatList, TouchableOpacity, Text, View } from 'react-native';
import Lottie from 'lottie-react-native';

import {
  Container,
  EmptyArea,
  EmptyText,
  InputSearchArea,
  InputSearch,
  ButtonSearch,
  Icon,
  Title,
  SortingButton,
  SortingButtonText,
} from './styles';

import api from '../../services/api';
import ProductCard, { ProductProps } from '../../components/ProductCard';
import theme from '../../global/theme';

export default function Home() {
  const [search, setSearch] = useState('');
  const [showSortButtons, setShowSortButtons] = useState(true);

  const [products, setProducts] = useState<ProductProps[] | []>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [sortingOption, setSortingOption] = useState<'default' | 'priceAsc' | 'priceDesc'>('default');

  useEffect(() => {
    getAllProducts();
  }, [sortingOption]);

  const sortedProducts = useMemo(() => {
    if (sortingOption === 'priceAsc') {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortingOption === 'priceDesc') {
      return [...products].sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  }, [products, sortingOption]);

  const filteredProducts = useMemo(() => {
    return sortedProducts?.filter(
      (product) =>
        search
          ? product.title.toLowerCase().includes(search.toLowerCase())
          : true
    );
  }, [search, sortedProducts]);

  const getAllProducts = async () => {
    try {
      const result = await api.get('/products');

      if (result.data) {
        setProducts(result.data);
      }
    } catch (error) {
      // console.log('ERROR: ', error);
    } finally {
      setLoadingProducts(false);
    }
  };

  const renderItem = ({ item }: ListRenderItemInfo<ProductProps>) => (
    <ProductCard {...item} />
  );

  return (
    <Container>
      <InputSearchArea>
        <InputSearch
          placeholder="Search for a product..."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        {search ? (
          <ButtonSearch onPress={() => setSearch('')}>
            <Icon name="close" />
          </ButtonSearch>
        ) : (
          <ButtonSearch>
            <Icon name="search1" />
          </ButtonSearch>
        )}
      </InputSearchArea>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
        {
          showSortButtons &&
          <>
            <Title style={{fontSize:16}}>Sort:</Title>
            <SortingButton onPress={() => setSortingOption('default')}>
              <SortingButtonText>Default</SortingButtonText>
            </SortingButton>
            <SortingButton onPress={() => setSortingOption('priceAsc')}>
              <SortingButtonText>Ascending</SortingButtonText>
            </SortingButton>
            <SortingButton onPress={() => setSortingOption('priceDesc')}>
              <SortingButtonText>Descending</SortingButtonText>
            </SortingButton>
          </>
        }
      </View>


      {(filteredProducts?.length <= 0 && !loadingProducts) && (
        <EmptyArea>
          <Lottie
            source={require('../../assets/animations/search-empty.json')}
            autoPlay
            loop
            style={{ width: 250 }}
          />
          <EmptyText>No result found...</EmptyText>
        </EmptyArea>
      )}

      {loadingProducts && (
        <ActivityIndicator color={theme.colors.green} size="large" />
      )}

      {(filteredProducts?.length > 0 && !loadingProducts) && (
        <FlatList
          ListHeaderComponent={<Title>Hot Sales</Title>}
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        // onMomentumScrollBegin={()=>setShowSortButtons(false)}
        // onMomentumScrollEnd={()=>setShowSortButtons(true)}
        />
      )}
    </Container>
  );
}

