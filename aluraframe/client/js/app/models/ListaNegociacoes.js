class ListaNegociacoes{

    constructor(armadilha){
      this._negociacoes = [];
      this._armadilha = armadilha;
    }

    adiciona(negocio){

      this._negociacoes.push(negocio);
      this._armadilha(this);
    }

    get negociacoes(){

      return [].concat(this._negociacoes);
    }

    esvazia(){

      this._negociacoes = [];
    }
}
