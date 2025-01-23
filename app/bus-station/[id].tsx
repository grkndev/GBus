import { View, Text, TouchableOpacity, FlatList } from "react-native";
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
    <SafeAreaView className="flex-1 bg-[#0A0A0A]  py-4 gap-4">
      <Stack.Screen options={{ headerShown: false }} />

      <View className="px-1  w-full flex flex-row items-center border-b border-[#232323]">
        <TouchableOpacity onPress={() => router.back()} className="p-4">
          <Icon name="ChevronLeft" size={24} color="white" />
        </TouchableOpacity>
        <View>
          <Text className="text-white font-bold text-xl">{location?.name}</Text>
        </View>
      </View>
      <View className="px-4 flex-1">
        <FlatList
          className="flex-1"
          data={Array(5).fill(0)}
          keyExtractor={(_, i) => i.toString()}
          contentContainerClassName="gap-2"
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="h-[1] bg-zinc-800" />}
          renderItem={({ item, index }) => (
            <BusCard
              title={"H/30 Tekerek - Boğaziçi - Otogar"}
              remaining="2 dk 3s"
              currentStation="Ukkaşe Camii"
              nextStation="Bahaettin Karakoç İlkokulu"
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

function BusCard({
  title,
  remaining,
  currentStation,
  nextStation,
}: {
  title: string;
  remaining: string;
  currentStation: string;
  nextStation: string;
}) {
  return (
    <View className="flex flex-row items-start justify-between py-2 mb-2">
      <View className="flex flex-col gap-2">
        <Text className={`text-white font-bold text-lg`}>{title}</Text>
        <View className="opacity-50">
          <View className="flex flex-row items-center gap-2">
            <Icon name="MapPin" size={12} color="white" />
            <Text className={`text-white text-sm`}>{currentStation}</Text>
          </View>
          <View className="flex flex-row items-center gap-2">
            <Icon name="ChevronRight" size={12} color="white" />
            <Text className={`text-white text-sm`}>{nextStation}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text className={`text-white font-bold text-lg`}>{remaining}</Text>
      </View>
    </View>
  );
}
