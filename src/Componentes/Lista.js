import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Card from './Card';

export default function Lista({navigation, route}) {
  const renderItem = ({item}) => <Card dados={item} />;
  navigation.setOptions({title: route.params.data.id});

  return (
    <View style={styles(route.params.data.id).container}>
      <View>
        <Text style={styles(route.params.data.id).titulo}>
          {route.params.data.titulo}
        </Text>
        <Text style={styles(route.params.data.id).texto}>
          {route.params.data.texto}
        </Text>
      </View>
      <FlatList
        data={route.params.data.dados}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = (id = '') =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: '25%',
      backgroundColor:
        id === 'Passeios'
          ? '#ffffaa'
          : id === 'Hospedagens'
          ? '#88c4ff'
          : '#ffcd9b',
    },
    titulo: {
      color: 'black',
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 'bold',
    },
    texto: {
      color: 'black',
      textAlign: 'center',
      fontSize: 12,
      marginVertical: 15,
      marginHorizontal: 10,
    },
  });
