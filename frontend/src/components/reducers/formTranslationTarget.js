const formTranslationTarget = ( state = [], action ) =>{

    switch (action.type){
        case 'SET_LANGUAGE_OUTPUT' :
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

export default formTranslationTarget;