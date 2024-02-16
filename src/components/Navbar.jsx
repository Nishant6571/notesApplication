import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      bg="blue.500"
      p={4}
      justify="space-between"
      align="center"
      boxShadow="md"
    >
      <Heading ml={40} as="h1" color="white">
        Notes_APP
      </Heading>
      <Flex display="flex" justify="space-between" width="50%">
        <Flex display="flex" justify="space-between" width="50%">
          <Box mr={4}>
            <Link
              color="white"
              _hover={{ textDecoration: "none", color: "gray.300" }}
              fontSize="x-large"
              to="/"
            >
              Home
            </Link>
          </Box>
          <Box mr={4}>
            <Link
              color="white"
              _hover={{ textDecoration: "none", color: "gray.300" }}
              fontSize="x-large"
              to="/about"
            >
              About
            </Link>
          </Box>
          <Box mr={4}>
            <Link
              color="white"
              _hover={{ textDecoration: "none", color: "gray.300" }}
              fontSize="x-large"
              to="/notes"
            >
              Notes
            </Link>
          </Box>
          <Box mr={4}>
            <Link
              color="white"
              _hover={{ textDecoration: "none", color: "gray.300" }}
              fontSize="x-large"
              to="/signup"
            >
              Signup
            </Link>
          </Box>
          <Box mr={4}>
            <Link
              color="white"
              _hover={{ textDecoration: "none", color: "gray.300" }}
              fontSize="x-large"
              to="/login"
            >
              Login
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
