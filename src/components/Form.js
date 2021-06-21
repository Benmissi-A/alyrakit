import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

const Form = () => {
  const [sampleRequest, setSampleRequest] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // get the data
    // do sth with the data
    setSampleRequest(true);
  };
  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {!sampleRequest ? (
              <form onSubmit={handleFormSubmit}>
                <FormControl id="name" mb="4">
                  <FormLabel htmlFor="name">Your name</FormLabel>
                  <Input id="name" placeolder="Joe Doe" required />
                </FormControl>
                <FormControl id="email" mb="4">
                  <FormLabel htmlFor="email">Your email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="joe@doe.com"
                    required
                  />
                </FormControl>
                <Button type="submit">Submit</Button>
              </form>
            ) : (
              <Text>Thank you! You will receive your sample soon!</Text>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Form;
