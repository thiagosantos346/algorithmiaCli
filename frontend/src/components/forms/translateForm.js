import React from 'react';
import SampleForm from './sampleForm';
import LanguageSelector from './languageSelector';

export default class TranslateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            
            <LanguageSelector render={ inherited =>(
                <SampleForm langCode= {inherited.language} />
            )} />
            
        )
    }

}

