import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Forecast(props) {
    return (
    <View>
        <Text>{props.main}</Text>
        <Text>{props.description}</Text>
        <View styles={styles.Row}> 
            <Text>{props.temp}</Text>
            <Text>°C</Text>
        </View>
    </View>

    )
}
const styles = StyleSheet.create({    
    Row:{
        alignItems: 'center',
        flexDirection: 'row',
    }
})   