import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

function Username() {
  const [name, setName] = useState('Loading...');

  useEffect(() => {
    const fetchName = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setName(user.attributes.given_name || 'Loading...');
      } catch (error) {
        console.error(error);
        setName('Error loading name');
      }
    };

    fetchName().then(r => console.log(r));
  }, []);

  return (
    <>{name}</>
  );
}

export default Username;
