/**
 * Game.js -- File to hold the functions for the Tree Life Simulator game.
 */
var fs = require('fs');
var Tree = require('../lib/tree/Tree.js');
var MainScene = require('../js/MainScene.js');

class Game
{
	/**
	 * Constructor for the Game class.
	 */
	constructor(treeName, textOnly)
	{
		this.width = $(window).width();
		this.height = $(window).height();
		this.mainDoc = window.document;
		this.tree = null;
		this.game = null;
		this.treeName = treeName;
		this.textOnly = textOnly;
	}

	/**
	 * Function to start the game.
	 */
	start()
	{
		this.tree = new Tree(this.treeName);

		if(!this.textOnly)
		{
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

		else
		{
			this.textOnlyStart();
		}
	}

	/**
	 * Function to play in text only mode.
	 */
	textOnlyStart()
	{
		//Reveal the text only area
		$("#textonlyarea").show();

		//Fill in the game information area
		this.displayGameInformationArea();
	}

	/**
	 * Function to display the game infommation area.
	 */
	displayGameInformationArea()
	{
		//Display the tree information
		(this.tree).displayTreeInformation($);
	}

	/**
	 * Function to get an element from the DOM by id.
	 */
	getDomElementById(id)
	{
		return (this.mainDoc).getElementById(id);
	}
}

//module.exports = Game;
