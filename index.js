//create an object labeled customer and add the following key:value pairs:

const customer={
firstName:	"jake",
lastName:	"smith",
email:	"jaekSmih!aol.com",
phone:	undefined,
zipCode:	"631"
favoriteFlavors:	32,
cupSize:	"medium",
favoriteStore:	"Target",
firstVisit:	false
};

//Modify the following properties in the customer object using bracket notation: 
//*change email
customer["email"]="Jak3Smith1992@email.com";
console.table(customer)
//*change phone #
customer["phone"]="3195551234";
console.table(customer)
//*change zipcode
customer["zipCode"]="63132";
console.table(customer)
//*change flavor 
customer["favoriteFlavors"]="coffee", "strawberry", and "matcha";
console.table(customer)

//* delete zipcode from object
delete customer["zipCode"];
console.table(customer)
//* delete favorite store
delete customer["favoriteStore"];
console.table(customer)

// Add the following key:values to the customer object using dot notation:
//*add toppings
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
console.table(customer)
//* add flavors
customer.futureFlavors = "mango";
console.table(customer)
//* add today's purchase cost
customer.todaysPurchaseCost = 5.32;
console.table(customer)

//In an array, print the keys in your survey
console.log(Object.keys(customer));
