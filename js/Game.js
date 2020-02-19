/**
 * Game.js -- File to hold the functions for the Tree Life Simulator game.
 */
var fs = require('fs');
var Tree = require('../js/Tree.js');

function Game()
{
	this.width = $(window).width();
	this.height = $(window).height();
	this.tree = new Tree("Tree");

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

