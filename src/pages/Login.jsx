import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
// import { useState } from "react";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = () => {
    alert("err");
  };
  return (
    <Box
      bgImage="url('https://www.jefit.com/images/loginbg.jpg')"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="100%"
      Size="100%"
    >
      <Box textAlign="center" color="white">
        JEFIT
      </Box>
      <Flex align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                  // onChange={formik.handleChange}
                  // value={formik.values.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  variant="filled"
                  // onChange={formik.handleChange}
                  // value={values.password}
                />
              </FormControl>
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                //   onChange={formik.handleChange}
                //   isChecked={formik.values.rememberMe}
                colorScheme="purple"
              >
                Remember me?
              </Checkbox>
              <Button type="submit" colorScheme="purple" width="full">
                Login
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
