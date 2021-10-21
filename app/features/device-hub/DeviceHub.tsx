import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Button,
  Checkbox,
  FlatList,
  FormControl,
  Heading,
  HStack,
  IconButton,
  Input,
  List,
  Modal,
  Select,
  Text,
  View,
} from "native-base";
import React, { useEffect, useState } from "react";
import { ListRenderItemInfo } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAppDispatch } from "../../core/hooks";
import { toastr } from "../../services/Toast.service";
import { makeid } from "../../utils/utils";
import { setTopbarTitle } from "../layout/layoutSlice";
import { IDeviceHub } from "./deviceHubSlice";

let deviceHubs: IDeviceHub[] = [];

for (let i = 0; i < 9; i++) {
  deviceHubs = [
    ...deviceHubs,
    {
      id: i + 1,
      name: `Bộ thiết bị ${i + 1}`,
      sensors: Math.floor(Math.random() * 9) + 1,
      upTime: `${Math.floor(Math.random() * 100) + 1} giờ`,
    },
  ];
}

const DeviceHubItems = () => (
  <FlatList
    data={deviceHubs}
    renderItem={({ item }: ListRenderItemInfo<IDeviceHub>) => (
      <Box
        key={makeid(15)}
        borderTopWidth="1"
        borderBottomWidth="1"
        borderColor="coolGray.200"
        pl="4"
        pr="5"
        py="2"
      >
        <TouchableOpacity>
          <HStack width="100%" space={5} justifyContent="space-between">
            <Text fontWeight="bold" color="primary.600" fontSize={15}>
              {item.name}
            </Text>
            <Text flex={1} bold>
              {item.sensors + " cảm biến"}
            </Text>
            <Text flex={1.5}>Hoạt động: {item.upTime}</Text>
          </HStack>
        </TouchableOpacity>
      </Box>
    )}
    keyExtractor={(item) => item.id.toString()}
  />
);

type DeviceHubProps = {};

const DeviceHub = (props: DeviceHubProps) => {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <>
      <Box flex={1} p={1}>
        <View
          style={{ position: "absolute", bottom: 40, right: 20, zIndex: 1 }}
        >
          <TouchableOpacity onPress={() => setIsShowModal(true)}>
            <IconButton
              borderRadius="full"
              bgColor="primary.500"
              icon={
                <MaterialIcons
                  color="white"
                  size={40}
                  name="add"
                ></MaterialIcons>
              }
            />
          </TouchableOpacity>
        </View>
        <HStack alignItems="center"></HStack>
        <Heading fontSize={16} p="2" pb="3">
          Danh sách bộ thiết bị
        </Heading>
        <DeviceHubItems></DeviceHubItems>
      </Box>
      <Modal
        isOpen={isShowModal}
        onClose={() => setIsShowModal(false)}
        size="xl"
      >
        <Modal.Content maxWidth="95%">
          <Modal.CloseButton />
          <Modal.Header>Thêm mới bộ thiết bị</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Tên bộ thiết bị</FormControl.Label>
              <Input placeholder="Nhập tên bộ thiết bị" />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Chọn cảm biến</FormControl.Label>
              <List>
                <List.Item>
                  <Checkbox value="0">Cảm biến ánh sáng</Checkbox>
                </List.Item>
                <List.Item>
                  <Checkbox value="1">Cảm biến nhiệt độ</Checkbox>
                </List.Item>
                <List.Item>
                  <Checkbox value="1">Cảm biến độ ẩm</Checkbox>
                </List.Item>
                <List.Item>
                  <Checkbox value="1">Cảm biến độ PH</Checkbox>
                </List.Item>
                <List.Item>
                  <Checkbox value="1">Cảm biến độ mặn</Checkbox>
                </List.Item>
                <List.Item>
                  <Checkbox value="1">Cảm biến Oxi</Checkbox>
                </List.Item>
                <List.Item>
                  <Checkbox value="1">Cảm biến nồng độ đạm+</Checkbox>
                </List.Item>
              </List>
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Mã bộ thiết bị</FormControl.Label>
              <Input placeholder="Nhập mã bộ thiết bị" />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setIsShowModal(false);
                }}
              >
                Hủy
              </Button>
              <Button
                onPress={() => {
                  setIsShowModal(false);
                  toastr.showToast(
                    "Thêm mới bộ thiết bị thành công",
                    "success"
                  );
                }}
              >
                Lưu
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export { DeviceHub };
