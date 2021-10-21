import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Input,
  ScrollView,
  Text,
  View,
  VStack,
  Switch
} from "native-base";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { THEME_COLOR } from "../../utils/models/theme";

const Setting = () => {
  return (
    <KeyboardAwareScrollView>
      <Center mt="4" p="2">
        <VStack space={4} w="100%">
          <VStack space={2.5} w="100%" pr={4}>
            <View flex={1} flexDirection="row">
              <Heading color={THEME_COLOR.primary[600]} size="md">
                Bộ thiết bị 1
              </Heading>
            </View>
            <Divider />
            <VStack space={4}>
              <Box
                borderColor="coolGray.300"
                borderWidth="1"
                rounded="lg"
                overflow="hidden"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <Text ml={2} flex={1}>
                    Cảm biến nhiệt độ
                  </Text>
                  <Switch defaultIsChecked></Switch>
                </View>
                <View flex={1} flexDirection="row" alignItems="center" mt={3}>
                  <Text ml={2} flex={1}>
                    Mức an toàn:
                  </Text>
                  <HStack flex={2} alignItems="center" space={4}>
                    <Text flex={1}>Từ</Text>
                    <Input value="30" flex={2}></Input>
                    <Text flex={1}>Tới</Text>
                    <Input value="34" flex={2}></Input>
                  </HStack>
                </View>
              </Box>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <Text ml={2} flex={1}>
                    Cảm biến ánh sáng
                  </Text>
                  <Switch defaultIsChecked value={true}></Switch>
                </View>
                <View flex={1} flexDirection="row" alignItems="center" mt={3}>
                  <Text ml={2} flex={1}>
                    Mức an toàn:
                  </Text>
                  <HStack flex={2} alignItems="center" space={4}>
                    <Text flex={1}>Từ</Text>
                    <Input value="500" flex={2}></Input>
                    <Text flex={1}>Tới</Text>
                    <Input value="1000" flex={2}></Input>
                  </HStack>
                </View>
              </Box>
            </VStack>

            <VStack space={4}>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <Text ml={2} flex={1}>
                    Cảm biến độ ẩm không khí
                  </Text>
                  <Switch defaultIsChecked value={true}></Switch>
                </View>
                <View flex={1} flexDirection="row" alignItems="center" mt={3}>
                  <Text ml={2} flex={1}>
                    Mức an toàn:
                  </Text>
                  <HStack flex={2} alignItems="center" space={4}>
                    <Text flex={1}>Từ</Text>
                    <Input value="40%" flex={2}></Input>
                    <Text flex={1}>Tới</Text>
                    <Input value="60%" flex={2}></Input>
                  </HStack>
                </View>
              </Box>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <Text ml={2} flex={1}>
                    Cảm biến độ ẩm đất
                  </Text>
                  <Switch defaultIsChecked value={true}></Switch>
                </View>
                <View flex={1} flexDirection="row" alignItems="center" mt={3}>
                  <Text ml={2} flex={1}>
                    Mức an toàn:
                  </Text>
                  <HStack flex={2} alignItems="center" space={4}>
                    <Text flex={1}>Từ</Text>
                    <Input value="35%" flex={2}></Input>
                    <Text flex={1}>Tới</Text>
                    <Input value="50%" flex={2}></Input>
                  </HStack>
                </View>
              </Box>
            </VStack>
            <Divider />
          </VStack>

          <VStack space={2.5} w="100%" pr={4}>
            <View flex={1} flexDirection="row">
              <Heading color={THEME_COLOR.primary[600]} size="md">
                Bộ thiết bị 2
              </Heading>
            </View>
            <Divider />
            <VStack space={4}>
              <Box
                borderColor="coolGray.300"
                borderWidth="1"
                rounded="lg"
                overflow="hidden"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <Text ml={2} flex={1}>
                    Cảm biến nhiệt độ
                  </Text>
                  <Switch defaultIsChecked value={true}></Switch>
                </View>
                <View flex={1} flexDirection="row" alignItems="center" mt={3}>
                  <Text ml={2} flex={1}>
                    Mức an toàn:
                  </Text>
                  <HStack flex={2} alignItems="center" space={4}>
                    <Text flex={1}>Từ</Text>
                    <Input value="30" flex={2}></Input>
                    <Text flex={1}>Tới</Text>
                    <Input value="34" flex={2}></Input>
                  </HStack>
                </View>
              </Box>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <Text ml={2} flex={1}>
                    Cảm biến ánh sáng
                  </Text>
                  <Switch defaultIsChecked value={true}></Switch>
                </View>
                <View flex={1} flexDirection="row" alignItems="center" mt={3}>
                  <Text ml={2} flex={1}>
                    Mức an toàn:
                  </Text>
                  <HStack flex={2} alignItems="center" space={4}>
                    <Text flex={1}>Từ</Text>
                    <Input value="500" flex={2}></Input>
                    <Text flex={1}>Tới</Text>
                    <Input value="1000" flex={2}></Input>
                  </HStack>
                </View>
              </Box>
            </VStack>

            <VStack space={4}>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <Text ml={2} flex={1}>
                    Cảm biến độ ẩm không khí
                  </Text>
                  <Switch defaultIsChecked value={true}></Switch>
                </View>
                <View flex={1} flexDirection="row" alignItems="center" mt={3}>
                  <Text ml={2} flex={1}>
                    Mức an toàn:
                  </Text>
                  <HStack flex={2} alignItems="center" space={4}>
                    <Text flex={1}>Từ</Text>
                    <Input value="40%" flex={2}></Input>
                    <Text flex={1}>Tới</Text>
                    <Input value="60%" flex={2}></Input>
                  </HStack>
                </View>
              </Box>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <Text ml={2} flex={1}>
                    Cảm biến độ ẩm đất
                  </Text>
                  <Switch defaultIsChecked value={true}></Switch>
                </View>
                <View flex={1} flexDirection="row" alignItems="center" mt={3}>
                  <Text ml={2} flex={1}>
                    Mức an toàn:
                  </Text>
                  <HStack flex={2} alignItems="center" space={4}>
                    <Text flex={1}>Từ</Text>
                    <Input value="35%" flex={2}></Input>
                    <Text flex={1}>Tới</Text>
                    <Input value="50%" flex={2}></Input>
                  </HStack>
                </View>
              </Box>
            </VStack>
            <Divider />
          </VStack>

          <VStack space={2.5} w="100%" pr={4}>
            <View flex={1} flexDirection="row">
              <Heading color={THEME_COLOR.primary[600]} size="md">
                Bộ thiết bị 3
              </Heading>
            </View>
            <Divider />
            <VStack space={4}>
              <Box
                borderColor="coolGray.300"
                borderWidth="1"
                rounded="lg"
                overflow="hidden"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <Text ml={2} flex={1}>
                    Cảm biến nhiệt độ
                  </Text>
                  <Switch defaultIsChecked value={true}></Switch>
                </View>
                <View flex={1} flexDirection="row" alignItems="center" mt={3}>
                  <Text ml={2} flex={1}>
                    Mức an toàn:
                  </Text>
                  <HStack flex={2} alignItems="center" space={4}>
                    <Text flex={1}>Từ</Text>
                    <Input value="30" flex={2}></Input>
                    <Text flex={1}>Tới</Text>
                    <Input value="34" flex={2}></Input>
                  </HStack>
                </View>
              </Box>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <Text ml={2} flex={1}>
                    Cảm biến ánh sáng
                  </Text>
                  <Switch defaultIsChecked value={true}></Switch>
                </View>
                <View flex={1} flexDirection="row" alignItems="center" mt={3}>
                  <Text ml={2} flex={1}>
                    Mức an toàn:
                  </Text>
                  <HStack flex={2} alignItems="center" space={4}>
                    <Text flex={1}>Từ</Text>
                    <Input value="500" flex={2}></Input>
                    <Text flex={1}>Tới</Text>
                    <Input value="1000" flex={2}></Input>
                  </HStack>
                </View>
              </Box>
            </VStack>

            <VStack space={4}>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <Text ml={2} flex={1}>
                    Cảm biến độ ẩm không khí
                  </Text>
                  <Switch defaultIsChecked value={true}></Switch>
                </View>
                <View flex={1} flexDirection="row" alignItems="center" mt={3}>
                  <Text ml={2} flex={1}>
                    Mức an toàn:
                  </Text>
                  <HStack flex={2} alignItems="center" space={4}>
                    <Text flex={1}>Từ</Text>
                    <Input value="40%" flex={2}></Input>
                    <Text flex={1}>Tới</Text>
                    <Input value="60%" flex={2}></Input>
                  </HStack>
                </View>
              </Box>
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.300"
                borderWidth="1"
                padding={2}
              >
                <View flex={1} flexDirection="row" alignItems="center">
                  <Text ml={2} flex={1}>
                    Cảm biến độ ẩm đất
                  </Text>
                  <Switch defaultIsChecked value={true}></Switch>
                </View>
                <View flex={1} flexDirection="row" alignItems="center" mt={3}>
                  <Text ml={2} flex={1}>
                    Mức an toàn:
                  </Text>
                  <HStack flex={2} alignItems="center" space={4}>
                    <Text flex={1}>Từ</Text>
                    <Input value="35%" flex={2}></Input>
                    <Text flex={1}>Tới</Text>
                    <Input value="50%" flex={2}></Input>
                  </HStack>
                </View>
              </Box>
            </VStack>
            <Divider />
          </VStack>
        </VStack>
      </Center>
    </KeyboardAwareScrollView>
  );
};

export { Setting };
