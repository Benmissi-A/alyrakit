//import working from "../assets/working.svg";
import {
  Box,
  Center,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
const GetStarted = () => {
  return (
    <Box as="section" id="buy-now" py="20" bg="teal.900" color="white">
      <Center mb="6">
        <Text
          as="span"
          borderRadius="2xl"
          px="2"
          py="1"
          bg="whiteAlpha.50"
          textTransform="uppercase"
        >
          Get Started
        </Text>
      </Center>
      <Center mb="6">
        <Heading as="h2">Get AlyraKit and save your time</Heading>
      </Center>
      <Center mb="6">
        <Text fontSize="xl" maxW="80ch" textAlign="center">
          Stop wasting time trying to do it the "right way" and build a site
          from scratch. AlyraKit is faster, easier, and you still have complete
          control.
        </Text>
      </Center>
      <Center mb="6">
        <Button colorScheme="teal">Buy now</Button>
      </Center>
    </Box>
  );
};

export default GetStarted;