import React, { useEffect, useRef, useState } from 'react';
import { Box, Divider, Grid, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import CustomMenu from '../components/CustomMenu';
import CustomBreadcrumbSection from '../components/CustomBreadcrumbSection';
import useQuery from '../hooks/useQuery';
import Username from '../components/Username';
import { createDeck, deleteDeck, getDecks } from '../services/amplifyService';
import CardListControl from '../components/CardListControl';
import { DeckCard } from '../components/DeckCard';
import { Deck } from '../models';

function DecksPage() {
  const [decks, setDecks] = useState([]);
  const scrollContainerRef = useRef(null);
  const query = useQuery();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const toast = useToast();


  useEffect(() => {
    setDecks([]);
    getDecks(searchTerm)
      .then(data => {
        setDecks(data); // Change here
      })
      .catch(error => {
        console.error(error);
      });
  }, [searchTerm]);

  const handleSearch = (search) => {
    setSearchTerm(search);
    navigate(`?num=1&search=${search}`);
  };

  const handleDeckSelection = (deck) => {
    navigate(`/deck/${deck.id}`);
  };

  const handleDeckDeletion = (deck) => {
    deleteDeck(deck).then(r => {
      toast({
        title: "You have successfully deleted a deck!",
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });
      getDecks(searchTerm)
        .then(data => {
          setDecks(data);
        })
        .catch(error => {
          console.error(error);
        });
    });
  }

  const handleTypeChange = (newType) => {
    navigate(`/${newType}`);
  };

  const onFactionSelection = (faction, deckName) => {
    createDeck(new Deck({
      "name": deckName,
      "faction": faction,
      "cards": [],
      "userId": ""
    })).then(r => {
      toast({
        title: "You have successfully created a deck!",
        status: 'success',
        position: 'top',
        duration: 5000,
        isClosable: true,
      });
      getDecks(searchTerm)
        .then(data => {
          setDecks(data);
        })
        .catch(error => {
          console.error(error);
        });
    });
  }

  return (
    <Box
      ref={scrollContainerRef}
      pt={["24px","24px", "24px", "64px"]}
      pl={["24px","24px", "28px", "132px"]}
      pr={["24px","24px", "28px", "132px"]}
      overflowY="auto"
      height="100vh"
      bg={"#E5E5E5"}
    >
      <CustomMenu title='SW-API Deck Builder' name={<Username/>} type={"decks"} handleTypeChange={handleTypeChange}/>
      <Box mb='24px' />
      <Divider borderWidth={"1px"} borderColor={"#B8B8B8"}/>
      <Box mb='24px' />
      <CustomBreadcrumbSection
        items={[
          {name: 'Decks', href: '#'},
          {name: 'Select a Deck', href: '#'}
        ]}
      />
      <Box mb='24px' />
      <CardListControl onSearch={handleSearch} type={"decks"} onFactionSelection={onFactionSelection} />
      <Box mb='24px' />
      { decks.length > 0 ? (
        <Grid
          templateColumns={"repeat(auto-fit, minmax(0px, 220px))"}
          gap={5}
          justifyItems={"start"}
        >
          {decks.map((deck, index) => (
            <DeckCard key={index} deck={deck} onClick={() => handleDeckSelection(deck)} onDelete={() => handleDeckDeletion(deck)}/>
          ))}
        </Grid>
      ) : (
        <Grid
          templateColumns={"repeat(auto-fit, minmax(0px, 220px))"}
          gap={5}
          justifyItems={"start"}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <DeckCard key={index}/>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default DecksPage;
