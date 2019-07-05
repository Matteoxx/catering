import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {

    state = {
        focusedLocation: {
            latitude: 50.01381,
            longitude: 20.98698,
            latitudeDelta: 0.0122,
            longitudeDelta: 
                Dimensions.get('window').width /
                Dimensions.get("window").height * 
                0.0122
        },
        userLocationFound: false,
        userCurrentLocationCoords: {},
        address: [
            {
                id: 1,
                latitude: 50.019719746480796,
                longitude: 20.972548350691795
            },
            {
                id: 2,
                latitude: 50.02539882093973,
                longitude: 20.977759882807728
            },
            {
                id: 3,
                latitude: 50.02308324237715,
                longitude: 20.98353903740644
            }
        ]
    }

    componentDidMount(){
        this.getLocationHandler();    
    }

    pickLocationHandler = event => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
        })

        this.setState(prevState => {
            return {
                focusedLocation: {
                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                }
            }
        })
    }

    getLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(
            pos => {
                const coordsEvent = {
                    nativeEvent: {
                        coordinate: {
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude
                        }
                    }
                };
                this.pickLocationHandler(coordsEvent);
                this.setState({
                   
                        userLocationFound: true,
                        userCurrentLocationCoords: {
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude
                        }
                    
                })
            },
            err => {
                console.log(err);
                alert("Pobranie lokalizacji się nie powiodło. Wybierz lokalizację ręcznie!")
            }
        );
    }

    render() {
        let userMarker = null;
        if(this.state.userLocationFound) {
            userMarker = <MapView.Marker coordinate={this.state.userCurrentLocationCoords}/>
        }

        let addressMarkers = [];
        this.state.address.forEach(address =>  {
                addressMarkers.push(
                    <MapView.Marker 
                        key={address.id}
                        coordinate={{
                            latitude: address.latitude,
                            longitude: address.longitude 
                        }}
                    />
                )
        })


        return (
            <View style={styles.container}>
                <MapView
                    provider="google"
                    initialRegion={this.state.focusedLocation}
                    style={styles.map}
                    onPress={this.pickLocationHandler}
                    ref={ref => this.map = ref}
                    onUserLocationChange={event => alert("Lokalizacja sie zmienila")}
                    followsUserLocation={this.state.followsUserLocation}
                >
                    {userMarker}
                    {addressMarkers}
                </MapView>
            </View>
      
      )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    map: {
      width: '100%',
      height: Dimensions.get('window').height * 0.8
    }
  })