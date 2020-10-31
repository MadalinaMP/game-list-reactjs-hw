class Game extends React.Component {
    constructor(title, description, id) {
        super();
        
        this.title: title;
        this.description: description;
        this.id: id
    }
    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <p>{this.description}</p>
            </div>
        )
    }
}

class GameList extends React.Component {
    constructor(props) {
        super(props);

        this.games = [];

        for (let i = 0; i < this.props.numberOfGame; i++) {
            const game = {
                title: 'Title ' + i,
                description: 'Content ' + i
            }
            this.games.push(game);
        }
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <GameList numberOfGame={10} />
            </div>
        )
    }

    static async getGameById(idGame) {
        const response = await fetch(`https://games-world.herokuapp.com/games/${idGame}`)
        return response.json()
      }
    
      static async getGame() {
        const response = await fetch('https://games-world.herokuapp.com/games/');
        return response.json()
      }
    
      static async saveGameOnServer(game) {
        const response = await fetch("https://games-world.herokuapp.com/games/", {
          method: 'POST',
          headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Accept": "*/*",
          },
          body: `title=${game.title}&description=${game.description}`
        });
    
        return response.json();
      }
}

const appDOM = document.getElementById('app');
ReactDOM.render(<App />, appDOM)