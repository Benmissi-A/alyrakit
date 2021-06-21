import working from "../assets/working.svg";
import {
  Box,
  Heading,
  Container,
  Image,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ];
  return (
    <Box bg="gray.50" py="24">
      <Container maxW="container.lg" >
        <SimpleGrid columns={[1, null, 2]} alignItems="center">
          <Box>
            <Image
              src={working}
              alt="Illustration with a computer on the desk"
              w="400"
              h="295"
            />
          </Box>
          <Box>
            <Heading as="h2" mb="6">
              The most useful resource ever created for designers
            </Heading>
            <Box>
              <List>
                <SimpleGrid columns={[1, null, 2]} gap="2">
                  {list.map((el, index) => {
                    return (
                      <ListItem py="0">
                        <ListIcon
                          as={CheckCircleIcon}
                          color="teal.300"
                          key={index}
                        />
                        {el}
                      </ListItem>
                    );
                  })}
                </SimpleGrid>
              </List>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ListFeatures;
