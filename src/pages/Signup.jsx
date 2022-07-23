import {
  Box,
  Button,
   Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
  Text,
  Image
  
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
export default function Signup() {

  const handleSubmit=(e)=>{
      alert("SIGN UP SUCCESSFULL")
  }
  
  return (
    <Box
      bgColor="#dbe8f4"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="100%"
      Size="100%"
    >
      <Box align="center"
        color="white"
        fontFamily="Montserrat - 700"
        fontSize="36px"
        fontWeight="700"
        fontStyle="normal"
        h={50}
        display="block">
        <img
              style={{  height: "95px" }}
              src="https://www.jefit.com/wp/wp-content/uploads/2021/12/jefit_logo_website_header-3.png"
              alt=""
            />
      </Box>
      <Flex align="center" w="40%" justify="center" m={"auto"}   h="100vh">
        <Box bg="#ebf7ff" p={39} rounded="md" textAlign={"center"}>
          <Heading variant={"solid"}>CREATE ACCOUNT</Heading>
            <Text variant={"ghost"}>Continue with</Text>
            <br />
            <Box>
            <Flex gap={5} justifyContent="center">
              <Box >
                <Image w={50} borderRadius="10px" src="https://www.jefit.com/images/rg_google.svg"></Image>
              </Box>
              <Box>
                <Image w={50} borderRadius="10px"  src="https://www.jefit.com/images/rg_fb.svg"></Image>
              </Box>
              <Box>
                <Image w={50} borderRadius="10px"  src="https://www.jefit.com/images/rg_apple.svg"></Image>
              </Box>
            </Flex>
            <br />
            <Text variant={"ghost"}>Or</Text>
            </Box>

          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
            <FormControl>
                <FormLabel htmlFor="username" variant={"smooth"}>Username</FormLabel>
                <Input
                  id="username"
                  name="username"
                  type="username"
                  placeholder="Enter a username"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email" variant={"smooth"}>Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password" variant={"smooth"}>Password</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </FormControl>
              <Button bg="#50b6ff" width="full">
              <Link to="/login">CREATE ACCOUNT</Link>
              </Button>
              <Box alignSelf="center">
                <Text fontSize='lg'>Already a member? <Link to="/login">Sign in</Link></Text>
              </Box>
              <Box alignSelf="center">
                <Text variant={"outline"}>By signing up, you agree to the JEFIT Terms of Use and Privacy Policy. We respect and protect your information and privacy.</Text>
              </Box>
              <br />
            
            </VStack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
