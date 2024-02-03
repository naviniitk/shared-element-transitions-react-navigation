import React, { useRef } from "react";
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
import { LOCATIONS } from "../data";
import { themeValues } from "../theme";
import { SharedElement } from "react-navigation-shared-element";

const { width } = Dimensions.get("window");

const TravelList = ({ navigation }: { navigation: any }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Animated.FlatList
        data={LOCATIONS}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={themeValues.FULL_SIZE}
        decelerationRate={"fast"}
        keyExtractor={(item) => item.key}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * themeValues.FULL_SIZE,
            index * themeValues.FULL_SIZE,
            (index + 1) * themeValues.FULL_SIZE,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [themeValues.ITEM_WIDTH, 0, -themeValues.ITEM_WIDTH],
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.1, 1],
          });

          return (
            <TouchableOpacity
              style={[
                styles.iconContainer,
                index === LOCATIONS.length - 1 && {
                  marginRight: width * 0.32 - themeValues.SPACING,
                },
              ]}
              onPress={() => {
                navigation.push("TravelListDetail", { item });
              }}
            >
              <SharedElement
                id={`item.${item.key}.photo`}
                style={[StyleSheet.absoluteFillObject]}
              >
                <View
                  style={[
                    StyleSheet.absoluteFillObject,
                    { overflow: "hidden", borderRadius: themeValues.RADIUS },
                  ]}
                >
                  <Animated.Image
                    source={{ uri: item.image, cache: "force-cache" }}
                    style={[
                      StyleSheet.absoluteFillObject,
                      { resizeMode: "cover", transform: [{ scale }] },
                    ]}
                  />
                </View>
              </SharedElement>

              <SharedElement id={`item.${item.key}.location`}>
                <Animated.Text
                  style={[styles.location, { transform: [{ translateX }] }]}
                >
                  {item.location}
                </Animated.Text>
              </SharedElement>

              <View style={styles.daysContainer}>
                <Text style={styles.daysVal}>{item.numberOfDays}</Text>
                <Text style={styles.daysText}>days</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: themeValues.ITEM_WIDTH,
    height: themeValues.ITEM_HEIGHT,
    margin: themeValues.SPACING,
  },
  location: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "800",
    width: themeValues.ITEM_WIDTH * 0.8,
    textTransform: "uppercase",
    position: "absolute",
    top: themeValues.SPACING * 2,
    left: themeValues.SPACING * 2 ,
  },
  daysContainer: {
    position: "absolute",
    bottom: themeValues.SPACING,
    left: themeValues.SPACING,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  daysVal: {
    fontWeight: "800",
    color: "#fff",
    fontSize: 18,
  },
  daysText: {
    color: "#fff",
    fontSize: 10,
  },
});

export default TravelList;
