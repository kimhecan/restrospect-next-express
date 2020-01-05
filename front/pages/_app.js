import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import withReduxSaga from 'next-redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppLayout from '../components/AppLayout';
import reducer from '../reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga  from '../sagas';
import axios from 'axios';
import { LOAD_USER_REQUEST } from '../reducer/user'
import { LOAD_POST_REQUEST } from '../reducer/post';


const Restropect = ({ Component, store, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>restropect</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css" />
        </Head>
        <AppLayout>
          <Component {...pageProps}/>
        </AppLayout>
      </Provider>
    </>
  );
}

Restropect.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
};


Restropect.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  const pageProps = {};
  const state = ctx.store.getState();
  const cookie = ctx.isServer ? ctx.req.headers.cookie : '';
  if (ctx.isServer) {
    axios.defaults.headers.Cookie = cookie
  }
  if (!state.user.userId) {
    ctx.store.dispatch({
      type: LOAD_USER_REQUEST,
    });
  }
  if (Component.getIntialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return pageProps;
}

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = compose(composeWithDevTools(applyMiddleware(...middlewares)));
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};


export default withRedux(configureStore)(withReduxSaga(Restropect));