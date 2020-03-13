/**
 * Root.js -- File to store the root class.
 */

class Root
{
	/**
	 * Constructor for the root class.
	 */
	constructor()
	{
		this.sunLightRequired = 1;
		this.waterRequired = 1;
		this.roots = [];
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

	/**
	 * Function to get the number of roots off of this root.
	 */
	getNumRoots()
	{
		return this.calculateNumberOfRoots(null);
	}

	/**
	 * Function to calculate the number of roots
	 */
	calculateNumberOfRoots(root)
	{
		let numRoots = 0;

		if(root == null)
		{
			numRoots += (this.roots).length;

			if((this.roots).length > 0)
			{
				for(root in this.roots)
				{
					numRoots += this.calculateNumberOfRoots(this.roots[root]);
				}
			}
		}

		else
		{
			root.getNumRoots();
		}

		return numRoots;
	}
}

module.exports = Root;