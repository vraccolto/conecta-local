Onde está:
src/config/database.js


Sem Singleton:
Toda vez que alguém acessasse o banco
         │
         ▼
const pool = new Pool(...);

seria criada uma nova conexão e isso consome muita memória.

Visualmente:
Usuário 1
   │
   ▼
Nova conexão

Usuário 2
   │
   ▼
Nova conexão

Usuário 3
   │
   ▼
Nova conexão


Com Singleton:
Criamos apenas uma instância
         │
         ▼
const pool = new Pool(...);
module.exports = pool;

Depois reutilizamos
         │
         ▼
const pool =
    require('../config/database');

Visualmente:
Repository 1
      │
      ▼
Repository 2
      │
      ▼
Repository 3
      │
      ▼
Única conexão


Utilizamos Singleton para garantir que toda a aplicação utilize uma única instância do Pool de conexões PostgreSQL, evitando múltiplas conexões desnecessárias.
