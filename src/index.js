import { View, Text, StyleSheet, DatePickerIOSBase, Alert, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import WeatherInfo from './WeatherInfo';

const API_KEY = '8ee773c77e85f1e4f8007e2f754d65a5';

const Weather = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const fetchWeatherData = async (cityName) => {
        try {
            setLoaded(false);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)

            if (response.status == 200) {
                const data = await response.json();
                setWeatherData(data);
            }
            else {
                setWeatherData(null);
            }
            setLoaded(true);
        }
        catch (error) {
            Alert.alert('Error', error.message)
        }
    }

    useEffect(() => {
        fetchWeatherData('sagar');
    }, []);

    if (!loaded) {
        return (
            <View>
                <ActivityIndicator size="large" color="red" />
            </View>
        )
    }
    else if (weatherData === null) {
        fetchWeatherData('sagar');
        Alert.alert("Input City Not Found")
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Weather App.</Text>
            </View>
            <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
        </View>
    )
}

export default Weather

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCF5DB',
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#C5D2EF',
        height: 80,
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 29,
        fontWeight: 'bold',
    }
});
