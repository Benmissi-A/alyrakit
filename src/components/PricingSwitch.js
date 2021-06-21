import { FormControl, FormLabel, Text, Switch } from "@chakra-ui/react";

const PricingSwitch = ({ onChange }) => {
  return (
    <FormControl display="flex" alignItems="center" justifyContent="center" mb="6">
      <FormLabel htmlFor="pricing-option" mb="0">
         Enable <Text as="span">monthly</Text> pricing
      </FormLabel>
      <Switch id="procong-option" type="checkbox" onChange={onChange} colorScheme="teal"/>
    </FormControl>
  )
}

export default PricingSwitch
