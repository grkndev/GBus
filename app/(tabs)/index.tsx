import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { CreditCard, Coins, MapPin, Bus } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NKolayIcon from "@/components/Icons/NKolay";
import Icon from "@/components/Icons";
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#0A0A0A] px-8 py-4 gap-8">
      {/* Header */}
      <View className="pt-4">
        <Text className="text-white text-3xl font-bold">Hoşgeldiniz,</Text>
        <Text className="text-white text-3xl font-bold">Gürkan Çiloğlu</Text>
      </View>

      {/* Card */}
      <View className="rounded-3xl w-full overflow-hidden">
        <ImageBackground
          source={require("@/assets/images/cardFrame.png")}
          className="w-full p-6 gap-4"
        >
          <Image
            source={require("@/assets/images/nkolay.png")}
            resizeMode="contain"
            className="h-10 w-32"
          />

          <View>
            <Text className="text-zinc-400 text-sm">IBAN</Text>
            <Text className="text-white text-base ">
              TR34 1234 5678 9012 3456 78
            </Text>
          </View>

          <View className="flex flex-row w-full justify-between items-center">
            <View className="flex flex-col gap-1">
              <Text className="text-3xl text-white font-bold">₺150.00</Text>
              <Text className="text-zinc-400">Hesap: **** 8798</Text>
            </View>
            <View className="flex flex-row items-center">
              <View className="w-8 h-8 bg-zinc-300 rounded-full opacity-50" />
              <View className="w-8 h-8 bg-zinc-300 rounded-full opacity-50 -ml-2" />
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Card Indicators */}
      <View className="flex flex-row gap-2 items-center justify-center">
        <View className="w-2 h-2 rounded-full bg-white" />
        <View className="w-2 h-2 rounded-full bg-zinc-600" />
        <View className="w-2 h-2 rounded-full bg-zinc-600" />
      </View>

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
