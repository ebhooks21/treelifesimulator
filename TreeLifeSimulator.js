/**
* TreeLifeSimulator.js -- Entry point for the Tree Life Simulator game.
* */

/**
* Function to initialize the game.
*/
function init()
{
	//Get the window
	//var window = (nw.Window).get();

	nw.Window.open('./views/main.html', {}, function(win)
	{
		//Initialize the window
		win.resizeTo(800, 600);
		win.title = "Tree Life Simulator";
		win.moveTo(10, 10);

		setTimeout(function()
		{
			win.setResizable(false);
		}, 3000);
	});
}

init();
