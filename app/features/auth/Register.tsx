import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Button,
  Checkbox,
  Heading,
  Icon,
  Input,
  ScrollView,
  Text,
  View,
} from "native-base";
import React, { FC, useState } from "react";
import { Dimensions, ImageBackground } from "react-native";
import loginBgImage from "../../../assets/login-bg.jpeg";
import { useAppDispatch } from "../../core/hooks";
import { THEME_COLOR } from "../../utils/models/theme";
import { register } from "./authSlice";

type RegisterProps = {
  navigation: StackNavigationProp<any>;
};

const Register: FC<RegisterProps> = (props: RegisterProps) => {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const onTextUsernameChange = (value: string) => {
    setUsername(value);
  };
  const onTextPasswordChange = (value: string) => {
    setPassword(value);
  };
  const loginReducer = useAppDispatch();

  const onLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      loginReducer(register({ username, password }));
    }, 1500);
  };
  return (
    <ScrollView
      flex={1}
      backgroundColor="#ffffff"
      showsVerticalScrollIndicator={false}
    >
      <View flex={1} position="relative">
        <ImageBackground
          source={loginBgImage}
          style={{
            height: Dimensions.get("window").height / 2.5,
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
            Smart IOT
          </Text>
        </View>
      </View>
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
            Đăng ký tài khoản mới
          </Heading>
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
            <Checkbox value="rememberMe" isChecked>
              Nhớ tài khoản
            </Checkbox>
            <Text style={{ display: "flex", justifyContent: "flex-end" }}>
              Quên mật khẩu
            </Text>
          </View>
          <Button
            isLoading={isLoading}
            isLoadingText="Đang đăng nhập"
            alignSelf="center"
            width="50%"
            mt="5"
            onPress={onLogin}
          >
            Đăng nhập
          </Button>
          <Button
            isLoading={isLoading}
            isLoadingText="Đang đăng nhập"
            alignSelf="center"
            width="50%"
            mt="5"
            onPress={onLogin}
          >
            Quay lại đăng nhập
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export { Register };
