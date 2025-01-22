import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CreditCard, Coins, MapPin, Bus } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      {/* Header */}
      <View className="px-6 pt-4">
        <Text className="text-white text-3xl font-bold">Hoşgeldiniz,</Text>
        <Text className="text-white text-3xl font-bold">Gürkan Çiloğlu</Text>
      </View>

      {/* Card */}
      <View className="mx-6 mt-8 bg-zinc-800/80 rounded-3xl p-6">
        <View className="flex-row items-center mb-6">
          <Text className="text-white text-2xl font-bold">N</Text>
          <Text className="text-white text-xl ml-1">KOLAY</Text>
        </View>

        <Text className="text-zinc-400 text-sm mb-1">IBAN</Text>
        <Text className="text-white text-base mb-4">
          TR34 1234 5678 9012 3456 78
        </Text>

        <Text className="text-[60px] text-white font-bold mb-2">₺150.00</Text>

        <View className="flex-row items-center justify-between">
          <Text className="text-zinc-400">Hesap: **** 8798</Text>
          <View className="flex-row">
            <View className="w-8 h-8 bg-zinc-300 rounded-full opacity-70" />
            <View className="w-8 h-8 bg-zinc-400 rounded-full -ml-4 opacity-70" />
          </View>
        </View>
      </View>

      {/* Card Indicators */}
      <View className="flex-row justify-center space-x-2 mt-4">
        <View className="w-2 h-2 rounded-full bg-white" />
        <View className="w-2 h-2 rounded-full bg-zinc-600" />
        <View className="w-2 h-2 rounded-full bg-zinc-600" />
      </View>

      {/* Action Buttons */}
      <View className="px-6 mt-8 flex-row flex-wrap justify-between">
        <TouchableOpacity className="w-[48%] bg-zinc-800/80 rounded-2xl p-4 mb-4">
          <CreditCard className="text-white mb-4" size={24} />
          <Text className="text-white text-xl">Kartlarım</Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[48%] bg-zinc-800/80 rounded-2xl p-4 mb-4">
          <Coins className="text-white mb-4" size={24} />
          <Text className="text-white text-xl">Bakiye yükle</Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[48%] bg-zinc-800/80 rounded-2xl p-4">
          <MapPin className="text-white mb-4" size={24} />
          <Text className="text-white text-xl">Nasıl giderim?</Text>
        </TouchableOpacity>

        <TouchableOpacity className="w-[48%] bg-zinc-800/80 rounded-2xl p-4">
          <Bus className="text-white mb-4" size={24} />
          <Text className="text-white text-xl">Hatlar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
