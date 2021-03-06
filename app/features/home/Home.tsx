import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  ScrollView,
  Switch,
  Text,
  View,
  VStack,
} from "native-base";
import React, { FC, useEffect } from "react";
import { useAppDispatch } from "../../core/hooks";
import { THEME_COLOR } from "../../utils/models/theme";
import { setTopbarTitle } from "../layout/layoutSlice";

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTopbarTitle({ topbarTitle: "Bảng điều khiển" }));
  });
  return (
    <ScrollView>
      <Center mt="4" p="2">
        <VStack space={4} w="100%">
          <VStack space={2.5} w="100%" pr={4}>
            <View flex={1} flexDirection="row">
              <MaterialIcons
                color={THEME_COLOR.primary[600]}
                name="settings-remote"
                size={25}
              ></MaterialIcons>
              <Heading flex={1} color={THEME_COLOR.primary[600]} size="md">
                Bộ thiết bị 1
              </Heading>
              <HStack alignItems="center">
                <Text bold mr={3}>
                  Tự động
                </Text>
                <Switch></Switch>
              </HStack>
            </View>
            <Divider />
            <HStack space={4}>
              <Box
                borderColor="coolGray.300"
                borderWidth="1"
                rounded="lg"
                overflow="hidden"
                width="50%"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <MaterialIcons
                    color={THEME_COLOR.danger[500]}
                    name="device-thermostat"
                    size={25}
                  ></MaterialIcons>
                  <Text ml={2}>Nhiệt độ</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.gray[600]}>
                  24.5°C
                </Heading>
              </Box>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                width="50%"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <MaterialIcons
                    color={THEME_COLOR.yellow[500]}
                    name="wb-sunny"
                    size={25}
                  ></MaterialIcons>
                  <Text ml={2}>Ánh sáng</Text>
                </View>
                <Heading ml={1} color={THEME_COLOR.gray[600]}>
                  1000 Lux
                </Heading>
              </Box>
            </HStack>

            <HStack space={4}>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                width="50%"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <MaterialIcons
                    color={THEME_COLOR.blue[500]}
                    name="opacity"
                    size={25}
                  ></MaterialIcons>
                  <Text ml={2}>Độ ẩm không khí</Text>
                </View>
                <Heading ml={1} color={THEME_COLOR.gray[600]}>
                  30%
                </Heading>
              </Box>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                width="50%"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <MaterialIcons
                    color={THEME_COLOR.darkBlue[700]}
                    name="waves"
                    size={25}
                  ></MaterialIcons>
                  <Text ml={2}>Độ ẩm đất</Text>
                </View>
                <Heading ml={1} color={THEME_COLOR.gray[600]}>
                  50%
                </Heading>
              </Box>
            </HStack>
            <Divider />
          </VStack>

          <VStack space={2.5} w="100%" pr={4}>
            <View flex={1} flexDirection="row">
              <MaterialIcons
                color={THEME_COLOR.primary[600]}
                name="settings-remote"
                size={25}
              ></MaterialIcons>
              <Heading flex={1} color={THEME_COLOR.primary[600]} size="md">
                Bộ thiết bị 2
              </Heading>
              <HStack alignItems="center">
                <Text bold mr={3}>
                  Tự động
                </Text>
                <Switch></Switch>
              </HStack>
            </View>
            <Divider />
            <HStack space={4}>
              <Box
                borderColor="coolGray.300"
                borderWidth="1"
                rounded="lg"
                overflow="hidden"
                width="50%"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <MaterialIcons
                    color={THEME_COLOR.danger[500]}
                    name="device-thermostat"
                    size={25}
                  ></MaterialIcons>
                  <Text ml={2}>Nhiệt độ</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.gray[600]}>
                  24.5°C
                </Heading>
              </Box>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                width="50%"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <MaterialIcons
                    color={THEME_COLOR.yellow[500]}
                    name="wb-sunny"
                    size={25}
                  ></MaterialIcons>
                  <Text ml={2}>Ánh sáng</Text>
                </View>
                <Heading ml={1} color={THEME_COLOR.gray[600]}>
                  1000 Lux
                </Heading>
              </Box>
            </HStack>

            <HStack space={4}>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                width="50%"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <MaterialIcons
                    color={THEME_COLOR.blue[500]}
                    name="opacity"
                    size={25}
                  ></MaterialIcons>
                  <Text ml={2}>Độ ẩm không khí</Text>
                </View>
                <Heading ml={1} color={THEME_COLOR.gray[600]}>
                  25.6%
                </Heading>
              </Box>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                width="50%"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <MaterialIcons
                    color={THEME_COLOR.darkBlue[700]}
                    name="waves"
                    size={25}
                  ></MaterialIcons>
                  <Text ml={2}>Độ ẩm đất</Text>
                </View>
                <Heading ml={1} color={THEME_COLOR.gray[600]}>
                  65%
                </Heading>
              </Box>
            </HStack>
            <Divider />
          </VStack>

          <VStack space={2.5} w="100%" pr={4}>
            <View flex={1} flexDirection="row">
              <MaterialIcons
                color={THEME_COLOR.primary[600]}
                name="settings-remote"
                size={25}
              ></MaterialIcons>
              <Heading flex={1} color={THEME_COLOR.primary[600]} size="md">
                Bộ thiết bị 3
              </Heading>
              <HStack alignItems="center">
                <Text bold mr={3}>
                  Tự động
                </Text>
                <Switch></Switch>
              </HStack>
            </View>
            <Divider />
            <HStack space={4}>
              <Box
                borderColor="coolGray.300"
                borderWidth="1"
                rounded="lg"
                overflow="hidden"
                width="50%"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <MaterialIcons
                    color={THEME_COLOR.danger[500]}
                    name="device-thermostat"
                    size={25}
                  ></MaterialIcons>
                  <Text ml={2}>Nhiệt độ</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.gray[600]}>
                  24.5°C
                </Heading>
              </Box>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                width="50%"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <MaterialIcons
                    color={THEME_COLOR.yellow[500]}
                    name="wb-sunny"
                    size={25}
                  ></MaterialIcons>
                  <Text ml={2}>Ánh sáng</Text>
                </View>
                <Heading ml={1} color={THEME_COLOR.gray[600]}>
                  1000 Lux
                </Heading>
              </Box>
            </HStack>

            <HStack space={4}>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                width="50%"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <MaterialIcons
                    color={THEME_COLOR.blue[500]}
                    name="opacity"
                    size={25}
                  ></MaterialIcons>
                  <Text ml={2}>Độ ẩm không khí</Text>
                </View>
                <Heading ml={1} color={THEME_COLOR.gray[600]}>
                  15.5 %
                </Heading>
              </Box>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                width="50%"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <MaterialIcons
                    color={THEME_COLOR.darkBlue[700]}
                    name="waves"
                    size={25}
                  ></MaterialIcons>
                  <Text ml={2}>Độ ẩm đất</Text>
                </View>
                <Heading ml={1} color={THEME_COLOR.gray[600]}>
                  40%
                </Heading>
              </Box>
            </HStack>
            <Divider />
          </VStack>
        </VStack>
      </Center>
    </ScrollView>
  );
};

export default Home;
