/**
 * MainScene.js -- File to hold the inforamtion for the main scene.
 */

function MainScene()
{

}

/**
 * Function to preload assets for the main scene.
 */
MainScene.prototype.preload = function preload()
{
	let self = this;

	(self.load).image("test", "../images/icon.png");
}

/**
 * Function to create the scene.
 */
MainScene.prototype.create = function create()
{
	let self = this;

	(self.add).image(200, 200, "test");	
}
