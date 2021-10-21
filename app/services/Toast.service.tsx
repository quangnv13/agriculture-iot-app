import { Text, Toast, useBreakpointValue, View } from "native-base";
import React from "react";
import { THEME_COLOR } from "../utils/models/theme";

export const toastr = {
  showToast: (
    message: string,
    type: "success" | "warning" | "error" | "info",
    duration = 3500
  ) => {
    Toast.show({
      duration,
      placement: "top",
      title: message,
    });
  },
};
