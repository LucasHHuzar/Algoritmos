function atividade_1(btn){
  
    if(btn == 1){
        alert('Você precionou o botão 1!');
    }
    else if(btn == 2){
        alert('Você precionou o botão 2!');
    }
    else{
        alert('Você precionou o botão 3!');
    }
}

function atividade_2(){
    
    let nome = prompt('Digite seu nome: ');
    let idade = prompt('Digite sua idade: ');

    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade.`);
}

function atividade_3(){

    let num = Number(prompt('Informe o número: '));

    alert(`O numero informado pelo usuário foi ${num}. Antes do número ${num}, temos o número ${num - 1}. Após o número ${num}, temos o número ${num + 1}.`);

}

function atividade_4(){
    
    let nome_produto = prompt('Informe nome do produto: ');
    let preco_produto = prompt('Informe preço do produto: ');
    let valor_entregue = prompt('Informe valor entregue ao vendedor: ');

    alert(`Você comprou um produto (${nome_produto}) por R$ ${preco_produto} e entregou ao vendedor R$ ${valor_entregue} em dinheiro. Você vai receber R$ ${valor_entregue - preco_produto} de troco. Volte sempre!`);
}

function atividade_5(){
    
    let nome_produto = prompt('Informe nome do produto: ');
    let valor_produto = prompt('Informe preço do produto: ');

    let desconto = valor_produto - (valor_produto * 0.10);

    document.getElementById('resultado').innerText = `Você comprou um produto (${nome_produto}) por R$ ${valor_produto} e acaba de ganhar um desconto de 10%. Assim você vai pagar apenas R$ ${desconto} pelo seu produto. Volte sempre!`;
}

let cliques = 0;

function atividade_6(num){
    
    if(num == 1){

        cliques++;

    }
    else{

        cliques = 0;

    }

    document.getElementById('resultado').innerText = `O contador está em ${cliques} cliques.`;
}

function atividade_7(){
    
    let num = Number(prompt('Informe o número: '));

    if(num >= 20 || num <= 90){

        document.getElementById('resultado').innerText = `O número informado está entre os número 20 e 90.`;

    }else{

        document.getElementById('resultado').innerText = `O número informado não é válido. Tente novamente.`;
    
    }
}

function atividade_8(){

    let num = Number(prompt('Informe o número desejado: '));
    let i;
    let resultado = '';

    for(i = 1; i <= 10; i++){
        resultado = resultado + `${num} x ${i} = ${num * i}<br>`;
    }

    document.getElementById('resultado').innerHTML = resultado;
}