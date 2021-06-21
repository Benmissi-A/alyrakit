import { useState } from "react"
import PricingSwitch from "./PricingSwitch"
import { Container, Text, Button, Box, Heading } from "@chakra-ui/react";

const Pricing = () => {
  const config = {
    yearly: 29,
    monthly: 49,
  }
  const list = [
    "Rich, responsive landing pages",
    "100+ styled components",
    "Flexible, simple license",
    "Speedy build tooling",
    "6 months free support included",
  ]
  const [price, setPrice] = useState(config.yearly)
  const handleSwitchChange = (e) => {
    if (e.target.checked) {
      setPrice(config.monthly)
    } else {
      setPrice(config.yearly)
    }
  }

  return (
    <Box as="section" bg="grey.50" id="pricing" py="20">
      <Container maxW="container.md">
        <Heading textAlign="center" mb="6">Fair, simple pricing for all</Heading>

        <Text fontSyse="lg" textAlign="center" maxW="60ch" mb="6">
          All types of businesses need access to development resources, so we
          give you the option to decide how much you need to use.
        </Text>

        <PricingSwitch onChange={handleSwitchChange} />

        <div>
          <div>
            <span>Standard</span>
            <b>{price}</b> /mo
            <ul>
              {list.map((el, index) => {
                return <li key={index}>{el}</li>;
              })}
            </ul>
            <Button>Get it now</Button>
          </div>
          <div>
            <span>Entreprise</span>
            <p>
              We offer variable pricing with discounts for larger organizations.
              Get in touch with us and we’ll figure out something that works for
              everyone.
            </p>
            <Button>Contact us</Button>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default Pricing
