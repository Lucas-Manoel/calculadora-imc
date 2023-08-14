
const calcular = document.getElementById('calcular')



function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document. getElementById('peso').value;
    const resultado = document.getElementById('resultado')
    //se os tres for diferente de vazio porque os valores estao preenchidos

    if(nome !== "" && altura!==""&&peso!==""){//fazendo a validaçao
      const valorIMC = (peso / (altura * altura)).toFixed(1);//fazendo o calculo

      let classificacao= ""; //fazendo a classificaçao
      if (valorIMC <18.5){
        classificacao = 'abaixo do peso.';
      }else if (valorIMC <25){
        classificacao = 'com peso ideal. Parabens!!!';
      }else if (valorIMC <30){
        classificacao = 'levemente a cima do peso';
      }else if (valorIMC <35){
        classificacao = 'como obesidade grau I';
      }else if (valorIMC <40){
        classificacao = 'como obesidade grau II';
      }else if (valorIMC <45){
        classificacao ='com obesidade grau III cuidado!';
      }

      resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`

    }else{
        alert ('preencha todos os campos!!!')
    }
}

calcular.addEventListener('click', imc);