import { Heading, Text, Image } from "@chakra-ui/react"

const Feature = ({ icon, title, text }) => {
  return (
    <div>
      <Image boxSize="64px" src={icon} alt="" />
      <Heading fontSize="xl" mb="4">
        {title}
      </Heading>
      <Text color="gray.600">{text}</Text>
    </div>
  );
};

export default Feature;
