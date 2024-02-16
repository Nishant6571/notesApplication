import React from "react";
import { Flex, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      bgGradient="linear(to-r, teal.500, green.500)"
      color="white"
    >
      <Stack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          Welcome to Our Note App
        </Heading>
        <Text fontSize="xl">Your one-stop solution for organizing notes</Text>
        <Button
          colorScheme="whiteAlpha"
          variant="outline"
          bg="blue.500"
          color="white"
          size="lg"
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </Stack>
    </Flex>
  );
};

export default Home;
