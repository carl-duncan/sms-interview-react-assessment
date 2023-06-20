import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#E5E5E5',
        color: 'black',
      },
      fontFamily: 'Roboto',
    },
  },
})

export default theme;