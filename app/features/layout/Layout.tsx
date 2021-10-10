import { MaterialIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerHeaderProps,
  DrawerItemList,
  DrawerNavigationOptions
} from "@react-navigation/drawer";
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  StatusBar,
  Text,
  View
} from "native-base";
import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import offsetImage from "../../../assets/offset-bg.jpg";
import { THEME_COLOR } from "../../utils/models/theme";
import Counter from "../counter/Counter";
import { DeviceHub } from "../device-hub/DeviceHub";
import Home from "../home/Home";

const DrawerNavigator = createDrawerNavigator();

function Topbar(props: DrawerHeaderProps) {
  const onMenuPress = () => props.navigation.toggleDrawer();
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
        </HStack>
      </HStack>
    </>
  );
}

function OffsetMenuBar(props: DrawerContentComponentProps) {
  const focusedRouteName = props.state.routes[props.state.index].name;
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
          onPress={() => alert("Pressed!")}
        >
          <HStack ml={5} my={3} space={7}>
            <MaterialIcons
              size={25}
              color={THEME_COLOR.danger[500]}
              name="person-remove"
            ></MaterialIcons>
            <Text color="danger.500">Đăng xuất</Text>
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
      initialRouteName="Bảng điều khiển"
      drawerContent={(props) => <OffsetMenuBar {...props}></OffsetMenuBar>}
    >
      <DrawerNavigator.Screen
        name="Bảng điều khiển"
        component={Home}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="dashboard" {...props}></MaterialIcons>
          ),
          headerTitle: 'Bảng điều khiển'
        }}
      />
      <DrawerNavigator.Screen
        name="Bộ thiết bị"
        component={DeviceHub}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="router" {...props}></MaterialIcons>
          ),
          headerTitle: 'Quản lý bộ thiết bị'
        }}
      />
      <DrawerNavigator.Screen
        name="Cảm biến"
        component={Counter}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="link" {...props}></MaterialIcons>
          ),
          headerTitle: 'Quản lý cảm biến'
        }}
      />
      <DrawerNavigator.Screen
        name="Kết nối"
        component={Home}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="device-hub" {...props}></MaterialIcons>
          ),
        }}
      />
      <DrawerNavigator.Screen
        name="Đặt lịch"
        component={Counter}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="date-range" {...props}></MaterialIcons>
          ),
        }}
      />
      <DrawerNavigator.Screen
        name="Cài đặt"
        component={Home}
        options={{
          drawerIcon: (props) => (
            <MaterialIcons name="settings" {...props}></MaterialIcons>
          ),
        }}
      />
    </DrawerNavigator.Navigator>
  );
}

export { Layout };
