/* eslint-disable global-require */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from "react";
import { Image, Text, Pressable, HStack, useColorModeValue } from "native-base";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <HStack
      _dark={{
        bg: {
          linearGradient: {
            colors: ["#457fca", "#5691c8"],
            start: [0, 0],
            end: [1, 0],
          },
        },
      }}
      _light={{
        bg: {
          linearGradient: {
            colors: ["#76b852", "#8DC26F"],
            start: [0, 0],
            end: [1, 0],
          },
        },
      }}
      marginX={5}
      position="absolute"
      bottom={5}
      borderRadius={10}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            key={index}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            flex={1}
            justifyContent="center"
            alignItems="center"
            paddingX={2}
            paddingY={4}
          >
            <Image
              source={require("../static/pokeball.png")}
              alt="Alternate Text"
              size="5"
              marginBottom={2}
            />

            <Text
              style={{
                color: isFocused
                  ? useColorModeValue("#b7e501", "#63fcf9")
                  : "white",
              }}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </HStack>
  );
}

export default MyTabBar;
