import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"
import { PropsWithChildren } from "react"

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
