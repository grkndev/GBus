import React, { useState } from "react";
import { View, FlatList, Dimensions } from "react-native";
import Card, { CardType } from "@/components/Cards/card";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 64;

export default function Indicator() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardData: CardType[] = [
    {
      balance: 1500.5,
      type: "Debit",
      iban: "TR33 0006 1005 1234 5678 9012 34",
      account: "8798",
    },
    {
      balance: 750.25,
      type: "BusCard",
      account: "9912",
    },
  ];

  const renderCard = ({ item, index }: { item: CardType; index: number }) => (
    <View
      style={{
        width: CARD_WIDTH,
        alignSelf: "center",
      }}
    >
      <Card
        balance={item.balance}
        type={item.type}
        iban={item.iban}
        account={item.account}
      />
    </View>
  );

  const onScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / (CARD_WIDTH + 16));
    setCurrentIndex(index);
  };

  return (
    <View>
      <FlatList
        data={cardData}
        renderItem={renderCard}
        horizontal
        pagingEnabled
        snapToAlignment="start"
        // snapToInterval={CARD_WIDTH}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        contentContainerStyle={{ gap: 16 }}
      />
      <View className="flex flex-row gap-2 items-center justify-center mt-4">
        {cardData.map((_, index) => (
          <View
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-zinc-600"
            }`}
          />
        ))}
      </View>
    </View>
  );
}
