import React, { Component } from 'react';
import './Tictactoe.css';

class Tictactoe extends Component{

	constructor(props){
		super(props)
		this.state = {

             game:Array(9).fill(null),
             player:"x",
             winner:null

		}

	}

winner(){
	let wincases=[

		["0","1","2"],
		["3","4","5"],
		["6","7","8"],
		["0","3","6"],
		["1","4","7"],
		["2","5","8"],
		["0","4","8"],
		["2","4","6"]
	]


	for(let i=0;i<wincases.length;i++){

		const [a,b,c]=wincases[i];

		if(this.state.game[a] && this.state.game[a] === this.state.game[b] && this.state.game[a]===this.state.game[c]){
			alert("you won");

			this.setState({
				winner:this.state.player
			})
		}
	}

}


 handleClick(index){

    let newgame=this.state.game

    if( newgame[index] === null && !this.state.winner){
    	  newgame[index]=this.state.player

    let newplayer=this.state.player === "x" ? "o" : "x"

    this.setState({
       game:newgame,
       player:newplayer
    })

    }
      
  
    this.winner()

 	console.log(this.state.game)

 }

render()
{
const Box = this.state.game.map

        ((box,index) => 

    	<div className="box" key={index} onClick={() =>

    	 this.handleClick(index)}>

    	 <p>{box}</p></div>)

  return (
    <div>
    
         <div className="tic-tac-toe">


            <div className="heading">tic-tac-toe</div>



            <div className="game-box">



               {Box}
                

            </div>

                




         </div>




    </div>
  );
 }
}

export default Tictactoe;


