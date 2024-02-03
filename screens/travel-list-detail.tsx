import React from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { themeValues } from "../theme";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";

const { width } = Dimensions.get("window");

const zoomIn = {
  0: {
    opacity: 0,
    scale: 0,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};

const TravelListDetail = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          paddingHorizontal: themeValues.SPACING,
          position: "absolute",
          top: 50,
          left: 10,
          zIndex: 2,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 20, color: "#fff" }}>
          Back
        </Text>
      </TouchableOpacity>

      <SharedElement
        id={`item.${item.key}.photo`}
        style={[StyleSheet.absoluteFillObject]}
      >
        <View style={[StyleSheet.absoluteFillObject]}>
          <Image
            source={{ uri: item.image, cache: "force-cache" }}
            style={[StyleSheet.absoluteFillObject]}
            resizeMode="cover"
          />
        </View>
      </SharedElement>

      <SharedElement id={`item.${item.key}.location`}>
        <Text style={[styles.location]}>{item.location}</Text>
      </SharedElement>
      <View
        style={{
          position: "absolute",
          bottom: 120,
          left: themeValues.SPACING,
        }}
      >
        <Text
          style={[
            {
              fontSize: 16,
              width: "100%",
              textTransform: "uppercase",
              fontWeight: "800",
              color: "#fff",
            },
          ]}
        >
          Activities
        </Text>
        <FlatList
          data={[...Array(8).keys()]}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            padding: themeValues.SPACING,
          }}
          renderItem={({ item, index }) => {
            return (
              <Animatable.View
                animation={zoomIn}
                duration={700}
                delay={400 + index * 100}
                style={{
                  backgroundColor: "#fff",
                  padding: themeValues.SPACING,
                  width: width * 0.33,
                  height: width * 0.5,
                  marginRight: 20,
                }}
              >
                <Image
                  source={{ uri: "https://picsum.photos/200" }}
                  style={{ width: "100%", height: "70%" }}
                  resizeMode="cover"
                />
                <Text>Activity #{item + 1}</Text>
              </Animatable.View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

TravelListDetail.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;

  return [
    { id: `item.${item.key}.photo ` },
    { id: `item.${item.key}.location` },
  ];
};

const styles = StyleSheet.create({
  location: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "800",
    width: themeValues.ITEM_WIDTH * 0.8,
    textTransform: "uppercase",
    position: "absolute",
    top: 100,
    left: themeValues.SPACING * 2,
  },
});

export default TravelListDetail;
