import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Grid, Image, Flex, Spacer, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const products = [
  { id: 1, name: "Product 1", price: 10.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcxMTg2MjUyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Product 2", price: 15.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9kdWN0fGVufDB8fHx8MTcxMTg2MjUyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Product 3", price: 7.85, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxwcm9kdWN0fGVufDB8fHx8MTcxMTg2MjUyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Product 4", price: 22.5, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxwcm9kdWN0fGVufDB8fHx8MTcxMTg2MjUyMnww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Perform search with searchTerm
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <Box>
      {/* Header */}
      <Flex bg="blue.500" p={4} color="white" align="center">
        <Heading size="lg">eBay Clone</Heading>
        <Spacer />
        <Input placeholder="Search..." bg="white" color="gray.800" w="sm" mr={4} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button leftIcon={<FaSearch />} onClick={handleSearch}>
          Search
        </Button>
        <Spacer />
        <Menu>
          <MenuButton as={Button} rightIcon={<FaUser />}>
            Account
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Orders</MenuItem>
            <MenuItem>Sign Out</MenuItem>
          </MenuList>
        </Menu>
        <Button ml={4} leftIcon={<FaShoppingCart />}>
          Cart
        </Button>
      </Flex>

      {/* Product Grid */}
      <Grid templateColumns="repeat(4, 1fr)" gap={6} p={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={product.image} alt={product.name} />
            <Heading size="md" mt={4}>
              {product.name}
            </Heading>
            <Text fontSize="xl" fontWeight="bold" mt={2}>
              ${product.price}
            </Text>
            <Button mt={4} colorScheme="blue">
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
