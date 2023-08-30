import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>FriendsCorner</h1>
        <button>cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Delicious food!' />
      </div>
    </>
  );
};

export default Header;