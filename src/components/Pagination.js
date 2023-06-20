import { Box, Button } from "@chakra-ui/react";
import BackArrow from './icons/BackArrow';
import ForwardArrow from './icons/ForwardArrow';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = pagesArray.slice(currentPage - 1, currentPage + 4);

  return (
    <Box alignItems={"center"} pt={"10px"}>
      <Button
        onClick={currentPage === 1 ? () => onPageChange(1) : () => onPageChange(currentPage - 1)}
        borderRadius={"4px"}
        border={"1px"}
        fontSize={"16px"}
        borderColor={"#B8B8B8"}
        bg={"transparent"}
        mr="1"
      >
        <BackArrow />
      </Button>


      {visiblePages.map((pageNumber) => (
        <Button
          key={pageNumber}
          variant='outline'
          onClick={() => onPageChange(pageNumber)}
          borderRadius={"4px"}
          border={"1px"}
          fontSize={"16px"}
          borderColor={"#B8B8B8"}
          bg={pageNumber === currentPage ? "white" : "transparent"}
          color={pageNumber === currentPage ? "#3B3B3B" : "#969696"}
          mr="1"
        >
          {pageNumber}
        </Button>
      ))}

      <Button
        onClick={currentPage === totalPages ? () => onPageChange(totalPages) : () => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        borderRadius={"4px"}
        border={"1px"}
        fontSize={"16px"}
        borderColor={"#B8B8B8"}
        bg={"white"}
      >
        <ForwardArrow />
      </Button>
    </Box>
  );
};

export default Pagination;
