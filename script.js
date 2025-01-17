/* Updated CSS for Tablet Responsiveness */

/* Root Font Size */
html {
    font-size: 16px;
}

/* Basic Styling */
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

body {
    font-family: 'Oswald', sans-serif;
    margin: 0;
    background-color: #f0f8ff;
    color: #333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
}

.container {
    background-color: #fff;
    border-radius: 1.5rem;
   /* box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.2); REmOVED Shadow*/
    width: 100%;
    max-width: 1250px;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
    flex: 1;
    overflow-y: auto;
}

h1 {
    display: none;
}


h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 0.8rem;
    color: #2c3e50;
   /* text-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.1); remove text-shadow*/
    font-weight: bold;
}

#game-selection {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.game-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 0.8rem;
}

#game-selection button {
    padding: 1rem 2rem;
    margin: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 1rem;
    transition: background-color 0.3s ease, transform 0.2s ease-in-out;
   /*  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3); REmove Shadow */
}

#game-selection button:hover {
    background-color: #2980b9;
    transform: scale(1.05);
   /*  box-shadow: 0 0.8rem 1.4rem rgba(0, 0, 0, 0.4); Removed Shadow*/
}

#game-selection .secondary-button {
    padding: 0.8rem 1.5rem;
    margin: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 0.8rem;
    transition: background-color 0.3s ease, transform 0.2s ease-in-out;
    /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3); REMOVED SHADOW*/
}

#game-selection .secondary-button:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  /*  box-shadow: 0 0.8rem 1.4rem rgba(0, 0, 0, 0.4); REMOVED SHADOW*/
}

#history-controls {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

#game-selection #clear-history,
#game-selection #export-history,
#game-selection #import-history-button {
    display: inline-block;
    margin: 0.3rem;
}

#game-selection #clear-history {
    background-color: #f44336;
}

#game-selection #export-history {
    background-color: #008CBA;
}

#game-selection #import-history-button {
    background-color: #008CBA;
}

#player-input {
    margin-bottom: 0.5rem;
    padding: 0.8rem;
    background-color: #f9f9f9;
    border-radius: 0.8rem;
   /* box-shadow: inset 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05); Removed shadow*/
}

#player-input h2 {
    margin-top: 0;
    color: #34495e;
    font-size: 1.8rem;
    font-weight: bold;
}

#player-input label {
    display: inline-block;
    width: 8rem;
    text-align: right;
    margin-right: 0.8rem;
    font-size: 1.1rem;
    color: #555;
    font-weight: bold;
}

#player-input input {
    padding: 1rem;
    border: 0.2rem solid #ddd;
    border-radius: 0.4rem;
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    width: calc(100% - 9.8rem);
   /* box-shadow: inset 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1); Remove Shadow */
    font-weight: bold;
}

#scoreboard {
    margin-top: 7.5rem;
    padding: 0.8rem;
   /* border: 0.3rem solid #ddd; Remove border */
    border-radius: 0.8rem;
    background-color: #f4f4f4;
    /*box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.1); REMOVE shadow */
    display: flex;
    flex-direction: column;
       overflow: hidden;
}

#scoreboard h2 {
    font-size: 2rem;
    color: #e74c3c;
  /*  text-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.1); REmOVE shadow*/
    margin-bottom: 0.8rem;
    font-weight: bold;
}

#standard-scoreboard {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}

.awesome-player {
    flex: 1;
    padding: 0.8rem;
       background-color: #f9f9f9; /*player background*/
    border-radius: 0.8rem;
   /*  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1); Remove shadow*/
    margin: 0 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.awesome-player h3 {
    margin-top: 0.5rem;
    font-size: 1.6rem;
    color: #2c3e50;
    text-align: center;
    font-weight: bold;
       margin-bottom: 0.2rem;
}

.score {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
    text-align: center;
    color: #3498db;
 /*  text-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.1); REMOVE SHADOW*/
}

/* Styles for 8,9, and 10 ball game modes*/
#standard-scoreboard .score {
  font-size: 3rem;
}

.score-controls {
    display: flex;
    justify-content: center;
    width: 100%;
}

#standard-scoreboard .score-controls button {
     padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 1rem;
     margin: -0.2rem 0.8rem;
    transition: background-color 0.3s ease, transform 0.2s ease-in-out;
   /*  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3); remove shadow*/
    display: flex;
         text-align: center;
    align-items: center;
       justify-content: center;
}

#standard-scoreboard .score-controls button:hover {
    transform: scale(1.05);
    /*  box-shadow: 0 0.8rem 1.4rem rgba(0, 0, 0, 0.4); Remove shadow */
}


