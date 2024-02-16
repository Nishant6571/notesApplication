import React from "react";
import { Flex, Box, Link, Heading } from "@chakra-ui/react";

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
              href="/"
            >
              Home
            </Link>
          </Box>
          <Box mr={4}>
            <Link
              color="white"
              _hover={{ textDecoration: "none", color: "gray.300" }}
              fontSize="x-large"
              href="/about"
            >
              About
            </Link>
          </Box>
          <Box mr={4}>
            <Link
              color="white"
              _hover={{ textDecoration: "none", color: "gray.300" }}
              fontSize="x-large"
              href="/notes"
            >
              Notes
            </Link>
          </Box>
          <Box mr={4}>
            <Link
              color="white"
              _hover={{ textDecoration: "none", color: "gray.300" }}
              fontSize="x-large"
              href="/signup"
            >
              Signup
            </Link>
          </Box>
          <Box mr={4}>
            <Link
              color="white"
              _hover={{ textDecoration: "none", color: "gray.300" }}
              fontSize="x-large"
              href="/login"
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
