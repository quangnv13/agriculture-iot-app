import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Button,
  FlatList,
  FormControl,
  Heading,
  HStack,
  IconButton,
  Input,
  Modal,
  Select,
  View,
  Text,
} from "native-base";
import React, { useState } from "react";
import { ListRenderItemInfo, TouchableOpacity } from "react-native";
import { toastr } from "../../services/Toast.service";
import { THEME_COLOR } from "../../utils/models/theme";
import { makeid } from "../../utils/utils";
import { ISensor } from "./sensorSlice";

let sensors: ISensor[] = [];

sensors = [
  {
    id: 1,
    name: "Cảm biến ánh sáng 1",
    unit: "lux",
    token: "LIGHT_SENSOR_0001",
  },
  {
    id: 2,
    name: "Cảm biến độ ẩm 1",
    unit: "%",
    token: "D_SENSOR_0001",
  },
  {
    id: 3,
    name: "Cảm biến nhiệt độ 1",
    unit: "°C",
    token: "TEMP_SENSOR_0001",
  },
  {
    id: 4,
    name: "Cảm biến độ ẩm đất 1",
    unit: "%",
    token: "C_SENSOR_0001",
  },
  {
    id: 5,
    name: "Cảm biến nồng độ PH 1",
    unit: "%",
    token: "PH_SENSOR_0001",
  },
  {
    id: 6,
    name: "Cảm biến nồng độ đạm 1",
    unit: "mg/l",
    token: "NH_SENSOR_0001",
  },
  {
    id: 7,
    name: "Cảm biến ánh sáng 2",
    unit: "lux",
    token: "LIGHT_SENSOR_0002",
  },
  {
    id: 8,
    name: "Cảm biến độ ẩm 2",
    unit: "%",
    token: "D_SENSOR_0002",
  },
  {
    id: 9,
    name: "Cảm biến nhiệt độ 2",
    unit: "°C",
    token: "TEMP_SENSOR_0002",
  },
  {
    id: 10,
    name: "Cảm biến độ ẩm đất 2",
    unit: "%",
    token: "C_SENSOR_0002",
  },
  {
    id: 11,
    name: "Cảm biến nồng độ PH 2",
    unit: "lux",
    token: "PH_SENSOR_0002",
  },
  {
    id: 12,
    name: "Cảm biến nồng độ đạm 2",
    unit: "mg/l",
    token: "NH_SENSOR_0002",
  },
];

const SensorItems = () => (
  <FlatList
    data={sensors}
    renderItem={({ item }: ListRenderItemInfo<ISensor>) => (
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
            <Text flex={1} fontWeight="bold" color="primary.600" fontSize={15}>
              {item.name}
            </Text>
            <Text bold>Đơn vị: {item.unit}</Text>
          </HStack>
          <HStack>
            <Text flex={1}>{item.token}</Text>
            <MaterialIcons
              size={20}
              color={THEME_COLOR.gray[800]}
              name="online-prediction"
            ></MaterialIcons>
          </HStack>
        </TouchableOpacity>
      </Box>
    )}
    keyExtractor={(item) => item.id.toString()}
  />
);

const Sensor = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <>
      <Box flex={1} p={1}>
        <View
          onTouchEnd={() => setIsShowModal(true)}
          style={{ position: "absolute", bottom: 40, right: 20, zIndex: 1 }}
        >
          <TouchableOpacity>
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
        <SensorItems></SensorItems>
      </Box>
      <Modal
        isOpen={isShowModal}
        onClose={() => setIsShowModal(false)}
        size="xl"
      >
        <Modal.Content maxWidth="95%">
          <Modal.CloseButton />
          <Modal.Header>Thêm mới cảm biến</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Tên bộ thiết bị</FormControl.Label>
              <Input placeholder="Nhập tên bộ thiết bị" />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Chọn đơn vị cảm biến</FormControl.Label>
              <Select placeholder="Chọn đơn vị">
                <Select.Item value="0" label="lux"></Select.Item>
                <Select.Item value="1" label="°C"></Select.Item>
                <Select.Item value="2" label="%"></Select.Item>
                <Select.Item value="3" label="gram"></Select.Item>
                <Select.Item value="4" label="mg/l"></Select.Item>
                <Select.Item value="5" label="°F"></Select.Item>
              </Select>
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Mã cảm biến</FormControl.Label>
              <Input placeholder="Nhập mã cảm biến" />
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
                  toastr.showToast("Thêm mới cảm biến thành công", "success");
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

export { Sensor };