/* Styles for 8,9, and 10 ball game modes*/
#standard-scoreboard .score-controls button span {
   display: flex;
    align-items: center;
       justify-content: center;
        margin-bottom: 0rem;
        font-size: 1.5rem;
}


/* Styles for 8,9, and 10 ball game modes*/
#standard-scoreboard .score-controls button {
       padding: 1rem 1.4rem;
     /*   margin-top: 0rem; Reduced margin top*/
    /*   margin-bottom: 0rem; remove margin */
}


#standard-scoreboard .score-controls button:first-child {
    background-color: #e74c3c;
}

#standard-scoreboard .score-controls button:first-child:hover {
    background-color: #c0392b;
}

#standard-scoreboard .score-controls button:last-child {
    background-color: #2ecc71;
}

#standard-scoreboard .score-controls button:last-child:hover {
    background-color: #27ae60;
}

#scoreboard button {
    padding: 1rem 2rem;
    font-size: 1.4rem;
    cursor: pointer;
      background-color: #3498db;
    color: white;
    border: none;
    border-radius: 1rem;
    margin-top: auto;
    transition: background-color 0.3s ease, transform 0.2s ease-in-out;
  /*   box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);  Remove SHADOW */
}

#scoreboard button:hover {
    background-color: #2980b9;
    transform: scale(1.05);
 /*   box-shadow: 0 0.8rem 1.4rem rgba(0, 0, 0, 0.4); Removed Shadow*/
}

#match-history {
    margin-top: 0.5rem;
  /*   border-top: 0.2rem solid #ddd;  removed Border*/
    padding-top: 0.5rem;
    max-height: 20rem;
    overflow-y: auto;
}
#match-history h2 {
     position: sticky;
    top: 0;
     background-color: #fff; /* Optional: Set a background color for the header if you'd like */
    padding-bottom: 0.4rem; /* added paddign*/
     /*border-bottom: 0.2rem solid #eee; remove bottom border */
}


#history-list {
    list-style: none;
    padding: 0;
}

#history-list li {
    margin-bottom: 0.4rem;
    padding: 0.8rem 1rem;
    border: 0.1rem solid #eee;
    border-radius: 0.6rem;
    background-color: #fdfdfd;
    font-size: 1rem;
   /* box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1); remove Shadow*/
    font-weight: bold;
}

/* Game Screen Styling */
.main-content {
    display: flex;
    flex: 1;
    overflow: hidden;
    margin: 5px 0rem;
    flex-direction: column;
}

@media (min-width: 800px) {
    .main-content {
        flex-direction: row;
    }
}

.game-screen-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    height: 100%;
}

.left-section-wrapper {
    display: flex;
    flex: 2;
    flex-direction: column;
}

.left-section, .right-section {
   display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 0rem;
    overflow-y: hidden;
     padding: 0.5rem 0rem;
}

@media (min-width: 800px) {
    .left-section {
       margin-right: 1rem;
    }
}

/* Scoreboard Styling */
.scoreboard {
    margin-bottom: 0.3rem;
    padding: 0.8rem;
 /*   border: 0.3rem solid #ddd; Remove border */
    border-radius: 0.8rem;
    background-color: #f4f4f4;
     /*  box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.1); REMOVE SHADOW*/
     overflow: hidden;
}

.scoreboard label {
    display: block;
    margin-bottom: 0.2rem;
    color: #555;
    font-size: 1rem;
    font-weight: bold;
}

.scoreboard span {
    font-size: 1.7rem;
    font-weight: bold;
    color: #004d00;
}

/* Continuous Game Scoreboard Styling */
.scoreboard #current-score-p1,
.scoreboard #high-run-p1,
.scoreboard #innings-p1,
.scoreboard #current-score-p2,
.scoreboard #high-run-p2,
.scoreboard #innings-p2
{
    font-size: 1.7rem;
    font-weight: bold;
}

.player-stats-table {
    width: 100%;
}

.player-stats {
    flex: 0 0 35%;
    margin: 0;
}

.middle-stats {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
    padding: 0 1rem;
}

/* Input Area Styling */
.input-area {
    flex: 1;
    text-align: center;
    margin-top: 0.5rem;
    padding: 0.3rem 0rem;
  /* border: 0.3rem solid #ddd; Remove Border*/
    border-radius: 0.8rem;
    background-color: #f4f4f4;
   /*  box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.1); Removed shadow */
      overflow: hidden;
}

.buttons-remaining {
    margin-bottom: 0.5rem;
    text-align: center;
}

.buttons-remaining p {
    margin-bottom: 0.2rem;
    color: #555;
    font-size: 1rem;
    font-weight: bold;
}

