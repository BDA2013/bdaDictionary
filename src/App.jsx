import { ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router';
import './App.css';
import { theme } from './common/theme';
import Home from './components/RandomWord';
import MultiChoice from './components/MultiChoice';
import DictionarySelects from './components/DictionarySelects';
import { useEffect, useState } from 'react';
import TopDrawer from './components/TopDrawer';
import IconMenu from './components/IconMenu';
import { Grid } from '@mui/material';
import DictionaryProvider from './utils/DictionaryContext';

function App() {

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopDrawer />
      <DictionaryProvider>
      <Grid container dirction='row'>
      <Grid item xs={2} 
        alignItems='top'>
      <DictionarySelects />
      </Grid>
      <Grid item 
      xs={9}
      marginTop={6}
      display='flex'
      justifyContent='center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/multi' element={<MultiChoice />} />
      </Routes>
      </Grid>
      </Grid>
      </DictionaryProvider>
    </ThemeProvider>
  );
}

export default App;