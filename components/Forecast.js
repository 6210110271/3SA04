import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Forecast(props) {
    return (
    <View style={styles.Space}>
        <Text>{props.main}</Text>
        <Text>{props.description}</Text>
        <View styles={styles.Row}> 
            <Text>{props.temp} °C</Text>
            <Text>{props.pressure} Pa</Text>
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

