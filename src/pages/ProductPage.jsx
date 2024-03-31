import React from "react";
import { useParams } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <Box>
      <Heading>Product {id}</Heading>
      {}
    </Box>
  );
};

export default ProductPage;
