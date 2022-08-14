import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const fonts = {
  heading: 'Work Sans, system-ui, sans-serif',
  body: 'Inter, system-ui, sans-serif',
}

const colors = {
  text: "#ffffff",
  primary: "#0ECEE5",
  secondary: "#2CDCF1",
  white: "#ffffff",
  background: "#000000",
  black: "#000000",
}

const components = {
  Center: {
    variants: {
      card: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backfaceVisibility: "hidden",
      },
    },
  },
}

const theme = extendTheme({
  config,
  fonts,
  colors,
  components,
})

export default theme