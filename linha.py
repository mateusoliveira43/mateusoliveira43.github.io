with open('linha.txt', 'w') as writer:
    body = '''
<div class="destaque">
  <div class="logo m-2 float-left">
    <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" />
  </div>
  <div class="logo m-2 float-right">
    <img src="./public/assets/img/manutencao.svg" alt="Logo de manuntenção" width="100%" />
  </div>
  <h1>Seção em construção</h1>
  <p>
    Nesta seção de <b>Modelos</b>, pretendo disponibilizar os links para os repositórios do <b>GitHub</b>
    dos modelos <b>LaTeX</b> que desenvolvi e utilizo no dia a dia. Disponibilizá-los online foi minha
    motivação inicial para ter um site anos atrás.
  </p>
</div>
    '''
    body = body.replace('\n', '')
    body = body.replace('  ', ' ')
    body = body.replace("'", '\'')
    writer.write(body)
