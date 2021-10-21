import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  Input,
  Modal,
  Select,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native-gesture-handler";
import { useAppDispatch } from "../../core/hooks";
import { setTopbarTitle } from "../layout/layoutSlice";
import { LocaleConfig } from "react-native-calendars";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";
import { THEME_COLOR } from "../../utils/models/theme";

const calendarLocaleConfig = () => {
  const moment_locale = moment.localeData("vi");

  return {
    monthNames: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
    monthNamesShort: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
    dayNames: ["Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7", "CN"],
    dayNamesShort: ["Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7", "CN"],
  };
};

LocaleConfig.locales["vi"] = calendarLocaleConfig();
LocaleConfig.defaultLocale = "vi";

type CalendarScreenProps = {};

const CalendarScreen = (props: CalendarScreenProps) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTopbarTitle({ topbarTitle: "Bộ thiết bị" }));
  });
  return (
    <>
      <Box flex={1} p={1} bg={THEME_COLOR.white}>
        <Calendar
          onDayPress={(day) => {
            setIsShowModal(true);
          }}
          style={{
            borderBottomColor: THEME_COLOR.gray[200],
            borderBottomWidth: 1,
          }}
        />
        <ScrollView
          style={{
            paddingTop: 5,
          }}
        >
          <VStack
            borderWidth="1"
            p={3}
            my={1}
            borderColor={THEME_COLOR.gray[300]}
            backgroundColor={THEME_COLOR.white}
            borderRadius="10"
          >
            <HStack display="flex">
              <MaterialIcons
                size={20}
                color={THEME_COLOR.green[500]}
                name="autorenew"
              ></MaterialIcons>
              <Text flex={1}>Tự động tưới 1000L nước</Text>
              <Text>11:15</Text>
            </HStack>
          </VStack>

          <VStack
            borderWidth="1"
            p={3}
            my={1}
            borderColor={THEME_COLOR.gray[300]}
            backgroundColor={THEME_COLOR.white}
            borderRadius="10"
          >
            <HStack display="flex">
              <MaterialIcons
                size={20}
                color={THEME_COLOR.yellow[500]}
                name="expand"
              ></MaterialIcons>
              <Text flex={1}>Điều chỉnh độ sáng về 1200 lux</Text>
              <Text>20:15</Text>
            </HStack>
          </VStack>

          <VStack
            borderWidth="1"
            p={3}
            my={1}
            borderColor={THEME_COLOR.gray[300]}
            backgroundColor={THEME_COLOR.white}
            borderRadius="10"
          >
            <HStack display="flex">
              <MaterialIcons
                size={20}
                color={THEME_COLOR.amber[700]}
                name="line-style"
              ></MaterialIcons>
              <Text flex={1}>Tự động bón 30Kg phân</Text>
              <Text>20:15</Text>
            </HStack>
          </VStack>

          <VStack
            borderWidth="1"
            p={3}
            my={1}
            borderColor={THEME_COLOR.gray[300]}
            backgroundColor={THEME_COLOR.white}
            borderRadius="10"
          >
            <HStack display="flex">
              <MaterialIcons
                size={20}
                color={THEME_COLOR.yellow[500]}
                name="expand"
              ></MaterialIcons>
              <Text flex={1}>Điều chỉnh độ sáng về 1200 lux</Text>
              <Text>20:15</Text>
            </HStack>
          </VStack>

          <VStack
            borderWidth="1"
            p={3}
            my={1}
            borderColor={THEME_COLOR.gray[300]}
            backgroundColor={THEME_COLOR.white}
            borderRadius="10"
          >
            <HStack display="flex">
              <MaterialIcons
                size={20}
                color={THEME_COLOR.yellow[500]}
                name="expand"
              ></MaterialIcons>
              <Text flex={1}>Điều chỉnh độ sáng về 1200 lux</Text>
              <Text>20:15</Text>
            </HStack>
          </VStack>

          <VStack
            borderWidth="1"
            p={3}
            my={1}
            borderColor={THEME_COLOR.gray[300]}
            backgroundColor={THEME_COLOR.white}
            borderRadius="10"
          >
            <HStack display="flex">
              <MaterialIcons
                size={20}
                color={THEME_COLOR.yellow[500]}
                name="expand"
              ></MaterialIcons>
              <Text flex={1}>Điều chỉnh độ sáng về 1200 lux</Text>
              <Text>20:15</Text>
            </HStack>
          </VStack>
        </ScrollView>
      </Box>
      <Modal
        isOpen={isShowModal}
        onClose={() => setIsShowModal(false)}
        size="xl"
      >
        <Modal.Content maxWidth="95%">
          <Modal.CloseButton />
          <Modal.Header>Thêm lịch tự động</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Ngày</FormControl.Label>
              <Input value="21/10/2021" />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Thao tác</FormControl.Label>
              <Select placeholder="Chọn thao tác">
                <Select.Item label="Tăng độ ẩm" value="humidity"></Select.Item>
                <Select.Item label="Giảm độ ẩm" value="0humidity"></Select.Item>
                <Select.Item
                  label="Tăng ánh sáng"
                  value="in-crease-humidity"
                ></Select.Item>
                <Select.Item
                  label="Giảm ánh sáng"
                  value="2humidity"
                ></Select.Item>
                <Select.Item label="Tưới nước" value="3humidity"></Select.Item>
                <Select.Item label="Bón phân" value="4humidity"></Select.Item>
                <Select.Item
                  label="Sử dụng thuốc"
                  value="5humidity"
                ></Select.Item>
              </Select>
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Giá trị thực hiện</FormControl.Label>
              <Input placeholder="Nhập giá trị" />
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

export { CalendarScreen };
