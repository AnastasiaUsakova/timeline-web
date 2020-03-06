import React, {Component} from "react";
import Table from "../component/Table";
import Deck from "../component/Deck";
import Hand from "../component/Hand";

class Game extends Component{

    state = {
        hand: [],
        selectedInHand: -1,
        table: []
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

    selectInHand = (index) => {
        console.log("Index " + index);
        let newIndex = this.state.selectedInHand === index ? -1 : index;
        this.setState({selectedInHand: newIndex});
    };

    /*добавляем левее индекса*/
    onClickAddCard = (index) => {
        console.log("Push " + index);
        let tableCards = this.state.table;
        let handCards = this.state.hand;
        let selectedHandIndex = this.state.selectedInHand;
        let handCard = handCards[selectedHandIndex];
        // if (index === 0) {
        //     tableCards.unshift(handCard);
        // } else if (index === tableCards.length) {
        //     tableCards.push(handCard);
        // } else {
            tableCards.splice(index, 0, handCard);
        //}
        handCards.splice(selectedHandIndex, 1);
        this.setState({table: tableCards, selectedInHand: -1, hand: handCards})
    };

    onClickDeck() {
        let cards = this.state.hand;
        if (cards.length > 5) {
            console.log("max = 5");
        } else {
            cards.push({id: 23, year: 2021, description: "Clone"});
            this.setState({hand: cards});
        }
    }

    render() {
        return (
            <div className="game-table">
                <div className="toolbar">toolbar</div>
                <Table cards={this.state.table} editMode={this.state.selectedInHand > -1} onClick={this.onClickAddCard}/>
                <div className="player-hud">
                    <Deck onClick={this.onClickDeck}/>
                    <Hand cards={this.state.hand} onClick={this.selectInHand} selectedIndex={this.state.selectedInHand}/>
                    <Deck/>
                </div>
            </div>
        );
    }
}

export default Game;