import {
  Box, Button,
  ButtonGroup, Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement, Menu, MenuButton, MenuList,
  Spacer, Text, useToast,
} from '@chakra-ui/react';
import SearchIcon from './icons/SearchIcon';
import CardListItem from './CardListItem';
import { useState } from 'react';
import PlusIcon from './icons/PlusIcon';
import { RedFactionIconDisabled } from './icons/RedFactionIconDisabled';
import { GreenFactionIconDisabled } from './icons/GreenFactionIconDisabled';
import { GreyFactionIconDisabled } from './icons/GreyFactionIconDisabled';
import { NoneFactionIconDisabled } from './icons/NoneFactionIconDisabled';
import { GreenFactionIcon } from './icons/GreenFactionIcon';
import { RedFactionIcon } from './icons/RedFactionIcon';
import { GreyFactionIcon } from './icons/GreyFactionIcon';
import { NoneFactionIcon } from './icons/NoneFactionIcon';

function CardListControl (props) {
  let type = props.type;
  const [search, setSearch] = useState('');
  const [isHovered, setHovered] = useState([false, false, false, false]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    if (props.onSearch) {
      props.onSearch(event.target.value);
    }
  };

  const [deckName, setDeckName] = useState('');
  const [, setSelectedFaction] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const toast = useToast();
  const handleFactionSelection = (faction) => {
    if (deckName === '') {
      toast({
        title: 'Deck Name is required',
        description: 'Please provide a deck name before selecting a faction.',
        status: 'error',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });
    } else {
      setSelectedFaction(faction);
      setMenuOpen(false);
      props.onFactionSelection(faction, deckName);
    }
  };

  return (
    <Flex>
        <InputGroup size='sm' width={["126px","224px","352px"]}>
          <Input
            placeholder='Search'
            bg={"white"}
            borderRadius={"4px"}
            textColor={"#757575"}
            fontSize={"16px"}
            value={search}
            onChange={handleSearchChange}
          />
          <InputRightElement>
            <SearchIcon/>
          </InputRightElement>
        </InputGroup>
      {type === 'decks' && (
        <Spacer/>
      )}

      {type === 'cards' && (
        <Box pr={"6px"}/>
      )}

      {type === 'cards' && (
          <ButtonGroup>
            <CardListItem text='A to Z'/>
            <CardListItem text='Youngest' isSelected={true} />
            <CardListItem text='Eldest' />
          </ButtonGroup>
      )}
      {type === 'decks' && (
          <ButtonGroup>
            <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
              <MenuButton
                bg='white'
                width={"36px"}
                height={"32px"}
                onClick={() => setMenuOpen(!menuOpen)}
                boxShadow={"0px 2px 2px rgba(0, 0, 0, 0.25)"}
                borderRadius={"4px"}
              >
               <Center>
                 <PlusIcon/>
               </Center>
              </MenuButton>
              <MenuList
                border={"1px solid #B8B8B8"}
              >
                <Flex
                  direction={"column"}
                  >
                  <Flex
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"start"}
                    pl={"16px"}
                    pt={"16px"}
                    pr={"16px"}
                    width={"100%"}
                  >
                    <Text
                      fontSize={"14px"}
                      textColor={"#3B3B3B"}
                    >
                      Faction
                    </Text>
                    <Box
                      pr={"16px"}
                    />
                    <ButtonGroup>
                      <Button p={1}
                              onMouseEnter={() => setHovered([true, false, false, false])}
                              onMouseLeave={() => setHovered([false, false, false, false])}
                              onClick={() => handleFactionSelection('RED')}
                      >
                        {isHovered[0] ? <RedFactionIcon /> : <RedFactionIconDisabled />}
                      </Button>
                      <Button p={1}
                              onMouseEnter={() => setHovered([false, true, false, false])}
                              onMouseLeave={() => setHovered([false, false, false, false])}
                              onClick={() => handleFactionSelection('GREEN')}
                      >
                        {isHovered[1] ? <GreenFactionIcon /> : <GreenFactionIconDisabled />}
                      </Button>
                      <Button p={1}
                              onMouseEnter={() => setHovered([false, false, true, false])}
                              onMouseLeave={() => setHovered([false, false, false, false])}
                              onClick={() => handleFactionSelection('GREY')}
                      >
                        {isHovered[2] ? <GreyFactionIcon /> : <GreyFactionIconDisabled />}
                      </Button>
                      <Button p={1}
                              onMouseEnter={() => setHovered([false, false, false, true])}
                              onMouseLeave={() => setHovered([false, false, false, false])}
                              onClick={() => handleFactionSelection('NONE')}
                      >
                        {isHovered[3] ? <NoneFactionIcon /> : <NoneFactionIconDisabled />}
                      </Button>
                    </ButtonGroup>
                  </Flex>

                  <Flex
                    pl={"16px"}
                    pt={"16px"}
                    pb={"16px"}
                    pr={"21px"}
                  >
                    <Input placeholder={"Deck Name"} variant='flushed' value={deckName} onChange={(e) => setDeckName(e.target.value)} />
                  </Flex>
                </Flex>
              </MenuList>
            </Menu>
          </ButtonGroup>
        )}
    </Flex>
  )
}

export default CardListControl;