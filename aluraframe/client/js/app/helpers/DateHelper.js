class DateHelper{

  constructor(){
    throw new Error("Nao e possivel instanciar uma variavel em DateHelper");
  }

  static dataParaTexto(data){
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  static textoParaData(data){
    if(! /\d{4}-\d{2}-\d{2}/)
      throw new Error("Deve estar no formato aaaa-mm-dd");

    return new Date(
    ...data.split('-')
    .map((item,indice) => item - indice%2)
    );
  }
}
