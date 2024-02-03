import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DATA } from "../data";
import { SharedElement } from "react-navigation-shared-element";
import MarketingSlider from "../components/marketing-slider";

const List = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <MarketingSlider />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginVertical: 20,
            justifyContent: "center",
          }}
        >
          {DATA.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.push("Details", { item })}
                style={{ padding: 10 }}
              >
                <SharedElement id={`item.${item.id}.image`}>
                  <Image
                    source={{ uri: item.uri }}
                    style={{ width: 60, height: 60, borderRadius: 100 }}
                  />
                </SharedElement>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default List;
