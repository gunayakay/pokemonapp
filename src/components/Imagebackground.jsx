import React from "react";
import { Factory, Link, Box, Text } from "native-base";
import { ImageBackground as Background } from "react-native";
import PropTypes from "prop-types";

function ImageBackground({ href, imageURL, subText, heading }) {
  const FactoryImageBackground = Factory(Background);
  return (
    <Link href={href} marginBottom="7">
      <Box w="100%" height="200">
        <FactoryImageBackground
          source={imageURL}
          w="100%"
          h="100%"
          borderRadius="xl"
          overflow="hidden"
        >
          <Box
            flex={1}
            backgroundColor="black"
            w="100%"
            h="100%"
            position="absolute"
            top={0}
            left={0}
            zIndex={100}
            borderRadius="xl"
            opacity={0.4}
          />
          <Box
            flex={1}
            position="relative"
            justifyContent="flex-end"
            alignItems="center"
            paddingBottom="5"
          >
            <Text
              fontSize="22"
              textAlign="center"
              color="white"
              zIndex={100}
              position="relative"
            >
              {heading}
            </Text>
            <Text
              fontSize="18"
              textAlign="center"
              color="white"
              zIndex={100}
              position="relative"
            >
              {subText}
            </Text>
          </Box>
        </FactoryImageBackground>
      </Box>
    </Link>
  );
}

ImageBackground.propTypes = {
  href: PropTypes.string,
  imageURL: PropTypes.number,
  subText: PropTypes.string,
  heading: PropTypes.string,
};
ImageBackground.defaultProps = {
  href: "",
  imageURL: 0,
  subText: "",
  heading: "",
};

export default ImageBackground;
