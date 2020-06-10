<h1>The Problem Solving Framework : 'UPER'</h1>

* U = "Understand"
* P = "Plan"
* E = "Execute"
* R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>

The "problem" is to create the front end of an e-commerce website.  It will contain, at minimum, a 
Products view and a Shopping Cart view.  The inventory will consist of at least 10 items and there will be a search bar to filter out the displayed items by name.

<h2>
    2. Planning the Solution
</h2>

The Products view will contain information about each specific product as well as a button to add that product to the cart.  It will also display the quantity of that item available.  It will have a search bar that will dynamically filter the items in the view based on the name typed into the search bar.

The Shopping Cart view will be mostly hidden off-screen on the right-hand side of the page with only a tab visible.  When the tab is hovered over, the Shopping Cart view will slide into view over top of the Products view.  It will contain all items that were added to the cart from the Display page as well as a button for each item to remove it from the Shopping Cart.  Finally, it will have a single "Buy Now" button to purchase all items currently in the shopping cart.  Upon clicking the "Buy Now" button, the quantity of each item on the Display view will be updated to reflect the new quantity.


<h2>
    3. Executing the Plan
</h2>

The app will contain at least four components.  The Main component will be the parent of the other three.  It will contain a significant amount of the logic for the app as a whole, as well as maintaining the state tied to each of the other three components.

The Search component will be only a search bar.  It will dynamically communicate with the Main component which will, in turn, filter out the items NOT matching the search criteria and pass the matching items to the Display component.

The Display component will display all items passed to it from the Main component.  It will have no logic to decide what to display itself; all logic will be contained within the Main component.  It will compose div's of each item to format the display appropriately and add the "Add To Cart" button to each item, as well as display the current quantity of that item currently on-hand.  When the "Add To Cart" button is clicked, it will pass information for that specific item back to the Main component, which will then add that item to the Shopping Cart state.

The Shopping Cart component will display all items contained in the Shopping Cart state in the Main component.  It will have an HTML 'select' element containing each number from 1 to the total number of that item currently on hand.  This will be used to select the quantity desired.  At the bottom, it will have the "Buy Now" button.  This button triggers the Main component to call back the information from the 'select' option tied to each item in the shopping cart.  The quantities in the inventory will then be updated to reflect the new value and that information passed back to the Display component.

<h2>
    4. Reflection / Refactor
</h2>
*
*
*
*
*
*
*
*