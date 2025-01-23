import { View, Text, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    title: "H/30 Nolu Hat - Biniş",
    date: "22.01.2025 - 19:5",
    amount: 7.5,
    isIncome: false,
  },
  {
    title: "Bakiye yükleme",
    date: "22.01.2025 - 19:51",
    amount: 150,
    isIncome: true,
  },
];
export default function HistoryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex flex-1 flex-col p-4 gap-4  items-center w-full">
        <Text className="text-white font-bold text-3xl p-2">Geçmiş</Text>
        <FlatList
          data={data}
          renderItem={({ item, index }) => <HCard index={index} {...item} />}
          keyExtractor={(item, index) => index.toString()}
          className="w-full flex-1 "
          ItemSeparatorComponent={() => <View className="h-[1] bg-gray-800" />}
        />
      </View>
    </SafeAreaView>
  );
}

function HCard({
  title,
  date,
  amount,
  isIncome,
  index,
}: {
  title: string;
  date: string;
  amount: number;
  isIncome: boolean;
  index: number;
}) {
  const color = isIncome ? "green" : "red";
  return (
    <View className="flex flex-row items-center justify-between py-2">
      <View className="flex flex-col ">
        <Text className={`text-${color}-500 font-bold text-lg`}>
          {index + 1}
          {" - "}
          {title}
        </Text>
        <Text className={`text-${color}-500 text-sm`}>{date}</Text>
      </View>
      <View>
        <Text className={`text-${color}-500 font-bold text-lg`}>
          {isIncome ? "+" : "-"}
          {Number(amount).toFixed(2)} TL
        </Text>
      </View>
    </View>
  );
}
