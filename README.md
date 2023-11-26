<br />
<div align="center">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </div>

Benvenuto/a alla pagina del progetto di Java Script Basics per Start2Impact University!

## Lo scopo del progetto

Questo progetto consiste nella creazione di un counter, in cui vengono implementati con Javascript:
- il tasto +
- il tasto -
- il campo in cui viene visualizzato un valore manipolabile con i tasti + e -

Essendo io un roleplayer, ho sempre pensato che sarebbe stata una ottima idea avere la possibilità di avere un generatore di caratteristiche per la creazione di un personaggio di Dungeons and Dragons di primo livello.

Ho unito questa idea alla creazione del progetto, per cui ho implementato la richiesta del progetto con questa mia "esigenza" da gamer", anche per creare un qualcosa di diverso e contemporaneamente utile e sfidante.

## La personalizzazione in tema gaming

In questa personalizzazione del progetto iniziale ho operato i seguenti cambiamenti:
- al posto del valore iniziale di 0, ho impostato, per fini di game, un valore di 10.
- anzichè avere un pulsante di reset, ho impostato un tasto che simula, con una funzione Java Script, il lancio di 3 dadi da 6, come previsto nella generazione delle caratteristiche di Dnd.

Ho inoltre aggiunto la possibilità di avere il campo del valore aggiornato sia dopo il tiro dei dadi, sia dopo aver manipolato il valore con i tasti + e -.

Nella generazione dei punteggi di caratteristica, una delle modalità permesse è avere un totale di 27 punti a disposizione e di disporli nella maniera che uno preferisce per caratterizzare il personaggio.

A ogni tiro di dado, il risultato, con una funzione, ricade in un valore tra 8 e 15.

A questi valori, le regole stabiliscono un costo, secondo la seguente tabella:
- valore 8, costo 0
- valore 9, costo 1
- valore 10, costo 2
- valore 11, costo 3
- valore 12, costo 4
- valore 13, costo 5
- valore 14, costo 7
- valore 15, costo 9

Per semplificare il conteggio, ho aggiunto un campo che calcola di quanti punti manchino o eccedano al valore di 27, dopo i tiri di dado e l'aggiunta o la sottrazione di punteggio. Il tutto, per tutte le sei caratteristiche del gioco, ovvero forza, destrezza, costituzione, intelligenza, saggezza, carisma.

Chiaramente, questo è stato un esercizio per il progetto di studio di S2i, mentre per quanto riguarda la generazione delle caratteristiche del personaggio, si possono implementare altre idee, sicuramente dopo il prossimo modulo riuscirò ad avere altri spunti per migliorarne codice e funzionalità!

Un saluto e .. roll the dices!
