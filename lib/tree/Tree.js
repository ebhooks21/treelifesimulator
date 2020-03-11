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
		this.age = 0;
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
		let ageRep = 0;

		$("#treeinformationarea-treename").html(this.name);

		//Calculate and display the number of branches
		$("#treeinformationarea-numbranches").html((this.calculateNumberOfBranches(null)));

		//Calculate and display the number of leaves
		$("#treeinformationarea-numleaves").html((this.calculateNumberOfLeaves(null)));

		//Calculate and display the number of roots
		$("#treeinformationarea-numroots").html((this.calculateNumberOfRoots(null)));

		//Display the current amount of stored sunlight
		$("#treeinformationarea-collectedsunlight").html(this.sunLevel);

		//Display the current amount of stored water
		$("#treeinformationarea-collectedwater").html(this.waterLevel);

		//Display the age of the tee
		if(this.age < 365)
		{
			ageRep = this.age + " days";
		}

		else
		{
			ageRep = (this.age / 365) + " years";
		}

		$("#treeinformationarea-age").html(ageRep);
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
					numLeaves += this.calculateNumberOfLeaves(this.branches[branch]);
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
					numBranches += this.calculateNumberOfBranches(this.branches[branch]);
				}
			}
		}

		else
		{
			numBranches += branch.getNumBranches();
		}

		return numBranches;
	}

	/**
	 * Function to calculate the number of roots
	 */
	calculateNumberOfRoots(root)
	{
		var numRoots = 0;

		if(root == null)
		{
			numRoots += (this.roots).length;

			if((this.roots).length > 0)
			{
				for(root in roots)
				{
					numRoots += this.calculateNumberOfRoots(this.roots[root]);
				}
			}
		}

		else
		{
			numRoots += root.getNumRoots();
		}

		return numRoots;
	}

	/**
	 * Function to age the tree by 1 day.
	 */
	ageTreeOneDay()
	{
		this.age++;
	}
}

module.exports = Tree;
