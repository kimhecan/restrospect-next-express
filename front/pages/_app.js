import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import AppLayout from '../components/AppLayout';
import reducer from '../reducer';


const Restropect = ({ Component, store }) => {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>restropect</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css" />
        </Head>
        <AppLayout>
          <Component />
        </AppLayout>
      </Provider>
    </>
  );
}

Restropect.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
  );
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(Restropect);