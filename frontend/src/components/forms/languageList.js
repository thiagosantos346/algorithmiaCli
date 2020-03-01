import React from 'react';

export default class LanguageList extends React.Component{
    
    render(){
        let itemList = this.props.list.map((item) =>
            <li key={item.language}>
                {item.name}
            </li>
        );
        return(
            <ul>{itemList}</ul>
        );
    }

}