import React from 'react';
import { Button } from '@material-ui/core';

import GitHub from '../../assets/github.svg';

export default () => (
  <div className="w-100 h-100 flex justify-center items-center">
    <a href={`http://localhost:3000/auth/github`} className='link'>
      <Button variant='contained' size='large'>
        <img src={GitHub} alt='GitHub' className='h2 w2' />
        Login
      </Button>
    </a>
  </div>
);