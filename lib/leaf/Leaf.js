/**
 * Leaf.js -- File to store the leaf class.
 */

class Leaf
{
	/**
	 * Constructor for the leaf class.
	 */
	constructor()
	{
		this.sunLightRequired = 1;
		this.waterRequired = 1;
	}

	/**
	 * Function to get the amount of sun light required per day.
	 */
	getSunlightRequired()
	{
		return this.sunLightRequired;
	}

	/**
	 * Function to get the amount of water required per day.
	 */
	getWaterRequired()
	{
		return this.waterRequired;
	}
}

module.exports = Leaf;