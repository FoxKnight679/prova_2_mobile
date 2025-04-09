import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Draw = createDrawerNavigator();

export function Estoque({Navigation}) {

    const [count, setCount] = useState(1);


    return (
        <ScrollView>
        <View style={styles.page}>
          <Text style = {styles.title}>Estoque da loja</Text>
          <View style = {styles.products}> 
            <Image style = {styles.img} source={{uri: 'https://a-static.mlcdn.com.br/1500x1500/pelucia-five-nights-foxy-freddy-s-25-cm-fnaf/lumenimportados/3267p/78c48f4c25067eded00deeda2828950a.jpeg'}}/>
            <Text style = {styles.nameProduct}>Pelúcia do Foxy</Text>
            <Text> </Text>
            <Text style = {styles.description}>Pelúcia de pano 35x35cm</Text>
            <Text style = {styles.description}>animatrônico Foxy</Text>
            <Text style = {styles.description}>jogo Five Nights At Freddys</Text>
            <Text> </Text>
            <Text style = {styles.description}>Quantidade: {count} produtos</Text>
            <Text> </Text>
            <View style = {styles.buttons}>
                <Button
                    onPress={() => setCount(count + 1)}
                    title="+"
                />
                <Button
                    onPress={() => setCount(count - 1)}
                    title="-"
                />
            </View>
          </View>

          <View style = {styles.products}> 
            <Image style = {styles.img} source={{uri: 'https://a-static.mlcdn.com.br/1500x1500/pelucia-five-nights-foxy-freddy-s-25-cm-fnaf/lumenimportados/3267p/78c48f4c25067eded00deeda2828950a.jpeg'}}/>
            <Text style = {styles.nameProduct}>Pelúcia do Foxy</Text>
            <Text> </Text>
            <Text style = {styles.description}>Pelúcia de pano 35x35cm</Text>
            <Text style = {styles.description}>animatrônico Foxy</Text>
            <Text style = {styles.description}>jogo Five Nights At Freddys</Text>
            <Text> </Text>
            <Text style = {styles.description}>Quantidade: {count} produtos</Text>
            <Text> </Text>
            <View style = {styles.buttons}>
                <Button
                    onPress={() => setCount(count + 1)}
                    title="+"
                />
                <Button
                    onPress={() => setCount(count - 1)}
                    title="-"
                />
            </View>
          </View>

          <View style = {styles.products}> 
            <Image style = {styles.img} source={{uri: 'https://a-static.mlcdn.com.br/1500x1500/pelucia-five-nights-foxy-freddy-s-25-cm-fnaf/lumenimportados/3267p/78c48f4c25067eded00deeda2828950a.jpeg'}}/>
            <Text style = {styles.nameProduct}>Pelúcia do Foxy</Text>
            <Text> </Text>
            <Text style = {styles.description}>Pelúcia de pano 35x35cm</Text>
            <Text style = {styles.description}>animatrônico Foxy</Text>
            <Text style = {styles.description}>jogo Five Nights At Freddys</Text>
            <Text> </Text>
            <Text style = {styles.description}>Quantidade: {count} produtos</Text>
            <Text> </Text>
            <View style = {styles.buttons}>
                <Button
                    onPress={() => setCount(count + 1)}
                    title="+"
                />
                <Button
                    onPress={() => setCount(count - 1)}
                    title="-"
                />
            </View>
          </View>

          <View style = {styles.products}> 
            <Image style = {styles.img} source={{uri: 'https://a-static.mlcdn.com.br/1500x1500/pelucia-five-nights-foxy-freddy-s-25-cm-fnaf/lumenimportados/3267p/78c48f4c25067eded00deeda2828950a.jpeg'}}/>
            <Text style = {styles.nameProduct}>Pelúcia do Foxy</Text>
            <Text> </Text>
            <Text style = {styles.description}>Pelúcia de pano 35x35cm</Text>
            <Text style = {styles.description}>animatrônico Foxy</Text>
            <Text style = {styles.description}>jogo Five Nights At Freddys</Text>
            <Text> </Text>
            <Text style = {styles.description}>Quantidade: {count} produtos</Text>
            <Text> </Text>
            <View style = {styles.buttons}>
                <Button
                    onPress={() => setCount(count + 1)}
                    title="+"
                />
                <Button
                    onPress={() => setCount(count - 1)}
                    title="-"
                />
            </View>
          </View>

          <View style = {styles.products}> 
            <Image style = {styles.img} source={{uri: 'https://a-static.mlcdn.com.br/1500x1500/pelucia-five-nights-foxy-freddy-s-25-cm-fnaf/lumenimportados/3267p/78c48f4c25067eded00deeda2828950a.jpeg'}}/>
            <Text style = {styles.nameProduct}>Pelúcia do Foxy</Text>
            <Text> </Text>
            <Text style = {styles.description}>Pelúcia de pano 35x35cm</Text>
            <Text style = {styles.description}>animatrônico Foxy</Text>
            <Text style = {styles.description}>jogo Five Nights At Freddys</Text>
            <Text> </Text>
            <Text style = {styles.description}>Quantidade: {count} produtos</Text>
            <Text> </Text>
            <View style = {styles.buttons}>
                <Button
                    onPress={() => setCount(count + 1)}
                    title="+"
                />
                <Button
                    onPress={() => setCount(count - 1)}
                    title="-"
                />
            </View>
          </View>
        </View>
        </ScrollView> //Não funciona isso aqui??
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#b3c3e3',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    }, 
    title: {
        fontSize: 40,
    },
    products: {
        height: 400,
        width: 250,
        backgroundColor: "white",
        alignItems: 'center'
    },
    img: {
        height: 180,
        width: 180,
    },
    nameProduct: {
        fontSize: 30
    },
    description: {
        fontSize: 15
    },
    buttons: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: 190
    }

  });


