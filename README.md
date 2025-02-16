# 🏆 Pool Club Scoreboard 🏆

A sleek, responsive web application for effortlessly tracking scores in your favorite pool and billiards games. 🎱 Designed for an optimal user experience on tablets, smartphones, and desktops alike! ✨

[🚀 **Live Demo**](https://stephannjo.github.io/pool-scoreboard/)

<br>

## 🎉 Key Features

*   **🕹️ Versatile Game Modes**: Supports an extensive range of popular pool game styles:
    *   🎱 8-Ball
    *   9️⃣ 9-Ball
    *   🔟 10-Ball
    *   ♾️ 14.1 Continuous
    *   💪 14.1 Continuous Trainer

*   **🎯 Streamlined Interface**:
    *   👍  Intuitive score tracking with large, responsive +/- buttons.
    *   ✨  Adaptive layouts optimized for all game modes.
    *  📱  Effortless control through large, touch-friendly elements perfect for tablets and smartphones.

*  📜 **Persistent Game History:** Remembers your previous matches: scores, key statistics, dates! 💾 Export, import and clear features available.
     *  ✅ Scrollable list displaying at least your 5 latest games, ready to take as many as you can play.

*   **💡 Specialized 14.1 Continuous Mode**:
    *   🧮 Potted ball counting for highly accurate scoring
    *   🚩 Support for fouls and safety
    *   🔄 Full implementation of the re-rack feature.
    *  🎭 Player vs Player or Solo trainer functionality

*   **📱 ↔️🖥️ Truly Responsive**: Adapts fluidly to provide a seamless visual experience across tablets, smartphones, and PCs.
    * Uses full screen prompts when viewing via chrome in tablet for best viewing
*   **🍪 Local Storage Magic**: Scores and match histories stay put on your device using LocalStorage. No account, no login required.

<br>

## 🖼️ Visuals Speak Louder!

###

 <div align="center">

<p> <img src="https://stephannjo.github.io/pool-scoreboard/assets/game_selection.png" width= 280px height= auto alt = "Game Selection Screen">
<br> The home screen for choosing your different pool modes </p>
<br>

<p><img src="https://stephannjo.github.io/pool-scoreboard/assets/standard_game_mode.png"  width= 280px height= auto alt="Standard Game Mode Screen">
<br>Basic scoring screen for typical 2 player scoring</p>
<br>
<p> <img src="https://stephannjo.github.io/pool-scoreboard/assets/continuous_game_mode.png" width= 280px height= auto  alt="14.1 Continuous Game Screen">
 <br> Continuous game mode screen where we track number of potted balls</p>
<br>
<p> <img src="https://stephannjo.github.io/pool-scoreboard/assets/trainer_mode.png"  width= 280px height= auto alt ="14.1 Continuous Trainer Game Mode Screen">
 <br> A view at the 14.1 continuous training view of score management.</p>
</div>

###

## ⚙️ Getting Started

1.  Access the Scoreboard via your web browser using [this link](https://stephannjo.github.io/pool-scoreboard/).
2.  Select your desired pool game on the initial splash page
3.  Follow on screen prompts, or enjoy the 14.1 functionality via your appropriate interface.

## 🐳 Deployment with Docker

This project can be deployed using Docker for more portability and easier access:

1.  **Docker Image:** Build the Docker image using the provided `Dockerfile`:

    ```bash
    docker build -t pool-scoreboard .
    ```
2.  **Run using `docker-compose`**: Use `docker-compose.yml` to deploy quickly with dynamic folder bind, update `%directory%` as needed. Replace  `%directory%`  with absolute path for appropriate folder on your machine for it to be properly linked via  bind-mount

     ```bash
     docker-compose up
      ```

  The Docker setup automatically serves the application on [http://localhost:8084](http://localhost:8084). Your files will be dynamically updated as edits are made with its bind-mounted volume using `docker-compose`. The `Dockerfile` itself creates an nginx environment

 *Remember to install docker and ensure you can build using the command prompt (or terminal)*

## 🛠️ Contribution

This application is developed in basic web technologies: plain HTML, CSS, and JavaScript. All are invited to fork the project and customize for their own use cases. Create a branch, submit a pull request if there are contributions you wish to share to this open source code.

## ⚠️ Limitations

*   **Local Storage Only:** Game history and scores are stored in your browser's local storage. Data can be cleared when browser data is purged by user via clear browser cache functionality or if localStorage is explicitly wiped out (including during development).

*  **No Multiple Tables:** At the moment, it can only track one pool table (game) at any one time. You may run other windows but they will each function in their own unique sessions independently of one another, with no sync abilities.

*  **No Server Side:** Because we are only using a client application based view, it is incapable of server side functionality or accessing system or native files outside your own individual browser's data storage capability.
  * Saving a set of different history per days to separate json files cannot be performed natively.
   * If importing the wrong format of history file for data types can potentially fail depending on specific type parameters or if its empty.

*   **No Native Application Access:** This will mean for data access to files and system permissions such functionality will have limitations, this will not work well in that format as data storage is designed around only browser APIs and localStorage access

## 📜 License
MIT licensed code, fully free and open.