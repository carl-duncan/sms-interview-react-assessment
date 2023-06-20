import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Amplify from '@aws-amplify/core';
import MenuItem from './MenuItem';

function SignOutMenuItem({ name }) {
  const [text, setText] = useState(name);

  const handleMouseEnter = () => {
    setText("Sign Out");
  }

  const handleMouseLeave = () => {
    setText(name);
  }

  const handleClick = () => {
    Amplify.Auth.signOut();
  }

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
      <MenuItem
        text={text}
        isSecondaryStyle={true}
      />
    </Box>
  );
}

export default SignOutMenuItem;
