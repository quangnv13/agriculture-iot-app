import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Button,
  Checkbox,
  Heading,
  HStack,
  Icon,
  Input,
  KeyboardAvoidingView,
  Text,
  View,
  VStack,
} from "native-base";
import React, { FC, useState } from "react";
import { Dimensions, ImageBackground, Keyboard, Platform } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import loginBgImage from "../../../assets/login-bg.jpeg";
import { useAppDispatch } from "../../core/hooks";
import { THEME_COLOR } from "../../utils/models/theme";
import { login } from "./authSlice";

type LoginProps = {
  navigation: StackNavigationProp<any>;
};

const Login: FC<LoginProps> = (props: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const onTextUsernameChange = (value: string) => {
    setUsername(value);
  };
  const onTextPasswordChange = (value: string) => {
    setPassword(value);
  };
  const loginReducer = useAppDispatch();

  const onLoginPress = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      loginReducer(login({ username, password }));
    }, 1500);
  };

  const onRegisterPress = () => {
    props.navigation.navigate("Register");
  };
  return (
    <KeyboardAvoidingView
      flex={1}
      backgroundColor="#ffffff"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <VStack flex={1}>
        <View flex={0.9} position="relative">
          <ImageBackground
            source={loginBgImage}
            style={{
              height: Dimensions.get("window").height / 2,
            }}
          ></ImageBackground>
          <View
            flex={1}
            backgroundColor="#000000"
            opacity="0.6"
            width="100%"
            height="100%"
            position="absolute"
          ></View>
          <View
            width="100%"
            height="100%"
            flex={1}
            justifyContent="center"
            alignItems="center"
            position="absolute"
          >
            <Icon
              as={
                <MaterialCommunityIcons name="transit-connection-variant"></MaterialCommunityIcons>
              }
              color={THEME_COLOR.green[50]}
              size="100"
            ></Icon>
            <Text
              color="#ffffff"
              fontSize="40"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Agriculture
            </Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              width: "100%",
              marginTop: -50,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              backgroundColor: "#ffffff",
            }}
          >
            <View style={{ padding: 30 }}>
              <Heading style={{ color: THEME_COLOR.primary[600] }}>
                Đăng nhập
              </Heading>
              <HStack>
                <Text>Chưa có tài khoản </Text>
                <TouchableOpacity onPress={onRegisterPress}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: THEME_COLOR.primary[500],
                    }}
                  >
                    Đăng ký ngay
                  </Text>
                </TouchableOpacity>
              </HStack>
              <View mt="10">
                <Text fontSize="md">Tên tài khoản</Text>
                <Input
                  fontSize="md"
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="person" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Nhập tên tài khoản"
                  onChangeText={onTextUsernameChange}
                />
                <Text fontSize="md" mt="4">
                  Mật khẩu
                </Text>
                <Input
                  fontSize="md"
                  type="password"
                  InputLeftElement={
                    <Icon
                      as={<MaterialIcons name="lock" />}
                      size={5}
                      ml="2"
                      color="muted.400"
                    />
                  }
                  InputRightElement={
                    <Icon
                      as={<MaterialIcons name="visibility" />}
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  }
                  placeholder="Nhập mật khẩu"
                  onChangeText={onTextPasswordChange}
                />
              </View>
              <View
                mt="5"
                style={{
                  height: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                  <Checkbox value="rememberMe" isChecked={rememberMe}>
                    Nhớ tài khoản
                  </Checkbox>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{ display: "flex", justifyContent: "flex-end" }}>
                    Quên mật khẩu
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={onLoginPress} style={{width: "100%"}}>
                <Button
                  isLoading={isLoading}
                  isLoadingText="Đang đăng nhập"
                  alignSelf="center"
                  width="50%"
                  mt="5"
                >
                  Đăng nhập
                </Button>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </VStack>
    </KeyboardAvoidingView>
  );
};

export { Login };
