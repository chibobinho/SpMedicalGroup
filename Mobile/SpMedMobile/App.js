import axios from 'axios';
import React, { Component } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import api from './src/services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaConsultas: []
    };
  };

  buscarConsultas = async () => {
    const resposta = await api.get('/consultas');
    const dadosDaApi = resposta.data;
    this.setState({ listaConsultas: dadosDaApi });
  }

  componentDidMount() {
    this.buscarConsultas();
  }

  render() {
    return (
      <View style={styles.main}>

        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>
            <Image
              source={require('./src/assets/img/Imagem_logo.png')}
              style={styles.mainHeaderRowImg}
            />
            <Text style={styles.mainHeaderText}>{"Consultas".toUpperCase()}</Text>
          </View>
          <View style={styles.mainHeaderLine} />
        </View>

        <View style={styles.mainBody}>
          <FlatList
            contentContainerStyle={styles.mainBodyContent}
            data={this.state.listaConsultas}
            keyExtractor={ item => item.idConsulta }
            renderItem={ this.renderItem}
          />
        </View>

      </View>
    );
  }

  renderItem =({ item }) => (
    // <Text style={{fontSize: 20, color: 'red' }}>{item.idConsulta}</Text>
    <View style={styles.flatItemRow}>
      <View style={styles.flatItemContainer}>
        <Text>{item.idMedico}</Text>
        <Text>{item.idPaciente}</Text>
        <Text>{item.dataConsulta}</Text>
        <Text>-----------------------------------------</Text>
      </View>
      <View style={styles.flatItemImg}>

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'fff',
  },

  mainHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainHeaderRow:{
    flexDirection: 'row'
  },

  mainHeaderRowImg: {
    width: 22,
    height: 22
  }
});

export default App;
