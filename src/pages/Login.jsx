import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Image,
  Heading
  
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";


export default function Login() {
  const [formData, setFormData] = useState({
    email:"eve.holt@reqres.in",
    password:"cityslicka"
  })

  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isAuth=useContext(AppContext)
  const handleSubmit = (e) => {
    e.preventDefault();
   
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        
        alert("SUCCESS");
        isAuth.handleLogin(data.token)
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
        alert("Error");
      });
  };
  

  
 

  
  return (
    <Box
      bgImage="url('https://www.jefit.com/images/loginbg.jpg')"
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
      <Flex align="center"  justify="center" m={"auto"} pb={140} h="100vh">
      <Box bg="#ebf7ff" w={400} p={39} rounded="md" textAlign={"center"}>
          <Heading variant={"solid"}>LOG IN</Heading>
          <br />
          <Box>
          </Box>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                  onChange={handleChange}
                  value={formData.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  variant="filled"
                  onChange={handleChange}
                  value={formData.password}
                />
              </FormControl>
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                colorScheme="purple"
              >
                Remember me?
              </Checkbox>
              <Button type="submit" bg="#50b6ff" width="full">
                Login
              </Button>
              <Box alignSelf={"center"}>
              <Text  variant={"ghost"}>Or</Text>
              </Box>
              <Box>
            <Flex gap={5} ml="60px" align={"center"}>
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
            
            </Box>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}


