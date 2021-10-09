import { MaterialIcons } from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerHeaderProps,
  DrawerItem,
  DrawerItemList,
  DrawerNavigationOptions,
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
} from "native-base";
import React from "react";
import offsetImage from "../../../assets/offset-bg.jpg";
import { THEME_COLOR } from "../../utils/models/theme";
import { makeid } from "../../utils/utils";
import Counter from "../counter/Counter";
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
            Bảng theo dõi thiết bị
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
  return (
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
        <Heading color={THEME_COLOR.primary["500"]}>IOT Agriculture</Heading>
        <Divider mt="3" w="100%" />
      </Center>
      {/* <DrawerItemList {...props}>
        {props.state.routes.map((route) => (
          <DrawerItem
            activeTintColor="red"
            activeBackgroundColor="red"
            key={makeid(15)}
            label={route.name}
            onPress={() => props.navigation.navigate(route.name)}
          >
            <Text mx={1} color={THEME_COLOR.coolGray["600"]} fontSize="18">
              {route.name}
            </Text>
          </DrawerItem>
        ))}
      </DrawerItemList> */}
      <Divider mt="3" w="100%" />
    </DrawerContentScrollView>
  );
}

function Layout() {
  const customDrawerContent = (props: DrawerContentComponentProps) => (
    <OffsetMenuBar {...props} />
  );

  const headerComponent = (props: DrawerHeaderProps) => <Topbar {...props} />;

  const screenOptions: DrawerNavigationOptions = {
    header: headerComponent,
    drawerActiveBackgroundColor: THEME_COLOR.primary[500],
    drawerActiveTintColor: THEME_COLOR.white,
  };
  return (
    <DrawerNavigator.Navigator
      screenOptions={screenOptions}
      initialRouteName="Home"
      drawerContent={customDrawerContent}
    >
      <DrawerNavigator.Screen name="Home" component={Home} />
      <DrawerNavigator.Screen name="Counter" component={Counter} />
      <DrawerNavigator.Screen name="Home1" component={Home} />
      <DrawerNavigator.Screen name="Counter2" component={Counter} />
      <DrawerNavigator.Screen name="Home3" component={Home} />
      <DrawerNavigator.Screen name="Counter4" component={Counter} />
      <DrawerNavigator.Screen name="Home5" component={Home} />
      <DrawerNavigator.Screen name="Counter6" component={Counter} />
    </DrawerNavigator.Navigator>
  );
}

export { Layout };
