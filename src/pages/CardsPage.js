import React, { useEffect, useRef, useState } from 'react';
import { Box, Divider, Grid, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import CustomMenu from '../components/CustomMenu';
import CustomBreadcrumbSection from '../components/CustomBreadcrumbSection';
import CardListControl from '../components/CardListControl';
import PersonCard from '../components/PersonCard';
import Pagination from '../components/Pagination';
import { getPeople } from '../services/starWarsService';
import useQuery from '../hooks/useQuery';
import scrollToTop from '../hooks/scrollToTop';
import Username from '../components/Username';
import { addToDeck, getDecks } from '../services/amplifyService';

function CardsPage() {
  const [people, setPeople] = useState([]);
  const scrollContainerRef = useRef(null);
  const query = useQuery();
  const [currentPage, setCurrentPage] = useState(Number(query.get('num')) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [decks, setDecks] = useState([]);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    setDecks([]);
    getDecks("")
      .then(data => {
        setDecks(data); // Change here
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setPeople([]);
    getPeople(currentPage, searchTerm)
      .then(data => {
        setPeople(data.results);
        setTotalPages(Math.ceil(data.count / 10));
      })
      .catch(error => {
        console.error(error);
      });
  }, [currentPage, searchTerm]);

  const onPageChange = (page) => {
    setCurrentPage(page);
    navigate(`?num=${page}&search=${searchTerm}`);
    scrollToTop(scrollContainerRef);
  };

  const handleSearch = (search) => {
    setSearchTerm(search);
    setCurrentPage(1);
    navigate(`?num=1&search=${search}`);
  };

  const handlePersonSelection = (person) => {
    const id = person.url.split('/')[5];
    navigate(`/person/${id}`);
  };

  const handleTypeChange = (newType) => {
    navigate(`/${newType}`);
  };

  const addCardToDeck = (deck, personId) => {
    let id = Number(personId.split('/')[5]);

    addToDeck(deck, id)
      .then(_ => {
        toast({
          title: "You have successfully added a card to a deck!",
          status: 'success',
          position: 'top',
          duration: 5000,
          isClosable: true,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

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
      <CustomMenu title='SW-API Deck Builder' name={<Username/>} type={"cards"} handleTypeChange={handleTypeChange}/>
      <Box mb='24px' />
      <Divider borderWidth={"1px"} borderColor={"#B8B8B8"}/>
      <Box mb='24px' />
      <CustomBreadcrumbSection
        items={[
          {name: 'All Cards', href: '#'},
          {name: 'Select a Card', href: '#'}
        ]}
      />
      <Box mb='24px' />
      <CardListControl onSearch={handleSearch} type={"cards"} />
      <Box mb='24px' />
      { people.length > 0 ? (
        <Grid
          templateColumns={"repeat(auto-fit, minmax(0px, 220px))"}
          gap={5}
          justifyItems={["start", "center", "start", "start"]}
        >
          {people.map((person, index) => (
            <PersonCard key={index} person={person} onClick={handlePersonSelection} addCardToDeck={addCardToDeck} decks={decks}/>
          ))}
        </Grid>
      ) : (
        <Grid
          templateColumns={"repeat(auto-fit, minmax(0px, 220px))"}
          gap={5}
          justifyItems={["start", "center", "start", "start"]}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <PersonCard key={index}/>
          ))}
        </Grid>
      )}
      <Box mb='12px' />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      <Box mb='24px' />
    </Box>
  );
}

export default CardsPage;
