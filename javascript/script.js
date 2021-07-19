


/* ######## FORMÚLARIO PÁGINA CONTATO ###### */

var nome = document.getElementById('txtnome')
var email = document.getElementById('txtemail')
var telefone = document.getElementById('txttel')
var mensagem = document.getElementById('txtmsg')



function conferirDados() { /* Função chamada ao clicar no botão enviar */
     var tel = Number(txttel.value) /* Converte valor da variável em número */
     var condEnvioMsg = (nome.value.length, email.value.length, mensagem.value.length === 0 || telefone.value.length < 9 )
     
     if (condEnvioMsg) { /* Se essas condições forem verdadeiras... */
         alert('Para enviar por favor preencha todos os dados.') /* Mostrará uma janela com essa mensagem */
     } else if (nome.value.length < 10) { /* Se o compo nome tiver menor que 10 caracteres... */
         alert('Por favor, digite seu nome completo.')
     } else if (email.value.length == 0 || email.value.indexOf('@')==-1) { /* Se o campo e-mail não tiver cracteres ou sse não tiver o simbolo '@'... */
         alert('Endereço de E-mal invalido.')
     } else if (telefone.value.length < 10) { /* Se o campo telefone tive menos que 10 caracteres... */
         alert('Por favor, digite o código de área do seu telefone.')
     } else if (mensagem.value.length == 0) { /* Se o campo mensagem não tiver caracteres nenhum... */
         alert('Só faltou digitar sua mensagem!')
     } else { /* Se nenhuma das opções anteriores forem verdadeiras... */
        alert('Mensagem enviada com sucesso! Em breve retornaremos.')
         
        } 
        /* Limpar campos do formulário  e iniciar novamente no nome piscando para digitar*/
        nome.value = ''
        email.value = ''
        telefone.value = ''
        mensagem.value = ''
        nome.focus()
    }



    /* ########     BOTÃO VERIFICADOR DE IDADE ↓     ########   */

    var button = document.querySelector('.button') /* Variável receber o valor do button do html*/
    var popup = document.querySelector('.popup-wrapper') /* Variável receber o valor .popup-wrapper do html*/
   
    button.addEventListener('click', () => {
     /* Colocar evento de click na variável button. 1º argumento 'click' e após o click o 2º argumento a função*/
        popup.style.display = 'block' /* Após clicar no botão aparece a janela que estava com display = none*/
    })

    popup.addEventListener( 'click', event => { /* Criar evento de 'click' no elemento popup. 1º arg. 'click'e após o click o 2º arg. a função (dar ao elemento popup o display = none) ou seja, sumir popup*/
        var classNameOfClickedElement = event.target.classList[0] /* Essa variável recebe o nome do elemento que foi clicado. Ao indentificar com index 0 ([0]) vai aparecer no console do navegador o elemento inicial*/
        //console.log(classNameOfClickedElement) /*→ para mostrar no console do navegador*/
        var listaCondicoes = ['popup-close', 'popup-link', 'popup-wrapper'] /* Variável criada para armazenar as condições do if */
        var todasCondicoesParaFecharPopup = listaCondicoes.some(listaCondicoes => listaCondicoes === classNameOfClickedElement) /* Variável criada com metodo de arrei 'some' verifica se pelo menos 1 item do arrei/lista for verdadeiro, o some retorna true, se nenhum for verdadeiro retorna folse e sempre retorna booleam */
        
        if (todasCondicoesParaFecharPopup) { /* Se a variável 'todasCondicoesParaFecharPopup' for verdadeira...*/
            popup.style.display = 'none'   /* Deixar display da popup invisível/none (sumir) */
        }   
    })

    /* ##############    BOTÃO ARTE CSS ↓    ############## */

    var button1 = document.querySelector('.button1') /* Variável receber o valor do button1 do html */
    var popup1 = document.querySelector('.popup1-wrapper') /* Variável receber o valor .popup1-wrapper do html */
    

    button1.addEventListener('click', () => {/* Colocar evento de click na variável button1. 1º argumento 'click' e após o click o 2º argumento a função*/
        popup1.style.display = 'block' /* Após clicar no botão aparece a janela que estava com display = none*/
    })

    popup1.addEventListener('click', event => { /* Criar evento de 'click' no elemento popup. 1º arg. 'click'e após o click o 2º arg. a função (dar ao elemento popup o display = none) ou seja, sumir popup*/
        var classNameOfClickedElement1 = event.target.classList[0] /* Essa variável recebe o nome do elemento que foi clicado. Ao indentificar com index 0 ([0]) vai aparecer no console do navegador o elemento inicial*/
        //console.log(classNameOfClickedElement) /*→ para mostrar no console do navegador*/
        var listaCondicoes1 = ['popup1-close', 'popup1-link', 'popup1-wrapper'] /* Variável criada para armazenar as condições do if */
        var todasCondicoesParaFecharPopup1 = listaCondicoes1.some(listaCondicoes1 => listaCondicoes1 === classNameOfClickedElement1) /* Variável criada com metodo de arrei 'some' verifica se pelo menos 1 item do arrei/lista for verdadeiro, o some retorna true, se nenhum for verdadeiro retorna folse e sempre retorna booleno */

        if (todasCondicoesParaFecharPopup1) { /* Se a variável 'todasCondicoesParaFecharPopup1' for verdadeira...*/
           popup1.style.display = 'none' /* Deixar display da popup invisível/none (sumir) */
        }  
        
    })

