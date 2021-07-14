var nome = document.getElementById('txtnome')
var email = document.getElementById('txtemail')
var telefone = document.getElementById('txttel')
var mensagem = document.getElementById('txtmsg')

function enviar() { /* Função chamada ao clicar no botão enviar */
     var tel = Number(txttel.value) /* Converte valor da variável em número */
     if (nome.value.length == 0 || email.value.length == 0 || telefone.value.length < 9 || mensagem.value.length == 0) { /* Se essas condições forem verdadeiras... */
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
    }

    /* ########     ↓ VERIFICADOR DE IDADE ↓     ########   */

    var button = document.querySelector('button') /* Variável receber o valor do button do html*/
    var popup = document.querySelector('.popup-wrapper') /* Variável receber o valor .popup-wrapper do html*/
    

    button.addEventListener('click', () => { /* Colocar evento de click na variável button. 1º argumento 'click' e após o click o 2º argumento a função*/
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

    /* ##############      ↓ ARTE CSS ↓    ############## */

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

