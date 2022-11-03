import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

export default function Card(params) {
  const primeiroParam = Object.keys(params.dados)[0];

  const Restaurante = () => (
    <View>
      <Image style={styles.imagemRestaurante} source={params.dados.imagem} />
      <Text style={styles.nomeRestaurante}>{params.dados.nome}</Text>
      <Text style={styles.localizacaoRestaurante}>
        Localização: {params.dados.localizacao}
      </Text>
    </View>
  );

  const Passeio = () => {
    return (
      <View>
        <Text style={styles.textoPasseio}>{params.dados.nome}</Text>
        <Image style={styles.imagemPasseio} source={params.dados.imagem} />
      </View>
    );
  };

  const Hospedagem = () => {
    const valor = params.dados.valor;
    const valorFormatado = valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return (
      <View>
        <Image style={styles.imagemHospedagem} source={params.dados.imagem} />
        <Text style={styles.nomeHospedagem}>{params.dados.nome}</Text>
        <Text style={styles.textoHospedagem}>
          Valor médio: {valorFormatado}
        </Text>
        <Text style={styles.textoHospedagem}>
          Localização: {params.dados.localizacao}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {params.dados.id === 'Restaurantes' ? (
        <Restaurante />
      ) : params.dados.id === 'Passeios' ? (
        <Passeio />
      ) : (
        <Hospedagem />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    width: Dimensions.get('window').width - Dimensions.get('window').width / 5,
    marginVertical: 5,
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  textoPasseio: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  imagemPasseio: {
    width: Dimensions.get('window').width - Dimensions.get('window').width / 4,
    marginHorizontal: 10,
    marginBottom: 10,
    height: 75,
    marginRight: 10,
  },
  imagemRestaurante: {
    width: Dimensions.get('window').width - Dimensions.get('window').width / 4,
    marginHorizontal: 10,
    marginTop: 10,
    height: 75,
    marginRight: 10,
  },
  nomeRestaurante: {
    fontSize: 12,
    marginHorizontal: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  localizacaoRestaurante: {
    fontSize: 10,
    marginHorizontal: 10,
    marginBottom: 7,
    color: 'black',
  },
  imagemHospedagem: {
    width: Dimensions.get('window').width - Dimensions.get('window').width / 4,
    marginHorizontal: 10,
    marginTop: 10,
    height: 40,
    marginRight: 10,
  },
  nomeHospedagem: {
    fontSize: 14,
    marginHorizontal: 10,
    marginVertical: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  textoHospedagem: {
    fontSize: 10,
    marginHorizontal: 10,
    color: 'black',
  },
});
