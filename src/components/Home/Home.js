import React from 'react';
import { useContext } from 'react/cjs/react.production.min';
import AuthContext from '../../store/auth-context';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = () => {
  const authCantext = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCantext.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
