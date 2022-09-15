/* eslint-disable global-require */
import { Box, ScrollView } from "native-base";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React from "react";
import ImageBackground from "../../components/Imagebackground";

function WatchList() {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <Box
      padding={5}
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        marginBottom={tabBarHeight}
      >
        <ImageBackground
          href="https://anizm.net/pokemon-izle"
          imageURL={require("../../static/4.jpg")}
          heading=" Pokémon: Indigo League "
          subText="82 Episodes"
        />
        <ImageBackground
          href="https://anizm.net/pokemon-izle"
          imageURL={require("../../static/5.jpg")}
          heading=" Adventures in the Orange Islands"
          subText="36 Episodes"
        />
        <ImageBackground
          href="https://anizm.net/pokemon-izle"
          imageURL={require("../../static/3.jpg")}
          heading=" The Johto Journeys"
          subText="41 Episodes"
        />
        <ImageBackground
          href="https://anizm.net/pokemon-izle"
          imageURL={require("../../static/1.jpg")}
          heading=" Johto League Champions"
          subText="52 Episodes"
        />
        <ImageBackground
          href="https://anizm.net/pokemon-izle"
          imageURL={require("../../static/2.jpg")}
          heading=" Master Quest"
          subText="65 Episodes"
        />
        <ImageBackground
          href="https://anizm.net/pokemon-izle"
          imageURL={require("../../static/6.jpg")}
          heading=" Advanced"
          subText="40 Episodes"
        />
        <ImageBackground
          href="https://anizm.net/pokemon-izle"
          imageURL={require("../../static/7.jpg")}
          heading=" Advanced Challenge"
          subText="52 Episodes"
        />
        <ImageBackground
          href="https://anizm.net/pokemon-izle"
          imageURL={require("../../static/8.jpg")}
          heading=" Advanced Battle"
          subText="54 Episodes "
        />
      </ScrollView>
    </Box>
  );
}
export default WatchList;
