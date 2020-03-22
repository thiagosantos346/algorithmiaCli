import React from 'react';
import Header from './components/header';
import TranslateForm from './components/translateForm';
import GlobalStyle from './styles/global';

class App extends React.Component {
  
  render(){
    return(
      <>
      <Header/>
      <TranslateForm/>
      <GlobalStyle/>
      </>
    )
  }
}

export default App;