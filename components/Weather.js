import React,{useState} from "react";
import { StyleSheet,View, Text,ImageBackground } from "react-native";
import Forecast from "./Forcast";

export default function Weather(props) {
    useEffect(() => {
             console.log(`fetching data with zipCode = ${props.zipCode}`)
             if (props.zipCode) {
                 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=b2f6f04ce14c9290bd101689fa9541e3`)
                   .then((response) => response.json())
                   .then((json) => {
                       setForecastInfo({
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                        });
                   })
                   .catch((error) => {
                          console.warn(error);
                  });
            }
        }, [props.zipCode])
       
  const [forecastInfo, setForecastInfo] = useState({
    main: "Day1",
    description: "Day2",
    temp: 0,
  })

  return (
    
      <ImageBackground source={require("../bg.jpg")} style={styles.backdrop}>
        <Text>Zip Code</Text>
        <Text>{props.zipCode}</Text>
        <Forecast {...forecastInfo} />
      </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  backdrop: {
    alignItems: "center",
    width: "100%",
    height: "100%",
  }
})