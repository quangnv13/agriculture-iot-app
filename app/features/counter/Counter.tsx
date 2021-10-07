import React, { useState } from "react";
import { Button, Card, Container, Input } from "native-base";
import { useAppDispatch } from "../../core/hooks";
import { decrease, increase, increaseByAmount } from "./counterSlice";

const Counter = () => {
  const [amount, setAmount] = useState("");
  const appDispatch = useAppDispatch();
  const increaseValue = () => {
    appDispatch(increase());
  };
  const decreaseValue = () => {
    appDispatch(decrease());
  };
  const increaseValueByAmount = () => {
    console.log(Number(amount) === NaN ? 2 : Number(amount));

    const value = Number(amount) === NaN ? 2 : Number(amount);
    appDispatch(increaseByAmount(value));
  };
  const onTextAmountChange = (value: string) => {
    setAmount(value);
  };
  return (
    <Container width="100%">
      <Button width="100%" marginTop="1" onTouchEnd={increaseValue}>
        Increase
      </Button>
      <Button width="100%" marginTop="1" onTouchEnd={decreaseValue}>
        Decrease
      </Button>
      <Card marginTop="1" width="100%" maxWidth="100%">
        <Input type="number" onChangeText={onTextAmountChange}></Input>
        <Button onTouchEnd={increaseValueByAmount}>Increase by amount</Button>
      </Card>
    </Container>
  );
};

export default Counter;
