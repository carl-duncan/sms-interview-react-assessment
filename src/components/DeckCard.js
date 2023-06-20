import { Box, Button, Center, Flex, Skeleton, Spacer, Text } from '@chakra-ui/react';
import { GarbageIcon } from './icons/GarbageIcon';
import { StackIcon } from './icons/StackIcon';

export function DeckCard (props) {
  let color = '#969696';


  if (props.deck?.faction === "RED") {
    color = "#C53030";
  }

  if (props.deck?.faction === "GREEN") {
    color = "#2F855A";
  }

  if (props.deck?.faction === "GREY") {
    color = "#3B3B3B";
  }

  if (props.deck?.faction === "NONE") {
    color = "#969696";
  }

  return (
    <Box
      width={["358px","216px","216px"]}
      borderRadius={"8px"}
      bg={"white"}>
      {!props.deck ? (
      <Skeleton height="180px" width="100%" />
      ) : (
      <Box>
      <Flex
        width={["358px","216px","216px"]}
        height={"98px"}
        borderRadius={"8px 8px 0px 0px"}
        bg={color}
        pl={"16px"}
        pt={"16px"}
        pb={"16px"}
        pr={"16px"}
        direction={"column"}
      >
        <Box>
          <Flex zIndex="1" position="absolute"
                width={["330px","190px","190px"]}
          >
            <StackIcon color = {"white"} />
            <Spacer/>
              <Button
                bg='blackAlpha.500'
                height={"32px"}
                width={"36px"}
                onClick={() => props.onDelete(props.deck)}
                borderRadius={"4px"}
              >
                <Center>
                  <GarbageIcon/>
                </Center>
              </Button>
          </Flex>
        </Box>
        <Spacer/>
        <Text textColor={"white"} fontSize={"20px"} isTruncated={true}>{props.deck.name}</Text>
      </Flex>
      <Flex
        pl={"16px"}
        pt={"16px"}
        pb={"8px"}
        pr={"16px"}
        direction={"row"}
        onClick={() => props.onClick(props.deck)}
        cursor="pointer"
      >
        <Text
          fontSize={"48px"}
          textColor={"#3B3B3B"}
          fontWeight={"light"}
        >{props.deck.cards.length}</Text>
        <Spacer/>
        <Text
          fontSize={"12px"}
          fontWeight={"medium"}
          textColor={"#969696"}
        >total cards</Text>
      </Flex>
      </Box>
        )}
    </Box>
  )
}