Onde está?
src/events/EventManager.js

src/events/index.js

src/observers/AdCreatedObserver.js
Sem Observer

No Controller:

await adRepository.create(ad);

fs.appendFileSync(...);

Problema:

Controller
    │
    ├── salva anúncio
    ├── gera log
    ├── envia email
    ├── envia notificação

Tudo fica misturado.

Com Observer

Controller:

eventManager.notify(
    'adCreated',
    createdAd
);

Observer:

update(ad)

Fluxo:

Anúncio criado
      │
      ▼
Evento disparado
      │
      ▼
Observer executado
      │
      ▼
Log criado
Vantagem

Se amanhã quiser enviar e-mail:

AdCreatedObserver
EmailObserver
NotificationObserver

Todos podem escutar o mesmo evento.

Sem alterar o Controller.

Utilizamos Observer para desacoplar ações secundárias da criação do anúncio. O Controller dispara um evento e os observadores inscritos executam comportamentos independentes.
