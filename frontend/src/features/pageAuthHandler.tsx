import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { store } from '../redux/store';

// is auth => state = store.getState(); if ( state.user.userId && state.token.token ) {valid} else { not valid }

export function ProtectedRoute(props: { children: any; path: string }) {
  const isAuth =
    store.getState().token.token !== null &&
    store.getState().user.userId !== null;
  return (
    <Route {...props.path}>
      {isAuth ? props.children : <Redirect to="/login" />}
    </Route>
  );
}
