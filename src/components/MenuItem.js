import { Button } from '@chakra-ui/react';

function MenuItem(props) {
  let isSecondaryStyle = props.isSecondaryStyle;
  let isSelected = props.isSelected;
  return (
    <Button
      variant="outline"
      bg={isSecondaryStyle ? "transparent" : isSelected ? "#FFFFFF" : "#E0E0E0" }
      textColor={"#3B3B3B"}
      fontSize={"16px"}
      fontWeight={"400"}
      borderRadius={"4px"}
      height={"32px"}
      minW={"130px"}
      onClick={props.onClick}
      border={
        isSecondaryStyle
          ? "1px solid #B8B8B8"
          : "none"
      }

      leftIcon={props.icon}
    >
      {props.text}
    </Button>
  )
}


export default MenuItem;