import { Box, Button, Center, Divider, Flex, Skeleton, Spacer, Text, useToast } from '@chakra-ui/react';
import AllCardsIcon from './icons/AllCardsIcon';
import FemaleIcon from './icons/FemaleIcon';
import PlanetIcon from './icons/PlanetIcon';
import VehicleIcon from './icons/VehicleIcon';
import StarshipsIcon from './icons/StarshipsIcon';
import { Menu, MenuButton, MenuList } from '@chakra-ui/react';
import PlusIcon from './icons/PlusIcon';
import MaleIcon from './icons/MaleIcon';
import MenuItem from './MenuItem';

function PersonCard (props) {
  const numVehicles = props.person?.vehicles?.length || 0;
  const numStarships = props.person?.starships?.length || 0;

  const handleDeckSelection = (deckId) => {
    props.addCardToDeck(deckId, props.person.url);
  };

  return (
    <Box
      width={["358px","216px","216px"]}
      borderRadius={"8px"}
      bg={"white"}>
      {!props.person ? (
          <Skeleton height="308px" width="100%" />
        ) : (
          <Box>
      <Flex
        width={["358px","216px","216px"]}
        height={"98px"}
        borderRadius={"8px 8px 0px 0px"}
        bg={"#969696"}
        pl={"16px"}
        pt={"16px"}
        pb={"16px"}
        pr={"16px"}
        direction={"column"}
      >
       <Flex>
         <AllCardsIcon color = {"white"} />
         <Spacer/>
         <Menu closeOnSelect={false}>
           <MenuButton
             bg='white'
             boxShadow={"0px 2px 2px rgba(0, 0, 0, 0.25)"}
             height={"32px"}
              width={"36px"}
             borderRadius={"4px"}
           >
             <Center>
               <PlusIcon/>
             </Center>
           </MenuButton>
           <MenuList minWidth='216px' minHeight='171px' bg={"#EDEDED"} p={"8px"}>
             <Text
               textColor={"#969696"}
               fontSize={"12px"}
             >Select a Deck</Text>
             <Divider borderWidth={"1px"}borderColor={"#B8B8B8"} mt={"4px"} mb={"10px"}/>
             {props.decks.map(deck => (
               <Box p={1} bg={"white"} fontSize={"14px"}
                    borderRadius={"4px"} m={1} onClick={() => handleDeckSelection(deck)}>{deck.name}</Box>
             ))}
           </MenuList>
         </Menu>
       </Flex>
        <Spacer/>
        <Text textColor={"white"} fontSize={"20px"} isTruncated={true}>{props.person.name}</Text>
      </Flex>

            <Box
              onClick={() => props.onClick(props.person)}
              cursor="pointer"
            >

      <Flex
        pl={"16px"}
        pt={"16px"}
        pb={"8px"}
        pr={"16px"}
        justifyContent={"center"}
        alignItems={"center"}
        >
        {
          props.person.gender === "male" ? (
            <MaleIcon/>) : props.person.gender === "female" ? (
              <FemaleIcon/>) : (<Box/>)
        }
        <Box pl={"4px"}/>
        <Text fontSize={"14px"} textColor={"#3B3B3B"}>{props.person.birth_year === "unknown" ? "N/A": props.person.birth_year}</Text>
        <Spacer/>
        <Text fontSize={"14px"} textColor={"#3B3B3B"}>Species</Text>
      </Flex>

      <Box
        pl={"16px"}
        pr={"16px"}
        pb={"16px"}
      >
        <Divider borderWidth={"1px"}borderColor={"#B8B8B8"}/>
      </Box>

      <Flex
        ml={"16px"}
        mr={"16px"}
        pt={"8px"}
        pb={"8px"}
        pl={"8px"}
        pr={"8px"}
        bg={"#EDEDED"}
        borderRadius={"4px"}
        alignItems={"center"}
        >
        <PlanetIcon/>
        <Box pl={"4px"}/>
        <Text fontSize={"10px"} textColor={"#757575"}>HOMEWORLD</Text>
        <Spacer/>
        <Text fontSize={"14px"} textColor={"#3B3B3B"} isTruncated={true}>{props.person.homeworldDetails.name}</Text>
      </Flex>

      <Box
        pt={"8px"}
        />

      <Flex
        ml={"16px"}
        mr={"16px"}
        pt={"8px"}
        pb={"8px"}
        pl={"8px"}
        pr={"8px"}
        bg={"#EDEDED"}
        borderRadius={"4px"}
        alignItems={"center"}
      >
        <VehicleIcon/>
        <Box pl={"4px"}/>
        <Text fontSize={"10px"} textColor={"#757575"}>VEHICLES</Text>
        <Spacer/>
        <Text fontSize={"14px"} textColor={"#3B3B3B"}>{numVehicles}</Text>
      </Flex>

      <Box
        pt={"8px"}
      />

      <Flex
        ml={"16px"}
        mr={"16px"}
        pt={"8px"}
        pb={"8px"}
        pl={"8px"}
        pr={"8px"}
        bg={"#EDEDED"}
        borderRadius={"4px"}
        alignItems={"center"}
      >
        <StarshipsIcon/>
        <Box pl={"4px"}/>
        <Text fontSize={"10px"} textColor={"#757575"}>STARSHPS</Text>
        <Spacer/>
        <Text fontSize={"14px"} textColor={"#3B3B3B"}>{numStarships}</Text>
      </Flex>

      <Box
        pt={"20px"}
      />
            </Box>

          </Box>
        )}
    </Box>
  )
}

export default PersonCard;