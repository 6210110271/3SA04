import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Forecast(props) {
    return (
    <View style={styles.Space}>
        <Text>{props.main}</Text>
        <Text>{props.description}</Text>
        <View styles={styles.Row}> 
            <Text>อุณหภูมิ {props.temp} °C</Text>
            <Text>แรงดันอากาศ {props.pressure} Pa</Text>
            <Text>ความเร็วลม {props.windspeed} m/s</Text>
            <Text>พิกัดแสงอาทิตย์ {props.syssunset} </Text>
        </View>
    </View>

    )
}
const styles = StyleSheet.create({    
    Row:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    Space:{
        flexDirection: 'column',
        justifyContent:'space-evenly',
        height:'40%'
    }
})   

