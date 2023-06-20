import { ButtonGroup, Flex, Menu, Text, useMediaQuery } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import AllCardsIcon from './icons/AllCardsIcon';
import DecksIcon from './icons/DecksIcon';
import SignOutMenuItem from './SignOutMenuItem';

function CustomMenu({ type, handleTypeChange, name }) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Menu>
      <Flex justifyContent="space-between" alignItems="center">
        <ButtonGroup variant='outline' spacing='2'>
          <MenuItem
            text='All Cards'
            isSelected={type === 'cards'}
            icon={<AllCardsIcon color = {"#3B3B3B"}/>}
            onClick={() => handleTypeChange('cards')}
          />
          <MenuItem
            text='Decks'
            isSelected={type === 'decks'}
            icon={<DecksIcon/>}
            onClick={() => handleTypeChange('decks')}
          />
        </ButtonGroup>
        {isLargerThan768 && (
          <Text fontSize={"20px"} textColor={"#757575"}>
            SW-API Deck Builder
          </Text>
        )}
        <SignOutMenuItem name={name}/>
      </Flex>
    </Menu>
  );
}

export default CustomMenu;
