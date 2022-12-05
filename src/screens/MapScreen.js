import { View, Text } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import tw from 'tailwind-react-native-classnames'
import BottomTab from '../components/BottomTab'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Feather';
import {GOOGLE_MAPS_APIKEY} from "@env";

const MapScreen = () => {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-4/5`}>
      <Map>
      </Map>
      </View>
      <GooglePlacesAutocomplete
         placeholder='Where from'
         styles={{
           container:{
             flex:0,
             backgroundColor:'#ededed',
             marginHorizontal:5,
             marginTop:5
             },
           textInput:{
             fontSize:18,
             
           }
         }}

         query={{
          key:GOOGLE_MAPS_APIKEY,
          language:'en'
         }}
  
         nearbyPlacesAPI="GooglePlacesSearch"
         debounce={400}
         />
         
        
        
      <View style={tw`bg-gray-100`} >
        <BottomTab></BottomTab>
      </View>
    </View>
  )
}

export default MapScreen


