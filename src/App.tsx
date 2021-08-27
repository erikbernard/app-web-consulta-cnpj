import React, { Component } from 'react';
import './styles/GlobalStyle.css';
import Routes from './Router';
import { ApiContextProvider } from './contexts/ApiContext';

export default function App() {
  return (
    <>
    <ApiContextProvider>
      <Routes />
    </ApiContextProvider>
    </>
  );
}
// 45:32
// 1:19:40
// 1:31:59