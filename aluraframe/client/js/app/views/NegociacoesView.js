class NegociacoesView extends View{

  template(model){
    return `
      <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
          ${model.negociacoes.map(negocio => `
            <tr>
                <td>${DateHelper.dataParaTexto(negocio.data)}</td>
                <td>${negocio.quantidade}</td>
                <td>${negocio.valor}</td>
                <td>${negocio.volume}</td>
            </tr>
            `)}
        </tbody>

        <tfoot>
        <td colspan="3"></td>
        <td>
          ${model.negociacoes.reduce((total,negocio) => total+ negocio.volume , 0.0)}
        </td>
        </tfoot>
    </table>
    `;
  }
}
