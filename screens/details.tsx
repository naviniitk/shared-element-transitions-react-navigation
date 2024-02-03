import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DATA } from "../data";
import { SharedElement } from "react-navigation-shared-element";

const { width, height } = Dimensions.get("window");

const Details = ({ navigation, route }: { navigation: any; route: any }) => {
  const { item } = route.params;
  const ref = useRef<any>();
  const selectedItemIndex = DATA.findIndex((i) => i.id === item.id);

  const mountedAnimated = useRef(new Animated.Value(0)).current;
  const activeIndex = useRef(new Animated.Value(selectedItemIndex)).current;
  const activeIndexAnimation = useRef(
    new Animated.Value(selectedItemIndex)
  ).current;

  const translateY = mountedAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const translateX = activeIndexAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [80, 0, -80],
  });

  const animation = (toValue: number, delay: number) => {
    return Animated.timing(mountedAnimated, {
      toValue,
      duration: 300,
      delay,
      useNativeDriver: true,
    });
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(activeIndexAnimation, {
        toValue: activeIndex,
        duration: 300,
        useNativeDriver: true,
      }),
      animation(1, 500),
    ]).start();
  }, [activeIndex]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <TouchableOpacity
        style={{ padding: 10 }}
        onPress={() => {
          animation(0, 0).start(() => {
            navigation.goBack();
          });
        }}
      >
        <Text>Back</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          flexDirection: "row",
          flexWrap: "nowrap",
          marginVertical: 20,
          marginLeft: width / 2 - 40,
          transform: [{ translateX }],
        }}
      >
        {DATA.map((item, index) => {
          const inputRange = [index - 1, index, index + 1];
          const opacity = activeIndexAnimation.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
          return (
            <TouchableOpacity
              key={item.id}
              style={{ padding: 10 }}
              onPress={() => {
                activeIndex.setValue(index);
                ref.current.scrollToIndex({ index, animated: true });
              }}
            >
              <Animated.View style={{ alignItems: "center", opacity }}>
                <SharedElement id={`item.${item.id}.image`}>
                  <Image
                    source={{ uri: item.uri }}
                    style={{ width: 60, height: 60, borderRadius: 100 }}
                  />
                </SharedElement>
                <Text style={{ fontSize: 10 }}>{item.name}</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </Animated.View>
      <Animated.FlatList
        style={{
          opacity: mountedAnimated,
          transform: [{ translateY }],
        }}
        ref={ref}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={selectedItemIndex}
        pagingEnabled
        onMomentumScrollEnd={({ nativeEvent }) => {
          const index = Math.round(nativeEvent.contentOffset.x / width);
          activeIndex.setValue(index);
        }}
        renderItem={({ item }) => {
          return (
            <ScrollView
              style={{
                width: width - 40,
                borderRadius: 16,
                margin: 20,
                backgroundColor: "rgba(0,0,0,0.05)",
              }}
            >
              <View
                style={{
                  padding: 10,
                }}
              >
                <Text style={{ fontSize: 16 }}>
                  {Array(50).fill(`Some Names ${item.name}`).join("\n")}
                </Text>
              </View>
            </ScrollView>
          );
        }}
        getItemLayout={(data, index) => {
          return {
            length: width,
            offset: width * index,
            index,
          };
        }}
      />
    </SafeAreaView>
  );
};

Details.sharedElements = () => {
  // const { item } = route.params;
  return DATA.map((item) => {
    return `item.${item.id}.image`;
  });
};

export default Details;
