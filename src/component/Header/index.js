import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestNavItem } from './../../redux/actions';
import HeaderForm from './HeaderForm';

const Header = () => {
  // States
  const [activeNav, setActiveNav] = useState('home');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestNavItem()); //eslint-disable-next-line
  }, []);

  // selectors
  const reducerData = useSelector((state) => state.suiteReducer);
  const { navItem = [] } = reducerData;

  /*
  -----------------------------------
    Function to manage nav selection
  -----------------------------------
  */
  const onHandleSelect = (activeKey) => {
    setActiveNav(activeKey);
  };

  return (
    <HeaderForm
      onHandleSelect={onHandleSelect}
      navItem={navItem}
      activeNav={activeNav}
    />
  );
};

export default Header;
