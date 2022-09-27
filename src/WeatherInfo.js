import { View, Text, SafeAreaView, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import WeatherSearch from './search';

const WeatherInfo = ({ weatherData, fetchWeatherData }) => {
    const {
        name,
        visibility,
        weather: [{ icon, description }],
        main: { temp, humidity, feels_like, },
        wind: { speed },
        sys: { sunrise, sunset },
    } = weatherData;

    return (
        <SafeAreaView style={styles.container}>
            <WeatherSearch fetchWeatherData={fetchWeatherData} />
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.logo}>
                <Image
                    style={styles.largeIcon}
                    source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
                />
                <Text style={styles.currentTemp}>
                    {temp} °C
                </Text>
            </View>
            <Text style={styles.desc}>
                {description}
            </Text>
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/temperature.png')}
                    />
                    <Text style={styles.infoText}>{feels_like} °C</Text>
                    <Text style={styles.infoText}>Feels Like</Text>
                </View>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/humidity.png')}
                    />
                    <Text style={styles.infoText}>{humidity} %</Text>
                    <Text style={styles.infoText}>Humidity</Text>
                </View>
            </View>

            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/visibility.png')}
                    />
                    <Text style={styles.infoText}>{visibility}</Text>
                    <Text style={styles.infoText}>Visibility</Text>
                </View>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/windspeed.png')}
                    />
                    <Text style={styles.infoText}>{speed} m/s</Text>
                    <Text style={styles.infoText}>Wind Speed</Text>
                </View>
            </View>

            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/sunrise.png')}
                    />
                    <Text style={styles.infoText}>{new Date(sunrise * 1000).toLocaleString()}</Text>
                    <Text style={styles.infoText}>Sunrise</Text>
                </View>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/sunset.png')}
                    />
                    <Text style={styles.infoText}>{new Date(sunset * 1000).toLocaleString()} </Text>
                    <Text style={styles.infoText}>Sunset</Text>
                </View>
            </View>


        </SafeAreaView>

    )
}

export default WeatherInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#e96e50',
        marginTop: 8,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    largeIcon: {
        width: 130,
        height: 120,
    },
    currentTemp: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    desc: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    extraInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 7,
    },
    info: {
        width: Dimensions.get('screen').width / 2.5,
        backgroundColor: '#D0EAFA',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center'
    },
    smallIcon: {
        height: 35,
        width: 35,
        borderRadius: 40 / 2,
        marginLeft: 50,
    },
    infoText: {
        textAlign: 'center',
        fontSize: 13,
    },
})