import { Text, Toast, useBreakpointValue, View } from "native-base";
import React from "react";
import { THEME_COLOR } from "../utils/models/theme";

export const toastr = {
  showToast: (
    message: string,
    type: "success" | "warning" | "error" | "info",
    duration = 2500
  ) => {
    Toast.show({
      duration,
      render: (props: { id: number; onClose: Function }) => {
        let messageColor = THEME_COLOR.success;
        let backgroundColor = THEME_COLOR.primary[200];

        switch (type) {
          case "error":
            messageColor = THEME_COLOR.white;
            backgroundColor = THEME_COLOR.danger[500];
            break;
          case "info":
            messageColor = THEME_COLOR.info[500];
            break;
          case "success":
            messageColor = THEME_COLOR.white;
            backgroundColor = THEME_COLOR.success;
            break;
          case "warning":
            messageColor = THEME_COLOR.warning;
            break;
          default:
            messageColor = THEME_COLOR.success;
        }
        return (
          <View
            style={{
              backgroundColor,
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: messageColor }}>{message}</Text>
          </View>
        );
      },
    });
  },
};
