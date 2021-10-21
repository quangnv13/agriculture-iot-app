import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  ScrollView,
  View,
  VStack,
  Text,
} from "native-base";
import React from "react";
import { THEME_COLOR } from "../../utils/models/theme";

const Conectivity = () => {
  return (
    <ScrollView>
      <Center mt="4" p="2">
        <VStack space={4} w="100%">
          <VStack space={2.5} w="100%" pr={4}>
            <View flex={1} flexDirection="row">
              <Heading color={THEME_COLOR.primary[600]} size="md">
                Bộ thiết bị 1 (Online)
              </Heading>
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
                  <Text ml={2}>Cảm biến nhiệt độ</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.primary[600]} fontSize={15}>
                  Kết nối ổn định
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
                  <Text ml={2}>Cảm biến ánh sáng</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.primary[600]} fontSize={15}>
                  Kết nối ổn định
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
                  <Text ml={2}>Cảm biến độ ẩm không khí</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.yellow[600]} fontSize={15}>
                  Không ổn định
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
                  <Text ml={2}>Cảm biến độ ẩm đất</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.danger[600]} fontSize={15}>
                  Mất kết nối
                </Heading>
              </Box>
            </HStack>
            <Divider />
          </VStack>

          <VStack space={2.5} w="100%" pr={4}>
            <View flex={1} flexDirection="row">
              <Heading color={THEME_COLOR.primary[600]} size="md">
                Bộ thiết bị 2 (Online)
              </Heading>
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
                  <Text ml={2}>Cảm biến nhiệt độ</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.primary[600]} fontSize={15}>
                  Kết nối ổn định
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
                  <Text ml={2}>Cảm biến ánh sáng</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.primary[600]} fontSize={15}>
                  Kết nối ổn định
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
                  <Text ml={2}>Cảm biến độ ẩm không khí</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.yellow[600]} fontSize={15}>
                  Không ổn định
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
                  <Text ml={2}>Cảm biến độ ẩm đất</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.danger[600]} fontSize={15}>
                  Mất kết nối
                </Heading>
              </Box>
            </HStack>
            <Divider />
          </VStack>

          <VStack space={2.5} w="100%" pr={4}>
            <View flex={1} flexDirection="row">
              <Heading color={THEME_COLOR.danger[600]} size="md">
                Bộ thiết bị 3 (Offline)
              </Heading>
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
                  <Text ml={2}>Cảm biến nhiệt độ</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.danger[600]} fontSize={15}>
                  Mất kết nối
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
                  <Text ml={2}>Cảm biến ánh sáng</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.danger[600]} fontSize={15}>
                  Mất kết nối
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
                  <Text ml={2}>Cảm biến độ ẩm không khí</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.danger[600]} fontSize={15}>
                  Mất kết nối
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
                  <Text ml={2}>Cảm biến độ ẩm đất</Text>
                </View>
                <Heading ml={2} color={THEME_COLOR.danger[600]} fontSize={15}>
                  Mất kết nối
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

export { Conectivity };
