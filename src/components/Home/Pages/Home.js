import React, { useEffect, useState } from 'react';

import Menu from '../components/Menu/Menu';
import Quote from '../components/Quote/Quote';
import Modal from '../../Shared/UI/Modal/Modal';
import useHttp from '../../Shared/hooks/useHttp';

const Home = () => {
  const [menu, setMenu] = useState([]);

  const {
    isLoading,
    error,
    sendRequest: menuFetchRequest,
    clearError,
  } = useHttp();

  useEffect(() => {
    const sendMenuRequest = async () => {
      try {
        const data = await menuFetchRequest(
          `${process.env.REACT_APP_BACKEND_URL}/menu`
        );
        setMenu(data);
      } catch (err) {}
    };

    sendMenuRequest();
  }, [menuFetchRequest]);

  return (
    <>
      {error && <Modal error={error} onClose={clearError} />}
      <Quote />
      {isLoading && <p className="loading">Loading...</p>}
      {!isLoading && <Menu menu={menu} />}
    </>
  );
};

export default Home;
