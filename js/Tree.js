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

	/**
	 * Function to display the tree information.
	 */
	displayTreeInformation($)
	{
		$("#treeinformationarea-treename").html(this.name);

		//Calculate and display the number of branches
		$("#treeinformationarea-numbranches").html((this.calculateNumberOfBranches(null)));

		//Calculate and display the number of leaves
		$("#treeinformationarea-numleaves").html((this.calculateNumberOfLeaves(null)));
	}

	/**
	 * Function to calculate the number of leaves
	 */
	calculateNumberOfLeaves(branch)
	{
		var numLeaves = 0;

		if(branch == null)
		{
			numLeaves += (this.leaves).length;

			if((this.branches).length > 0)
			{
				for(branch in branches)
				{
					numLeaves += this.calculateNumberOfLeaves(branches[branch]);
				}
			}
		}

		else
		{
			numLeaves += branch.getNumLeaves();
		}

		return numLeaves;
	}

	/**
	 * Function to calculate the number of branches
	 */
	calculateNumberOfBranches(branch)
	{
		var numBranches = 0;

		if(branch == null)
		{
			numBranches += (this.branches).length;

			if((this.branches).length > 0)
			{
				for(branch in branches)
				{
					numBranches += this.calculateNumberOfBranches(branches[branch]);
				}
			}
		}

		else
		{
			numBranches += branch.getNumBranches();
		}

		return numBranches;
	}
}

module.exports = Tree;
