import React from 'react';
import languages  from '../data/languages'
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import { Divider } from '@material-ui/core';

export default class LanguageSelector extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            language : "",
            name : "",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange(option){
        const startPosition = ('index-id-option-').length;
        const id  = parseInt(option.target.id.substring(startPosition));
        
        if( ! isNaN(id) ){
            this.setState({
                language : languages[ id ].language,
                name : languages[ id ].name,
            })
        }else{
            this.setState({
                language : 'en',
                name : 'English',
            })
        }
    }

    render(){
       return(
           <Grid >
                
                <Autocomplete 
                    id="index-id"
                    options={languages}
                    getOptionLabel={ option => option.name }
                    renderInput={params => <TextField {...params} label="Choise your language output" variant="outlined" />}
                    onInputChange={ this.handleChange }
                />
                <Divider></Divider>
                {this.props.render(this.state)}
           
           </Grid>
       );
    }

}