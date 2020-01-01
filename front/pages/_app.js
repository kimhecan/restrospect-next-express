import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppLayout from '../components/AppLayout';
import reducer from '../reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga  from '../sagas';


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

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = compose(composeWithDevTools(applyMiddleware(...middlewares)));
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};


export default withRedux(configureStore)(Restropect);