import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";
import CustomMarker from "@/components/MapView/CustomMapmarker";
import locaitons from "@/assets/mapLocations/locations.json";
import { useRouter } from "expo-router";
export default function MapScreen() {
  const router = useRouter();
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setHasLocationPermission(false);
        return;
      }
      setHasLocationPermission(true);
      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }

    getCurrentLocation();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 justify-center items-center">
        {hasLocationPermission ? (
          <MapView
            showsPointsOfInterest={false}
            showsCompass={false}
            showsIndoors={false}
            toolbarEnabled={false}
            style={StyleSheet.absoluteFillObject}
            region={mapRegion}
            showsUserLocation={true}
            minZoomLevel={12}
          >
            {locaitons.map((location) => (
              <CustomMarker
                key={location.id}
                location={location}
                onPress={() =>
                  router.push(("/bus-station/" + location.id) as any)
                }
              />
            ))}
          </MapView>
        ) : (
          <Text>Location permission not granted</Text>
        )}
      </View>
    </SafeAreaView>
  );
}
