var require = meteorInstall({"lib":{"routes.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/routes.js                                                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
if (Meteor.isClient) {                                               // 1
	Accounts.onLogin(function () {                                      // 2
		FlowRouter.go('recipe-book');                                      // 3
	});                                                                 // 4
	Accounts.onLogout(function () {                                     // 6
		FlowRouter.go('home');                                             // 7
	});                                                                 // 8
}                                                                    // 9
                                                                     //
FlowRouter.triggers.enter([function (context, redirect) {            // 10
	if (!Meteor.userId()) {                                             // 11
		FlowRouter.go('home');                                             // 12
	}                                                                   // 13
}]);                                                                 // 14
FlowRouter.route('/', {                                              // 16
	name: 'home',                                                       // 17
	action: function () {                                               // 18
		if (Meteor.userId()) {                                             // 19
			FlowRouter.go('recipe-book');                                     // 20
		}                                                                  // 21
                                                                     //
		GAnalytics.pageview();                                             // 22
		BlazeLayout.render('HomeLayout');                                  // 23
	}                                                                   // 24
});                                                                  // 16
FlowRouter.route('/profile', {                                       // 27
	name: 'profile',                                                    // 28
	action: function () {                                               // 29
		if (Meteor.userId()) {                                             // 30
			FlowRouter.go('profile');                                         // 31
		}                                                                  // 32
                                                                     //
		GAnalytics.pageview();                                             // 33
		BlazeLayout.render('MainLayout');                                  // 34
	}                                                                   // 35
});                                                                  // 27
FlowRouter.route('/recipe-book', {                                   // 38
	name: 'recipe-book',                                                // 39
	action: function () {                                               // 40
		if (Meteor.userId()) {                                             // 41
			FlowRouter.go('recipe-book');                                     // 42
		}                                                                  // 43
                                                                     //
		GAnalytics.pageview();                                             // 44
		BlazeLayout.render('MainLayout', {                                 // 45
			main: 'Recipes'                                                   // 45
		});                                                                // 45
	}                                                                   // 46
});                                                                  // 38
FlowRouter.route('/recipe/:id', {                                    // 49
	name: 'recipe',                                                     // 50
	action: function () {                                               // 51
		GAnalytics.pageview();                                             // 52
		BlazeLayout.render('MainLayout', {                                 // 53
			main: 'RecipeSingle'                                              // 53
		});                                                                // 53
	}                                                                   // 54
});                                                                  // 49
FlowRouter.route('/menu', {                                          // 57
	name: 'menu',                                                       // 58
	action: function () {                                               // 59
		BlazeLayout.render('MainLayout', {                                 // 60
			main: 'Menu'                                                      // 60
		});                                                                // 60
	}                                                                   // 61
});                                                                  // 57
FlowRouter.route('/shopping-list', {                                 // 64
	name: 'shopping-list',                                              // 65
	action: function () {                                               // 66
		BlazeLayout.render('MainLayout', {                                 // 67
			main: 'ShoppingList'                                              // 67
		});                                                                // 67
	}                                                                   // 68
});                                                                  // 64
///////////////////////////////////////////////////////////////////////

}},"collections":{"recipes.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// collections/recipes.js                                            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Recipes = new Mongo.Collection('recipes');                           // 1
Recipes.allow({                                                      // 3
	insert: function (userId, doc) {                                    // 4
		return !!userId;                                                   // 5
	},                                                                  // 6
	update: function (userId, doc) {                                    // 7
		return !!userId;                                                   // 8
	}                                                                   // 9
});                                                                  // 3
Ingredient = new SimpleSchema({                                      // 12
	name: {                                                             // 13
		type: String                                                       // 14
	},                                                                  // 13
	amount: {                                                           // 16
		type: String                                                       // 17
	},                                                                  // 16
	price: {                                                            // 19
		type: String                                                       // 20
	}                                                                   // 19
});                                                                  // 12
RecipeSchema = new SimpleSchema({                                    // 24
	name: {                                                             // 25
		type: String,                                                      // 26
		label: "Name"                                                      // 27
	},                                                                  // 25
	desc: {                                                             // 29
		type: String,                                                      // 30
		label: "Description"                                               // 31
	},                                                                  // 29
	ingredients: {                                                      // 33
		type: [Ingredient]                                                 // 34
	},                                                                  // 33
	totalPrice: {                                                       // 36
		type: String,                                                      // 37
		label: "Total Meal Cost:"                                          // 38
	},                                                                  // 36
	inMenu: {                                                           // 40
		type: Boolean,                                                     // 41
		defaultValue: false,                                               // 42
		optional: true,                                                    // 43
		autoform: {                                                        // 44
			type: "hidden"                                                    // 45
		}                                                                  // 44
	},                                                                  // 40
	author: {                                                           // 48
		type: String,                                                      // 49
		label: "Author",                                                   // 50
		autoValue: function () {                                           // 51
			return this.userId;                                               // 52
		},                                                                 // 53
		autoform: {                                                        // 54
			type: "hidden"                                                    // 55
		}                                                                  // 54
	},                                                                  // 48
	createdAt: {                                                        // 58
		type: Date,                                                        // 59
		label: "Created At",                                               // 60
		autoValue: function () {                                           // 61
			return new Date();                                                // 62
		},                                                                 // 63
		autoform: {                                                        // 64
			type: "hidden"                                                    // 65
		}                                                                  // 64
	}                                                                   // 58
});                                                                  // 24
Meteor.methods({                                                     // 70
	toggleMenuItem: function (id, currentState) {                       // 71
		Recipes.update(id, {                                               // 72
			$set: {                                                           // 73
				inMenu: !currentState                                            // 74
			}                                                                 // 73
		});                                                                // 72
	},                                                                  // 77
	deleteRecipe: function (id) {                                       // 78
		Recipes.remove(id);                                                // 79
	}                                                                   // 80
});                                                                  // 70
Recipes.attachSchema(RecipeSchema);                                  // 83
///////////////////////////////////////////////////////////////////////

}},"server":{"init.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/init.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.startup(function () {});                                      // 1
///////////////////////////////////////////////////////////////////////

},"publish.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/publish.js                                                 //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.publish('recipes', function () {                              // 1
	return Recipes.find({                                               // 2
		author: this.userId                                                // 2
	});                                                                 // 2
});                                                                  // 3
Meteor.publish('SingleRecipe', function (id) {                       // 5
	check(id, String);                                                  // 6
	return Recipes.find({                                               // 7
		_id: id                                                            // 7
	});                                                                 // 7
});                                                                  // 8
///////////////////////////////////////////////////////////////////////

}},"intermediate.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// intermediate.js                                                   //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
if (Meteor.isServer) {                                               // 1
  Meteor.startup(function () {// code to run on server at startup    // 2
  });                                                                // 4
}                                                                    // 5
///////////////////////////////////////////////////////////////////////

}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./lib/routes.js");
require("./collections/recipes.js");
require("./server/init.js");
require("./server/publish.js");
require("./intermediate.js");
//# sourceMappingURL=app.js.map
