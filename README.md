# Stack to the Stars: prototype

Een schattingsspel in de browser, gebouwd met Vue 3.

## Hoe het spel werkt

15 vragen in 3 niveaus. Na elke vraag zie je het echte antwoord, een weetje en je score.

| Niveau | Vraagtype | Aantal | Tijdslimiet |
|---|---|---|---|
| 1 | Meerkeuze, met een 50/50 hint (kost 25 punten) | 5 | Geen |
| 2 | Hoger of lager | 5 | Geen |
| 3 | Zelf een getal schatten | 5 | 20 seconden per vraag |

Extra's: een reeks-bonus bij meerdere goede antwoorden achter elkaar, een scoresidebar die live bijwerkt en een highscore-lijst (top 5, bewaard in de browser).

## Techniek

- Vue 3 met de Composition API (`script setup`)
- Vite
- Pinia (state: vragen, niveau, score, reeks)
- Vue Router (start, spel per niveau, resultaat)
- Vitest (unit tests)

## Starten

Vereist: Node.js 20 of nieuwer.

```bash
cd product
npm install
npm run dev
```

Open daarna het adres dat in de terminal verschijnt (meestal http://localhost:5173).

Tests draaien:

```bash
npm test
```

## Mappenstructuur

Opzet, wordt tijdens het bouwen bijgewerkt.

```text
src/
  views/        HomeView, QuizView, ResultsView
  components/   QuestionCard, invoercomponenten, ScoreSidebar, TimerBar, ...
  stores/       gameStore.js
  router/       index.js
  data/         questions.json
  utils/        scoring.js
```

## Meer informatie

Het verslag, het logboek en de bronnen staan in de map [`docs`](../docs).
