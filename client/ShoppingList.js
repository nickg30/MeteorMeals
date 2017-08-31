Template.ShoppingList.onCreated(function(){
	var self = this;
	self.autorun(function (){
		self.subscribe('recipes');
	});
});

Template.ShoppingList.helpers({
	shoppingList: ()=> {
		return Recipes.find({inMenu: true});
	},
	checkoutButton: ()=> {
		//console.log(Recipes.findOne({name: "BisBurger"}))
		if(Recipes.findOne({inMenu: true})) {
			return true;
		} else {
			return false;
		}
		return false;
	}
});