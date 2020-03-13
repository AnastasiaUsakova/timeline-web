import React, {Component} from "react";
import Table from "../component/Table";
import Deck from "../component/Deck";
import Hand from "../component/Hand";
import Login from "../component/Login";

class Game extends Component{

    state = {
        user: {
            login: undefined,
            password: undefined
        },
        hand: [],
        selectedInHand: -1,
        table: [],
        isAuthorized: false
    };

    componentDidMount() {// useSmth react hooks
        this.loadData();
    }

    loadData = () => {
        let cards = [];
        for (let i = 0; i < 5; i++) {
            let card = {};
            card.year = 2000;
            card.description = "Карта " + i;
            cards.push(card);
        }

        this.setState({hand: cards, table: [cards[0]]});
    };

    selectInHand(index) {
        console.log("Index " + index);
        let newIndex = this.state.selectedInHand === index ? -1 : index;
        this.setState({selectedInHand: newIndex});
    };

    /*добавляем левее индекса*/
    onClickAddCard(index) {
        console.log("Push " + index);
        let tableCards = this.state.table;
        let handCards = this.state.hand;
        let selectedHandIndex = this.state.selectedInHand;
        let handCard = handCards[selectedHandIndex];
        tableCards.splice(index, 0, handCard);
        handCards.splice(selectedHandIndex, 1);
        this.setState({table: tableCards, selectedInHand: -1, hand: handCards})
    };

    onClickDeck() {
        let cards = this.state.hand;
        if (cards.length >= 5) {
            console.log("max = 5");
        } else {
            cards.push({id: 23, year: 2021, description: "Clone"});
            this.setState({hand: cards});
        }
    }

    onChangeLogin(event) {
        console.log("login");
        let user = this.state.user;
        user.login = event.target.value;
        this.setState({user: user, isAuthorized: false})
    };

    onChangePswd(event) {
        console.log("pswd");
        let user = this.state.user;
        user.password = event.target.value;
        this.setState({user: user, isAuthorized: false})
    };

    onLogin() {
        console.log("click");
        const isAuthorized = this.state.user.login && this.state.user.password;
        this.setState({isAuthorized: isAuthorized});
    }

    render() {

        return (
            <>
                {
                    this.state.isAuthorized
                    ? (
                        <div className="game-table">
                            <div className="toolbar">{`Player: ${this.state.user.login}`}</div>
                            <Table cards={this.state.table}
                                   editMode={this.state.selectedInHand > -1}
                                   onClick={this.onClickAddCard.bind(this)}
                            />
                            <div className="player-hud">
                                <Deck onClick={this.onClickDeck.bind(this)}/>
                                <Hand cards={this.state.hand}
                                      onClick={this.selectInHand.bind(this)}
                                      selectedIndex={this.state.selectedInHand}
                                />
                                <Deck/>
                            </div>
                        </div>
                    )
                    : (
                        <Login onChangeLogin={this.onChangeLogin.bind(this)}
                               onChangePswd={this.onChangePswd.bind(this)}
                               onLogin={this.onLogin.bind(this)}
                        />
                    )
                }
            </>
        );
    }
}

export default Game;