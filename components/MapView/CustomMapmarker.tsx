import { View, Text } from "react-native";
import React from "react";
import { Callout, Marker } from "react-native-maps";
import Icon from "../Icons";
import { useRouter } from "expo-router";

const CustomMarker = React.memo(({ location }: { location: any }) => {
  const router = useRouter();
  return (
    <Marker
      coordinate={{
        latitude: location.latitude,
        longitude: location.longitude,
      }}
      title={location.name}
      onCalloutPress={() => {
        router.push(("/bus-station/" + location.id) as any);
      }}
      // icon={require("../../assets/images/bus-front.png")}
    >
      {/* <Callout>
          <View className="p-5">
            <Text className="text-xl">{location.name}</Text>
          </View>
        </Callout> */}
      <View className="bg-red-500 w-9 h-9 rounded-full items-center justify-center">
        <Icon name="BusFront" size={16} color="white" />
      </View>
    </Marker>
  );
});

export default CustomMarker;
