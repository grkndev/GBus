import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";

export type CardType = {
  balance: number;
  type: "Debit" | "BusCard";
  iban?: string;
  account: string;
};
export default function Card({
  balance,
  type,

  iban,
  account,
}: CardType) {
  return (
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
          <Text className="text-zinc-400 text-sm">{iban ? "IBAN" : ""}</Text>
          <Text className="text-white text-base ">{iban}</Text>
        </View>

        <View className="flex flex-row w-full justify-between items-center">
          <View className="flex flex-col gap-1">
            <Text className="text-3xl text-white font-bold">
              ₺{balance.toFixed(2)}
            </Text>
            <Text className="text-zinc-400">Hesap: **** 8798</Text>
          </View>
          <View className="flex flex-row items-center">
            <View className="w-8 h-8 bg-zinc-300 rounded-full opacity-50" />
            <View className="w-8 h-8 bg-zinc-300 rounded-full opacity-50 -ml-2" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
