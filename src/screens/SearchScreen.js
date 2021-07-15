import React, { useState } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import ResList from '../components/RestaurantsList';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, errorMessage, searchApi] = useRestaurants();

  const filterResultsbyPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <>
      <SearchBar
        term={query}
        onChangeTerm={(newQuery) => setQuery(newQuery)}
        onEndTerm={() => searchApi(query)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResList title="Cost Effective" results={filterResultsbyPrice('$')} />
        <ResList title="Bit Pricier" results={filterResultsbyPrice('$$')} />
        <ResList title="Big Spender" results={filterResultsbyPrice('$$$')} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
