// Escolher idioma de entrada.
    //Buscar na lista de idiomas suportardos.
    //Opcional, caso ausente é detectado automaticamente.
        //Custo adicional constante de mais uma unidade computacional.

export const setLanguageInput = object =>({
    type : 'SET_LANGUAGE_INPUT',
    language : object.language,
    name : object.name,
});

// Escolher idioma de saída.
    //Buscar na lista de idiomas suportardos.
        //Padrão, em Inglês.

export const setLanguageOutput = object =>({
    type : 'SET_LANGUAGE_OUTPUT',
    language : object.language,
    name : object.name,
});
        
// Escrever o texto para ser traduzido.
    //Contagem por 100 caracteres.
        //mostrar o custo estimado.
export const setTextToTranslate = text =>({
    type : 'SET_TEXT_TO_TRANSLATE',
    text : text,
    size : text.length,
});

// Enviar o texto para ser traduzido.
    //Demora entorno de ~ 1.6 segundo, nesse tempo fazer uma animação de espera.
    // Construir a requisição de envio.


// Receber o texto traduzido.
    //Ao receber deve mostrar o texto, em uma outra caixa de texto..
    //Caso não receber, mostar uma menasgem de erro.
export const getTextTanslated = text =>({
    type : 'SET_TEXT_TRANSLATED',
    text
});