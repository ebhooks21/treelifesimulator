/**
 * MainScene.js -- File to hold the inforamtion for the main scene.
 */

class MainScene
{
	/**
	 * Function to preload assets for the main scene.
	 */
	preload()
	{
		let self = this;

		(self.load).image("test", "../images/icon.png");
	}

	/**
	 * Function to create the scene.
	 */
	create()
	{
		let self = this;

		(self.add).image(200, 200, "test");	
	}
}

module.exports = MainScene;
