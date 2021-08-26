import React from 'react';
import ReactDOM from 'react-dom';

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        const table = this.randomTable();
        this.state = {
            table: table,
        }
    }

    randomTable() {
        let table = [];
        for (let i = 0; i <= 8; i++) {
            table[i] = [];
            for (let j = 0; j <= 8; j++) {
                table[i][j] = 0;
            }
        }
        for (let i = 0; i <= 40; i++) {
            const row = Math.floor(Math.random() * 8);
            const column = Math.floor(Math.random() * 8);
            if (row !== 0 && column !== 0) {
                table[row][column] = 1;
            }
        }
        for (let i = 1; i <= 7; i += 2) {
            for (let j = 1; j <= 7; j += 2) {
                table[i][j] = 2;
            }
        }
        return table;
    }

    render() {
        return (
            <h1>Table</h1>
        );
    }
}

ReactDOM.render(
    <GameBoard/>,
    document.getElementById('root')
);

