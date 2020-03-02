const formTranslationSource = ( state = [], action ) =>{

    switch (action.type){
        case 'SET_LANGUAGE_INPUT' :
            return [
                {
                    id : action.id,
                    text : action.text
                }
            ]
        default:
            return state;
    }

}

export default formTranslationSource;