import { Heading, View } from "native-base";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../core/hooks";
import { setTopbarTitle } from "../layout/layoutSlice";

type DeviceHubProps = {};

const DeviceHub = (props: DeviceHubProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTopbarTitle({ topbarTitle: "Bộ thiết bị" }));
  });
  return (
    <View>
      <Heading>Đây là quản lý bộ thiết bị</Heading>
    </View>
  );
};

export { DeviceHub };
