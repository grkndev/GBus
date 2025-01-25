import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@/components/Icons";
import Card from "@/components/Cards/card";
import Indicator from "@/components/Cards/Indicator";
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#0A0A0A] px-8 py-4 gap-8">
      {/* Header */}
      <View className="pt-4">
        <Text className="text-white text-3xl font-bold">Hoşgeldiniz,</Text>
        <Text className="text-white text-3xl font-bold">GrknDev</Text>
      </View>

      {/* Card */}
      <Indicator />

      {/* Action Buttons */}
      <View className="flex flex-col gap-4">
        <View className="flex flex-row w-full gap-4">
          <TouchableOpacity className="w-[48%] bg-[#181818] rounded-2xl p-4 border-2 border-[#232323] ">
            <View className="size-10 rounded-lg flex items-center justify-center bg-zinc-800">
              <Icon name="CreditCard" size={24} color="white" />
            </View>
            <Text className="text-white text-xl font-bold">Kartlarım</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-[48%] bg-[#181818] rounded-2xl p-4 border-2 border-[#232323] ">
            <View className="size-10 rounded-lg flex items-center justify-center bg-zinc-800">
              <Icon name="Coins" size={24} color="white" />
            </View>
            <Text className="text-white text-xl font-bold">Bakiye yükle</Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-row w-full gap-4">
          <TouchableOpacity className="w-[48%] bg-[#181818] rounded-2xl p-4 border-2 border-[#232323] ">
            <View className="size-10 rounded-lg flex items-center justify-center bg-zinc-800">
              <Icon name="MapPin" size={24} color="white" />
            </View>
            <Text className="text-white text-xl font-bold">Nasıl giderim?</Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-[48%] bg-[#181818] rounded-2xl p-4 border-2 border-[#232323] ">
            <View className="size-10 rounded-lg flex items-center justify-center bg-zinc-800">
              <Icon name="BusFront" size={24} color="white" />
            </View>
            <Text className="text-white text-xl font-bold">Hatlar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
