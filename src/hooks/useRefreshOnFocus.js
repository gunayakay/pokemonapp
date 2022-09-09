import React from "react";
import { useFocusEffect } from "@react-navigation/native";

function useRefreshOnFocus(refetch) {
  const firstTimeRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }

      refetch();
    }, [refetch])
  );
}

export default useRefreshOnFocus;
