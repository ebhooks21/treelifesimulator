/**
 * Tree.js -- File to store the tree class.
 */

class Tree
{
	/**
	 * Constructor for the tree class.
	 */
	constructor(name)
	{
		this.name = name;
		this.branches = [];
		this.leaves = [];
		this.roots = [];

		this.sunLevel = 0;
		this.waterLevel = 0;
	}

	/**
	 * Function to get the number of branches the tree has.
	 */
	getNumBranches()
	{
		return (this.branches).length;
	}
}

module.exports = Tree;
