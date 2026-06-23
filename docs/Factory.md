Onde está:
src/factories/AdFactory.js


Sem Factory:

if(category){

    strategy =
        new CategoryStrategy();

}else{

    strategy =
        new DefaultStrategy();

}

O Controller precisaria conhecer a criação do objeto.


Com Factory:

const strategy =
    AdFilterFactory.create(
        category
    );


Vantagem:
Somente a Factory muda, o Controller continua igual.
Utilizamos Factory para centralizar a criação dos objetos de domínio, reduzindo acoplamento entre Controllers e Models.
