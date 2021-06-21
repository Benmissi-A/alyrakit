import Form from "./Form"
import { Container, Text, Button } from "@chakra-ui/react";

const Sample = () => {
  return (
    <Container id="sample" py="4">
      <Text fontSize="xl" mb="6" textAlign="center">
        Using AlyraKit to build your site means never worrying about designing
        another page or cross browser compatibility. Our ever-growing library of
        components and pre-designed layouts will make your life easier.
      </Text>

      <Button colorSheme="teal" size="lg">Download a Sample</Button>

      <Form />
    </Container>
  );
}

export default Sample
