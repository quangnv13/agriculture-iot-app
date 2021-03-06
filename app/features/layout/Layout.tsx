import { MaterialIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerHeaderProps,
  DrawerItemList,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import {
  Actionsheet,
  AlertDialog,
  Badge,
  Box,
  Card,
  Center,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { Alert, Keyboard } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import offsetImage from "../../../assets/offset-bg.jpg";
import { useAppDispatch } from "../../core/hooks";
import { toastr } from "../../services/Toast.service";
import { THEME_COLOR } from "../../utils/models/theme";
import { logout } from "../auth/authSlice";
import { CalendarScreen } from "../calendar/Calendar";
import { Conectivity } from "../conectivity/Connectivity";
import { DeviceHub } from "../device-hub/DeviceHub";
import Home from "../home/Home";
import { Sensor } from "../sensor/Sensor";
import { Setting } from "../setting/Setting";

const DrawerNavigator = createDrawerNavigator();

function Topbar(props: DrawerHeaderProps) {
  const [isOpenNotify, setIsOpenNotify] = useState(false);
  const onMenuPress = () => props.navigation.toggleDrawer(); Keyboard.dismiss();
  return (
    <>
      <StatusBar
        backgroundColor={THEME_COLOR.primary["600"]}
        barStyle="light-content"
      />
      <Box safeAreaTop backgroundColor={THEME_COLOR.primary["600"]} />
      <HStack
        bg={THEME_COLOR.primary["600"]}
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack alignItems="center">
          <IconButton
            onPress={onMenuPress}
            icon={
              <Icon
                size="sm"
                as={<MaterialIcons name="menu" />}
                color="white"
              />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            {props.options.headerTitle}
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={<MaterialIcons name="search" />}
                color="white"
                size="sm"
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={<MaterialIcons name="person-outline" />}
                size="sm"
                color="white"
              />
            }
          />
          <TouchableOpacity onPress={() => setIsOpenNotify(!isOpenNotify)}>
            <IconButton
              icon={
                <Icon
                  as={<MaterialIcons name="notifications" />}
                  size="sm"
                  color="white"
                />
              }
            ></IconButton>
            <Box
              width="5"
              height="5"
              position="absolute"
              backgroundColor="red.500"
              justifyContent="center"
              alignItems="center"
              rounded="50px"
              top="-0.5"
              right="0.3"
              _text={{
                fontSize: 10,
              }}
            >
              10
            </Box>
          </TouchableOpacity>
        </HStack>
      </HStack>

      <Actionsheet
        isOpen={isOpenNotify}
        onClose={() => setIsOpenNotify(!isOpenNotify)}
        style={{
          height: "90%",
          marginTop: "20%",
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
          backgroundColor: THEME_COLOR.white,
        }}
      >
        <HStack width="100%" flex={0.1}>
          <Heading mt={4} pl={3} fontSize={20} flex={1} textAlign="left">
            Th??ng b??o
          </Heading>
          <TouchableOpacity
            style={{ position: "relative", top: 10, right: 8 }}
            onPress={() => setIsOpenNotify(false)}
          >
            <MaterialIcons
              color={THEME_COLOR.gray[500]}
              name="close"
              size={30}
            ></MaterialIcons>
          </TouchableOpacity>
        </HStack>
        <ScrollView maxHeight="100%" width="100%" flex={1}>
          <VStack
            my={1}
            mx={1}
            borderRadius={4}
            p={2}
            borderWidth="1"
            borderColor="coolGray.300"
          >
            <HStack>
              <Text flex={4} fontSize={17} color={THEME_COLOR.danger[600]}>
                C???nh b??o v?????t ng?????ng
              </Text>
              <Text flex={3} fontSize={17}>
                10:09 21/10/2021
              </Text>
              <MaterialIcons
                size={20}
                color={THEME_COLOR.danger[500]}
                name="warning"
              ></MaterialIcons>
            </HStack>
            <Text>
              Nhi???t ????? ???? v?????t gi?? tr??? c???u h??nh: 27??C, nhi???t ????? hi???n t???i ??o
              ???????c: 32??C
            </Text>
          </VStack>
          <VStack
            mx={1}
            my={1}
            borderRadius={4}
            p={2}
            borderWidth="1"
            borderColor="coolGray.300"
          >
            <HStack>
              <Text flex={4} fontSize={17} color={THEME_COLOR.success}>
                ???? v??? m???c an to??n
              </Text>
              <Text flex={3} fontSize={17}>
                10:09 21/10/2021
              </Text>
              <MaterialIcons
                size={20}
                color={THEME_COLOR.success}
                name="check"
              ></MaterialIcons>
            </HStack>
            <Text>
              Nhi???t ????? ???? v??? ph???m vi gi?? tr??? c???u h??nh: 27??C, nhi???t ????? hi???n t???i
              ??o ???????c: 26.8??C
            </Text>
          </VStack>
          <VStack
            mx={1}
            my={1}
            borderRadius={4}
            p={2}
            borderWidth="1"
            borderColor="coolGray.300"
          >
            <HStack>
              <Text flex={4} fontSize={17} color={THEME_COLOR.danger[600]}>
                C???nh b??o v?????t ng?????ng
              </Text>
              <Text flex={3} fontSize={17}>
                10:09 21/10/2021
              </Text>
              <MaterialIcons
                size={20}
                color={THEME_COLOR.danger[500]}
                name="warning"
              ></MaterialIcons>
            </HStack>
            <Text>
              Nhi???t ????? ???? v?????t gi?? tr??? c???u h??nh: 27??C, nhi???t ????? hi???n t???i ??o
              ???????c: 32??C
            </Text>
          </VStack>
          <VStack
            mx={1}
            my={1}
            borderRadius={4}
            p={2}
            borderWidth="1"
            borderColor="coolGray.300"
          >
            <HStack>
              <Text flex={4} fontSize={17} color={THEME_COLOR.danger[600]}>
                B??? thi???t b??? 3 ???? b??? m???t k???t n???i
              </Text>
              <Text flex={3} fontSize={17}>
                10:09 21/10/2021
              </Text>
              <MaterialIcons
                size={20}
                color={THEME_COLOR.danger[500]}
                name="warning"
              ></MaterialIcons>
            </HStack>
            <Text>
              B??? thi???t b??? 3 ???? b??? m???t k???t n???i! Vui l??ng ki???m tra ???????ng truy???n ho???c li??n h??? h??? tr???
            </Text>
          </VStack>
          <VStack
            mx={1}
            my={1}
            borderRadius={4}
            p={2}
            borderWidth="1"
            borderColor="coolGray.300"
          >
            <HStack>
              <Text flex={4} fontSize={17} color={THEME_COLOR.success}>
                ???? v??? m???c an to??n
              </Text>
              <Text flex={3} fontSize={17}>
                10:09 21/10/2021
              </Text>
              <MaterialIcons
                size={20}
                color={THEME_COLOR.success}
                name="check"
              ></MaterialIcons>
            </HStack>
            <Text>
              Nhi???t ????? ???? v??? ph???m vi gi?? tr??? c???u h??nh: 27??C, nhi???t ????? hi???n t???i
              ??o ???????c: 26.8??C
            </Text>
          </VStack>
          <VStack
            mx={1}
            my={1}
            borderRadius={4}
            p={2}
            borderWidth="1"
            borderColor="coolGray.300"
          >
            <HStack>
              <Text flex={4} fontSize={17} color={THEME_COLOR.danger[600]}>
                C???nh b??o v?????t ng?????ng
              </Text>
              <Text flex={3} fontSize={17}>
                10:09 21/10/2021
              </Text>
              <MaterialIcons
                size={20}
                color={THEME_COLOR.danger[500]}
                name="warning"
              ></MaterialIcons>
            </HStack>
            <Text>
              Nhi???t ????? ???? v?????t gi?? tr??? c???u h??nh: 27??C, nhi???t ????? hi???n t???i ??o
              ???????c: 32??C
            </Text>
          </VStack>
          <VStack
            mx={1}
            my={1}
            borderRadius={4}
            p={2}
            borderWidth="1"
            borderColor="coolGray.300"
          >
            <HStack>
              <Text flex={4} fontSize={17} color={THEME_COLOR.danger[600]}>
                C???nh b??o v?????t ng?????ng
              </Text>
              <Text flex={3} fontSize={17}>
                10:09 21/10/2021
              </Text>
              <MaterialIcons
                size={20}
                color={THEME_COLOR.danger[500]}
                name="warning"
              ></MaterialIcons>
            </HStack>
            <Text>
              Nhi???t ????? ???? v?????t gi?? tr??? c???u h??nh: 27??C, nhi???t ????? hi???n t???i ??o
              ???????c: 32??C
            </Text>
          </VStack>
          <VStack
            mx={1}
            my={1}
            borderRadius={4}
            p={2}
            borderWidth="1"
            borderColor="coolGray.300"
          >
            <HStack>
              <Text flex={4} fontSize={17} color={THEME_COLOR.danger[600]}>
                C???nh b??o v?????t ng?????ng
              </Text>
              <Text flex={3} fontSize={17}>
                10:09 21/10/2021
              </Text>
              <MaterialIcons
                size={20}
                color={THEME_COLOR.danger[500]}
                name="warning"
              ></MaterialIcons>
            </HStack>
            <Text>
              Nhi???t ????? ???? v?????t gi?? tr??? c???u h??nh: 27??C, nhi???t ????? hi???n t???i ??o
              ???????c: 32??C
            </Text>
          </VStack>
          <VStack
            mx={1}
            my={1}
            borderRadius={4}
            p={2}
            borderWidth="1"
            borderColor="coolGray.300"
          >
            <HStack>
              <Text flex={4} fontSize={17} color={THEME_COLOR.danger[600]}>
                C???nh b??o v?????t ng?????ng
              </Text>
              <Text flex={3} fontSize={17}>
                10:09 21/10/2021
              </Text>
              <MaterialIcons
                size={20}
                color={THEME_COLOR.danger[500]}
                name="warning"
              ></MaterialIcons>
            </HStack>
            <Text>
              Nhi???t ????? ???? v?????t gi?? tr??? c???u h??nh: 27??C, nhi???t ????? hi???n t???i ??o
              ???????c: 32??C
            </Text>
          </VStack>
        </ScrollView>
      </Actionsheet>
    </>
  );
}

function OffsetMenuBar(props: DrawerContentComponentProps) {
  const dispatch = useAppDispatch();
  return (
    <View flex={1}>
      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: 0,
        }}
      >
        <Image
          alt="Agriculture"
          source={offsetImage}
          resizeMode="cover"
          resizeMethod="resize"
          resize="horizontal"
          width="100%"
          height="200"
        />
        <Center marginY="3">
          <Heading color={THEME_COLOR.primary["500"]}>Smart IOT</Heading>
          <Divider mt="3" w="100%" />
        </Center>
        <DrawerItemList {...props}></DrawerItemList>
        <TouchableHighlight
          activeOpacity={1}
          underlayColor={THEME_COLOR.gray[100]}
          onPress={() => {
            Alert.alert("????ng xu???t", "B???n c?? ch???c ch???n!", [
              {
                text: "H???y",
                style: "cancel",
              },
              {
                text: "?????ng ??",
                onPress: () => {
                  dispatch(logout());
                  toastr.showToast("????ng xu???t th??nh c??ng!", "success");
                },
              },
            ]);
          }}
        >
          <HStack ml={5} my={3} space={7}>
            <MaterialIcons
              size={25}
              color={THEME_COLOR.danger[500]}
              name="person-remove"
            ></MaterialIcons>
            <Text color="danger.500">????ng xu???t</Text>
          </HStack>
        </TouchableHighlight>
        {/* {props.state.routes.map((route) => (
          <DrawerItem
            key={makeid(15)}
            activeBackgroundColor={THEME_COLOR.primary[500]}
            activeTintColor={THEME_COLOR.white}
            inactiveTintColor={THEME_COLOR.black}
            focused={focusedRouteName === route.name}
            label={route.name}
            onPress={() => {
              props.navigation.navigate(route.name);
            }}
          ></DrawerItem>
        ))} */}
        <Divider mt="3" w="100%" />
      </DrawerContentScrollView>
    </View>
  );
}

