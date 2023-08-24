let nome = "Alex";

switch (nome) {
  case "Alex":
    console.log("O nome é Alex.");
    break;
  case "Alice":
    console.log("O nome é Alice.");
    break;
  default:
    console.log("O nome nao foi encontrado.");
    break;
}

/*
Este codigo ficaria bem amis simplificado caso utilizasse o if-else
se liga no exemplo abaixo:

if(nome == "Alex"){
    console.log("O nome é Alex")
} else{
    console.log("O nome nao foi encontrado.")
}
------------------------------------------------------------------------
Mas é claro que tudo tem o seu porém, a estrutuea do switch é mais utilizada
em longas comparações, ou seja, em caso no qual você necessita de mais "respostas". 
É sempre bom fazer as anotações para não se perder no decorrer do curso
caso tenha que voltar para entender melhor uma parte da matéria.
*/
