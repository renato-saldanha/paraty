import React from 'react';
import {StyleSheet, Text, View, Image, Button, Dimensions} from 'react-native';

import Paraty from '../img/01.png';
import {DadosHospedagens} from '../Dados/Hospedagens.js';
import {DadosPasseios} from '../Dados/Passeios.js';
import {DadosRestaurantes} from '../Dados/Restaurantes.js';

const TelaInicial = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMenu}>
        <Text style={styles.titulo}>Paraty</Text>
        <Text style={styles.texto}>Saiba o que visitar em paraty.</Text>
        <Image source={Paraty} style={styles.img} />
        <View style={styles.containerBotoes}>
          <Button
            title="Ver Restaurantes"
            style={styles.botao}
            color="#96650b"
            onPress={() =>
              props.navigation.navigate('Lista', {
                data: DadosRestaurantes,
              })
            }
          />
          <Button
            title="Ver Passeios"
            style={styles.botao}
            color="#96650b"
            onPress={() =>
              props.navigation.navigate('Lista', {
                data: DadosPasseios,
              })
            }
          />
          <Button
            title="Ver Hospedagem"
            style={styles.botao}
            color="#96650b"
            onPress={() =>
              props.navigation.navigate('Lista', {
                data: DadosHospedagens,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default TelaInicial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerMenu: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#595959',
    marginVertical: '30%',
    alignItems: 'center',
    padding: 10,
    width: Dimensions.get('window').width - Dimensions.get('window').width / 5,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
    marginBottom: 10,
  },
  texto: {
    textAlign: 'center',
    marginBottom: 7,
    fontSize: 12,
    color: 'black',
  },
  img: {
    width: '100%',
    height: '45%',
    marginVertical: 15,
  },
  containerBotoes: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  botao: {
    backgroundColor: '#96784b',
  },
});
