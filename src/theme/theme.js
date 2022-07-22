import { extendTheme } from "@chakra-ui/react";
import Button from "./Button"
import Heading from "./Heading";
import Text from "./Text";
const theme = extendTheme({
    components:{
        Button,
        Heading,
        Text
    }
})

export default theme;