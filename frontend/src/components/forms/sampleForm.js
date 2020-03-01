import React from 'react';
import requestion from './sampleRequest';
import Button from '@material-ui/core/Button';
import { FilledInput } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default class SampleForm extends React.Component{
    constructor(props){
        super(props);

        this.useStyles = {
            input: {
              display: 'none',
            },
        };

        this.state = {
            error : null,
            isLoaded : false,
            items : {
                text : "",
                translation : "",
            },
            value : "",
            langCode : "en"
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ value : event.target.value });
    }

    handleSubmit(event){
        let langCode = '';
        if( typeof this.props.langCode !== 'undefined' ){
            langCode = this.props.langCode;
            if(langCode.length === 0){
                langCode = this.state.langCode;
            }
        }
        
        const req =  requestion(this.state.value, langCode );

        fetch(req)
          .then( res => res.json())
          .then( res => {
              this.setState({
                error : null,
                isLoaded : true,
                items  : res,
                value : this.state.value
              });
            },
            (error) => {
              this.setState({
                isLoaded : true,
                error
              })
            }
        )
        event.preventDefault();
    }

    render(){
        const { items } = this.state;
        return(
            <Grid
                container
                alignItems="center">
                
                <InputLabel
                    htmlFor="inputText"> 
                    Detectar Idioma
                </InputLabel>
                
                <FilledInput
                    fullWidth
                    id="inputText"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                
                <Divider
                    orientation="vertical"
                />

                <InputLabel
                    htmlFor="outputText" >
                        Tradução:
                </InputLabel>   
                
                <FilledInput
                    fullWidth
                    disabled
                    id="outputText"
                    type="text"
                    value={items.translation} />
                
                <Divider 
                    orientation="vertical" 
                />
                <Button
                    color="primary"
                    fullWidth
                    variant="outlined"
                    component="span"
                    onClick={this.handleSubmit}>
                    Traduzir
                </Button>

            </Grid>
        )
    }

}