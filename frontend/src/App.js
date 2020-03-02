import React from 'react';
import TranslateForm from './components/forms/translateForm';
import LanguageSelectorSource from './components/visualComponents/languageSelectorSource';
import LanguageSelectorTarget from './components/visualComponents/languageSelectorTarget';
class App extends React.Component {
  
  render(){
    return(
      <div>
        <TranslateForm/>
        <br/>
        <LanguageSelectorSource/>
        <LanguageSelectorTarget/>
      </div>
    )
  }
}

export default App;