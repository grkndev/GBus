import { View, Text, SafeAreaView } from "react-native"
import { StatusBar } from "expo-status-bar"

export default function ExploreScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar style="light" />
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-2xl">Explore Screen</Text>
      </View>
    </SafeAreaView>
  )
}