.ball-buttons {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.3rem;
    margin-bottom: 1rem;
}

.ball-buttons button {
    background-color: #eee;
    border: 0.1rem solid #ddd;
    color: #333;
    padding: 0.6rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0.8rem;
    transition: background-color 0.2s ease-in-out;
    /*box-shadow: 0 0 0.3rem rgba(0, 123, 255, 0.5); REMOVE shadow*/
    font-weight: bold;
}

.ball-buttons button:hover {
    background-color: #ddd;
}

.ball-buttons button:focus {
    outline: none;
/*     box-shadow: 0 0 0.3rem rgba(0, 123, 255, 0.5); Remove Shadow */
}

/* Inning Table Styling */
.inning-table {
    overflow: hidden;
    margin: 0;
    padding: 0.8rem;
   /* border: 0.3rem solid #ddd; Removed Border */
    border-radius: 0.8rem;
    background-color: #f4f4f4;
    /*box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.1); Removed shadow */
    width: 100%;
    max-width: 50vw;
     display: flex;
     flex-direction: column;
    max-height: 50rem;
}

@media (min-width: 800px) {
    .inning-table {
        max-height: 30rem;
          width: 90%;
         margin-left: auto;
        margin-right: auto;
    }
}

.inning-table h2 {
    color: #333;
    margin-bottom: 0.4rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
}

.inning-table-container {
    scroll-behavior: smooth;
    flex: 1;
    overflow-y: auto;
}

.inning-table-container table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
}

.inning-table-container th, .inning-table-container td {
    text-align: left;
    padding: 0.5rem;
    border-bottom: 0.1rem solid #ddd;
    font-size: 1rem;
    word-break: break-word;
    font-weight: bold;
}

.inning-table-container th {
    background-color: #f0f0f0;
}

/* Adjust column widths */
.inning-table-container th:nth-child(1), /* Inning */
.inning-table-container td:nth-child(1) {
    width: 20%;
}

.inning-table-container th:nth-child(2), /* Player */
.inning-table-container td:nth-child(2) {
    width: 30%;
}

.inning-table-container th:nth-child(3), /* Balls Potted */
.inning-table-container td:nth-child(3) {
    width: 25%;
}

.inning-table-container th:nth-child(4), /* Score */
.inning-table-container td:nth-child(4) {
    width: 25%;
}
/* Modal Styling */
#modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

#modal-dialog {
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: center;
}

#modal-message {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: bold;
}

.primary-button, .secondary-button {
    border: none;
    color: white;
    padding: 1.2rem 1.8rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;
    margin: 0.4rem;
    cursor: pointer;
    border-radius: 0.8rem;
    transition: background-color 0.2s ease-in-out;
}

.primary-button {
    background-color: #4CAF50;
}

.secondary-button {
    background-color: #f44336;
}

.primary-button:hover, .secondary-button:hover {
    opacity: 0.8;
}

.controls {
    margin: 0;
    padding: 0.8rem;
    border: 0.3rem solid #ddd;
    border-radius: 0.8rem;
    background-color: #f4f4f4;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
}

#game-screen .controls {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.8rem;
    justify-content: space-between;
    align-items: center;
      padding: 0 0.5rem;
}

.controls #foul {
      background-color: #ffeb3b;
        color: #000;
}

.controls #safety {
    background-color: #2ecc71;
}

.controls #end-game {
    background-color: #3498db;
}


.controls #undo {
    background-color: #95a5a6;
}

.controls #reset {
      background-color: #e74c3c;
}

.controls #foul,
.controls #safety,
.controls #end-game,
.controls #undo,
.controls #reset,
#new-rack,
#new-game-1p,
#new-game-2p,
#clear-history,
#export-history,
#import-history-button {
    margin-bottom: 0.4rem;
    margin-right: 1rem;
    flex-grow: 0;
}
#new-rack {
    background-color: #673ab7;
    margin-bottom: 0.4rem;
}

#new-rack:disabled {
    background-color: #cccccc;
    cursor: default;
}

#clear-history {
    background-color: #f44336;
}

#export-history, #import-history-button {
    background-color: #008CBA;
}

#game-screen {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}

.new-rack-container {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 1rem;
    margin-left: 1rem;
}

/* Fullscreen Modal Styling */

#fullscreen-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
}

.fullscreen-modal-dialog {
    background-color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    text-align: center;
    max-width: 90%;
    width: 30rem;
}

.fullscreen-modal-dialog p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: bold;
}
.close-button-container {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 1000;
}

.close-button {
    color: #666;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
     padding: 0.4rem;
        transition: color 0.3s;
}
.close-button:hover {
    color: #333; /* Slightly darker grey */
}