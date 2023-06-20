import { Button } from '@chakra-ui/react';

function CardListItem(props) {
  let isSelected = props.isSelected;
  return (
    <Button
      variant="outline"
      bg={isSelected ? "#FFFFFF" : "#E0E0E0"}
      textColor={"#3B3B3B"}
      fontSize={"16px"}
      fontWeight={"400"}
      borderRadius={"4px"}
      height={"32px"}
      border={
        isSelected
          ? "1px solid #B8B8B8"
          : "none"
      }
    >
      {props.text}
    </Button>
  )
}


export default CardListItem;