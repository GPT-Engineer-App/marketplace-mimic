import React, { useState } from "react";
import { Box, Heading, Text, Input, Button, Grid, Image, Flex, Spacer, Menu, MenuButton, MenuList, MenuItem, VStack } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const featuredProducts = [
  { id: 1, name: "Product 1", price: 10.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcxMTg2MjUyMnww&ixlib=rb-4.0.3&q=80&w=1080", condition: "New", bids: 5, endTime: "2023-06-01" },
  { id: 2, name: "Product 2", price: 15.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9kdWN0fGVufDB8fHx8MTcxMTg2MjUyMnww&ixlib=rb-4.0.3&q=80&w=1080", condition: "Used", bids: 2, endTime: "2023-06-03" },
  { id: 3, name: "Product 3", price: 7.85, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxwcm9kdWN0fGVufDB8fHx8MTcxMTg2MjUyMnww&ixlib=rb-4.0.3&q=80&w=1080", condition: "New", bids: 0, endTime: "2023-06-05" },
  { id: 4, name: "Product 4", price: 22.5, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxwcm9kdWN0fGVufDB8fHx8MTcxMTg2MjUyMnww&ixlib=rb-4.0.3&q=80&w=1080", condition: "New", bids: 7, endTime: "2023-06-02" },
];

const categories = ["Electronics", "Fashion", "Home & Garden", "Sports", "Toys", "Health & Beauty", "Collectibles", "Industrial equipment"];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <Box>
      {}
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

      {}
      <Flex bg="gray.100" p={2} align="center">
        <Link to="/" className="mx-4">
          Categories
        </Link>
        <Link to="/sell" className="mx-4">
          Sell
        </Link>
        <Link to="/myebay" className="mx-4">
          My eBay
        </Link>
        <Link to="/community" className="mx-4">
          Community
        </Link>
        <Link to="/help" className="mx-4">
          Help
        </Link>
      </Flex>

      <Flex>
        {}
        <VStack bg="gray.50" p={4} spacing={2} minW="200px">
          {categories.map((category) => (
            <Link key={category} to={`/category/${category}`}>
              {category}
            </Link>
          ))}
        </VStack>

        {}
        <Box p={10} flex={1}>
          <Heading mb={8}>Featured Items</Heading>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {featuredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <Box borderWidth={1} borderRadius="lg" p={4}>
                  <Image src={product.image} alt={product.name} />
                  <Heading size="md" mt={4}>
                    {product.name}
                  </Heading>
                  <Text fontSize="xl" fontWeight="bold" mt={2}>
                    ${product.price}
                  </Text>
                  <Text mt={2}>Condition: {product.condition}</Text>
                  <Text>Bids: {product.bids}</Text>
                  <Text>Ends: {product.endTime}</Text>
                </Box>
              </Link>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
