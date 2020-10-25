import React, { useState } from "react";
import { connect } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import { View, StyleSheet, Dimensions, Text } from "react-native";

const Map = () => {
  const [marketLocation, setMarketLocation] = useState();

  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0992,
    longitudeDelta: 0.0421,
  };

  const marketLocator = (e) => {
    setMarketLocation({
      lat: e.nativeEvent.coordinate.latitude,
      lng: e.nativeEvent.coordinate.longitude,
    });
  };

  let markerCoordinate;

  if (marketLocation) {
    markerCoordinate = {
      latitude: marketLocation.lat,
      longitude: marketLocation.lng,
    };
  }

  return (
    <MapView style={{ flex: 1 }} region={mapRegion} onPress={marketLocator}>
      {markerCoordinate && (
        <Marker title="فروشگاه من" coordinate={markerCoordinate}></Marker>
      )}
    </MapView>
  );
};

export default Map;
