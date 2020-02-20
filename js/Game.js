/**
 * Game.js -- File to hold the functions for the Tree Life Simulator game.
 */
var fs = require('fs');
var Tree = require('../js/Tree.js');

class Game
{
	/**
	 * Constructor for the Game class.
	 */
	constructor(treeName)
	{
		this.width = $(window).width();
		this.height = $(window).height();
		this.tree = null;
		this.game = null;
		this.treeName = treeName;
	}

	/**
	 * Function to start the game.
	 */
	start()
	{
		this.tree = new Tree(this.treeName);

		this.currScene = new MainScene();
		this.config = {
			type: Phaser.AUTO,
			width: ((this.width) - ((this.width) * 0.15)),
			height: ((this.height) - ((this.height) * 0.10)),
			scene: {
				preload: (this.currScene).preload,
				create: (this.currScene).create
			}
		};

		this.game = new Phaser.Game(this.config);
	}
}

module.exports = Game;
