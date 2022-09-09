import React from "react";
import { Pressable, Box, Text } from "native-base";

function CBox({ onPress, title, color, style }) {
  return (
    <Pressable onPress={onPress} flex={1}>
      <Box
        style={style}
        paddingY={3}
        padding={6}
        marginBottom={3}
        justifyContent="center"
        alignItems="center"
        bg={{
          linearGradient: {
            colors: color,
            start: [0, 0],
            end: [1, 0],
          },
        }}
        // p="12"
        rounded="xl"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          textAlign: "center",
        }}
      >
        <Text color="white" fontSize="19">
          {title}
        </Text>
      </Box>
    </Pressable>
  );
}

export default CBox;
