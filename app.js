     let listaDeNumerosSoretados;
     let numeroLimite = 10;
     let numeroSecreto = gerarNumeroAleatorio();
     let tentativa = 1;
     
            function exibirTextoNaTela(tag, texto) {

                let campo = document.querySelector(tag);
                campo.innerHTML = texto;

            }

            function mensagemTela(){


                exibirTextoNaTela('h1', 'jogo do numero secreto')
                exibirTextoNaTela('p', 'escolha um numero entre 1 e 10')

            }

            function verificarChute() {

                let chute = document.querySelector('input').value;
              
                    if(chute == numeroSecreto){

                        exibirTextoNaTela('h1', 'ACERTOU');
                        let palavraTentativa = tentativa > 1 ? 'tentativas':'tentativa';
                        let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativa} ${palavraTentativa}! `;
                        exibirTextoNaTela('p', mensagemTentativa);
                        document.getElementById('reiniciar').removeAttribute('disabled');

                    }else{

                        if(chute > numeroSecreto){

                        exibirTextoNaTela('h1', 'ERROU');
                        exibirTextoNaTela('p', 'O numero secreto e menor');

                        }else{

                            exibirTextoNaTela('h1', 'ERROU');
                            exibirTextoNaTela('p', 'O numero secreto e maior');

                        }

                    }

                    tentativa++;
                    limparCampo();
            }

            function gerarNumeroAleatorio() {

                let Numeroescolhido = parseInt(Math.random() * numeroLimite + 1);
                let quantidadeDeElementosNaLista = listaDeNumerosSoretados.length;

                if (quantidadeDeElementosNaLista == numeroLimite) {

                    listaDeNumerosSoretados = [];

                }

                if(listaDeNumerosSoretados.includes(Numeroescolhido)) {

                    return gerarNumeroAleatorio();

                }else{

                    listaDeNumerosSoretados.push(Numeroescolhido);
                    return Numeroescolhido;

                }


            }
            
            function limparCampo() {

                chute = document.querySelector('input');
                chute.value = '';

            }

            function novoJogo() {
                
                mensagemTela();
                limparCampo();
                numeroSecreto = gerarNumeroAleatorio();
                tentativa = 1 ;
                document.getElementById('reiniciar').setAttribute('disabled',true);
  
              }

  exibirTextoNaTela('h1', 'jogo do numero secreto')
  exibirTextoNaTela('p', 'escolha um numero entre 1 e 10')
