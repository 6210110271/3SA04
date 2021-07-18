import React,{useEffect,useState} from 'react'
import {ImageBackground, Text, StyleSheet, View} from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&appid=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp,
                    pressure: json.main.pressure
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

    const [forecastInfo,setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        pressure: 0
    })

    return (
        //แปลงข้อมูลเป็น props ให้ Forecast.js ทั้งหมด
        <ImageBackground source={require('../gif.gif')} style={styles.backdrop}> 
            <View style={styles.BBlack}>
                <Text style={styles.BText}>Zip Code</Text> 
                <Text style={styles.BText}>{props.zipCode}</Text>
                <Forecast {...forecastInfo}/> 
            </View>
        </ImageBackground>
    );
   }

   const styles = StyleSheet.create({    //กำหนด backdrop style 
        backdrop: {
            flexDirection: 'column',
            width: '100%', //ใช้ภาพช่วง 150% 
            height:'100%'  //ใช้ขนาดรูปในแนวตั้ง
        },
        BText: {
            fontSize: 50    //กำหนดขนาด
        },
        BBlack:{
            justifyContent: 'center', //กำหนดcenterเป็นแนวแกนตั้ง
            alignItems: 'center',     //กำหนดcenterเป็นแนวแกนนอน
            backgroundColor: 'rgba(0,0,0,0.3)',
            height:'50%',
            width:'100%'
        }
   })