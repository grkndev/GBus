import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@/components/Icons";
import { useLocalSearchParams } from "expo-router";
import Locations from "@/assets/mapLocations/locations.json";
export default function Route() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const location = Locations.find((loc) => loc.id === Number(id));
  if (!location) return null;
  return (
    <SafeAreaView className="flex-1 bg-[#0A0A0A]  py-4 gap-8">
      <Stack.Screen options={{ headerShown: false }} />

      <View className="px-1  w-full flex flex-row items-center border-b border-[#232323]">
        <TouchableOpacity onPress={() => router.back()} className="p-4">
          <Icon name="ChevronLeft" size={24} color="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-white font-bold text-xl">{location?.name}</Text>
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
}

function BusCard({ title, remaining }: { title: string; remaining: string }) {
  return (
    <View className="flex flex-row items-center justify-between py-2">
      <View className="flex flex-col ">
        <Text className={`text-white font-bold text-lg`}>{title}</Text>
      </View>
      <View>
        <Text className={`text-white font-bold text-lg`}>{remaining}</Text>
      </View>
    </View>
  );
}
