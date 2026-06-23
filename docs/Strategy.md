Onde está?
src/strategies/


Sem Strategy:
Controller:

if(category){
   ...
}

if(title){
   ...
}

if(userId){
   ...
}

À medida que filtros crescem:

if(...)
if(...)
if(...)
if(...)
if(...)

O Controller vira um monstro.


Com Strategy:
Cada filtro possui sua própria classe.

CategoryFilterStrategy

TitleFilterStrategy

Controller:

const context =
    new FilterContext(
        CategoryFilterStrategy
    );

Fluxo:

Filtro recebido
      │
      ▼
Context
      │
      ▼
Strategy escolhida
      │
      ▼
Consulta executada


Vantagem:
Para criar um novo filtro:

UserFilterStrategy

Não precisa alterar a lógica existente.

Só adicionar nova estratégia.

Utilizamos Strategy para encapsular diferentes algoritmos de filtragem de anúncios. Cada filtro possui sua própria implementação, permitindo extensão sem modificar as estratégias já existentes.