/* ########### BOTÃO SITE  CONTADOR ############ */

var buttonContador = document.querySelector('.buttonContador')
var popupContador = document.querySelector('.popupContador-wrapper')

buttonContador.addEventListener('click', () => {
    popupContador.style.display = 'block'
})

popupContador.addEventListener('click', event => {
    var classNameOfClickedElementContador = event.target.classList[0]
    var listaCondicoesFecharContador = ['popupContador-wrapper', 'popupContadorClose', 'popupContador-link']
    var todasCondicoesParaFecharContador = listaCondicoesFecharContador.some(listaCondicoesFecharContador => listaCondicoesFecharContador === classNameOfClickedElementContador)

    if (todasCondicoesParaFecharContador) {
        popupContador.style.display = 'none'
    }
    
})

/* ########### BOTÃO SITE  TABUADA ############ */

var buttonTabuada = document.querySelector('#buttonTabuada')
var popupTabuada = document.querySelector('.popupTabuada-wrapper')


buttonTabuada.addEventListener('click', () => {
    popupTabuada.style.display = 'block'
})

popupTabuada.addEventListener('click', event => {
    var classNameOfClickedElementTabuada = event.target.classList[0]
    var listaCondicoesFecharTabuada = ['popupTabuadaClose', 'popupTabuada-wrapper', 'popupTabuada-link']
    var todasCondicoesParaFecharTabuada = listaCondicoesFecharTabuada.some(listaCondicoesFecharTabuada => listaCondicoesFecharTabuada === classNameOfClickedElementTabuada)

    if (todasCondicoesParaFecharTabuada) {
        popupTabuada.style.display = 'none'
    }
})

/* ########### BOTÃO CÓPIA SITE IRINA BLOK ############ */

var buttonIrina = document.querySelector('#buttonIrina')
var popupIrina = document.querySelector('.popupIrina-wrapper')

buttonIrina.addEventListener('click', () => {
    popupIrina.style.display = 'block'
})

popupIrina.addEventListener('click', event => {
    var classNameOfClickedElementIrina = event.target.classList[0]
    var listaCondicoesFecharIrina = ['popupIrinaClose', 'popupIrina-wrapper',  'popupIrina-link']
    var todasCondicoesParaFecharIrina = listaCondicoesFecharIrina.some(listaCondicoesFecharIrina => listaCondicoesFecharIrina === classNameOfClickedElementIrina)
    
    if (todasCondicoesParaFecharIrina) {
        popupIrina.style.display = 'none'
    } 
})

/* ########### BOTÃO SITE HORA CERTA ############ */

var buttonHoraCerta = document.querySelector('#buttonHoraCerta')
var popupHora = document.querySelector('.popupHora-wrapper')


buttonHoraCerta.addEventListener('click', () => {
    popupHora.style.display = 'block'
})

popupHora.addEventListener('click', event => {
    var classNameOfClickedElementHora = event.target.classList[0]
    listaCondicoesFecharHora = ['popupHora-wrapper', 'popupHoraClose', 'popupHora-link']
    var todasCondicoesParaFecharHora = listaCondicoesFecharHora.some(listaCondicoesFecharHora => listaCondicoesFecharHora === classNameOfClickedElementHora)

    if (classNameOfClickedElementHora) {
        popupHora.style.display = 'none'
    }
})

/* ########### BOTÃO SITE PESSOAL ISAIAS ############ */

var buttonEsteS = document.querySelector('#buttonEsteS')
var popupEsteS = document.querySelector('.popupEsteS-wrapper')

buttonEsteS.addEventListener('click', () => {
    popupEsteS.style.display = 'block'
})

popupEsteS.addEventListener('click', event => {
    var classNameOfClickedElementEsteS = event.target.classList[0]
    var listaCondicoesFecharEsteS = ['popupEsteSClose', 'popupEsteS-wrapper', 'popupEsteS-link']
    var todasCondicoesParaFecharEsteS = listaCondicoesFecharEsteS.some(listaCondicoesFecharEsteS => listaCondicoesFecharEsteS === classNameOfClickedElementEsteS)

    if (classNameOfClickedElementEsteS) {
       popupEsteS.style.display = 'none'
    }
    
})