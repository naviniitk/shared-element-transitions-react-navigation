import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

const MARKETING_DATA = [
  { name: "Sunny Days", color: "#FF5733" },
  { name: "Sunny Days", color: "#71FF33" },
  { name: "Sunny Days", color: "#33F6FF" },
  { name: "Sunny Days", color: "#FF33DA" },
];

const MarketingSlider = () => {
  return (
    <View style={{ flex: 0.4 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={MARKETING_DATA}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: item.color,
                width: (2 * width) / 3,
                height: 150,
                borderRadius: 16,
                marginHorizontal: 10,
                padding: 16,
              }}
            >
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: 20,
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MarketingSlider;