function Layout() {
  const screenOptions: DrawerNavigationOptions = {
    header: (props) => <Topbar {...props} />,
    drawerActiveBackgroundColor: THEME_COLOR.primary[500],
    drawerActiveTintColor: THEME_COLOR.white,
  };
  return (
    <DrawerNavigator.Navigator
      screenOptions={screenOptions}
      initialRouteName="B???ng ??i???u khi???n"
      drawerContent={(props) => <OffsetMenuBar {...props}></OffsetMenuBar>}
    >
      <DrawerNavigator.Screen
        name="B???ng ??i???u khi???n"
        component={Home}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="dashboard" {...props}></MaterialIcons>
          ),
          headerTitle: "B???ng ??i???u khi???n",
        }}
      />
      <DrawerNavigator.Screen
        name="B??? thi???t b???"
        component={DeviceHub}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="router" {...props}></MaterialIcons>
          ),
          headerTitle: "Qu???n l?? b??? thi???t b???",
        }}
      />
      <DrawerNavigator.Screen
        name="C???m bi???n"
        component={Sensor}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="link" {...props}></MaterialIcons>
          ),
          headerTitle: "Qu???n l?? c???m bi???n",
        }}
      />
      <DrawerNavigator.Screen
        name="K???t n???i"
        component={Conectivity}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="device-hub" {...props}></MaterialIcons>
          ),
          headerTitle: "Qu???n l?? k???t n???i",
        }}
      />
      <DrawerNavigator.Screen
        name="?????t l???ch"
        component={CalendarScreen}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="date-range" {...props}></MaterialIcons>
          ),
          headerTitle: "?????t l???ch",
        }}
      />
      <DrawerNavigator.Screen
        name="C??i ?????t c???nh b??o"
        component={Setting}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="settings" {...props}></MaterialIcons>
          ),
          headerTitle: "C??i ?????t c???nh b??o",
        }}
      />
    </DrawerNavigator.Navigator>
  );
}

export { Layout };
