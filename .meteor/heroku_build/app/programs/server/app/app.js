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
FlowRouter.route('/recipe-book', {                                   // 27
	name: 'recipe-book',                                                // 28
	action: function () {                                               // 29
		if (Meteor.userId()) {                                             // 30
			FlowRouter.go('recipe-book');                                     // 31
		}                                                                  // 32
                                                                     //
		GAnalytics.pageview();                                             // 33
		BlazeLayout.render('MainLayout', {                                 // 34
			main: 'Recipes'                                                   // 34
		});                                                                // 34
	}                                                                   // 35
});                                                                  // 27
FlowRouter.route('/recipe/:id', {                                    // 38
	name: 'recipe',                                                     // 39
	action: function () {                                               // 40
		GAnalytics.pageview();                                             // 41
		BlazeLayout.render('MainLayout', {                                 // 42
			main: 'RecipeSingle'                                              // 42
		});                                                                // 42
	}                                                                   // 43
});                                                                  // 38
FlowRouter.route('/menu', {                                          // 46
	name: 'menu',                                                       // 47
	action: function () {                                               // 48
		BlazeLayout.render('MainLayout', {                                 // 49
			main: 'Menu'                                                      // 49
		});                                                                // 49
	}                                                                   // 50
});                                                                  // 46
FlowRouter.route('/shopping-list', {                                 // 53
	name: 'shopping-list',                                              // 54
	action: function () {                                               // 55
		BlazeLayout.render('MainLayout', {                                 // 56
			main: 'ShoppingList'                                              // 56
		});                                                                // 56
	}                                                                   // 57
});                                                                  // 53
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
	}                                                                   // 16
});                                                                  // 12
RecipeSchema = new SimpleSchema({                                    // 21
	name: {                                                             // 22
		type: String,                                                      // 23
		label: "Name"                                                      // 24
	},                                                                  // 22
	desc: {                                                             // 26
		type: String,                                                      // 27
		label: "Description"                                               // 28
	},                                                                  // 26
	ingredients: {                                                      // 30
		type: [Ingredient]                                                 // 31
	},                                                                  // 30
	inMenu: {                                                           // 33
		type: Boolean,                                                     // 34
		defaultValue: false,                                               // 35
		optional: true,                                                    // 36
		autoform: {                                                        // 37
			type: "hidden"                                                    // 38
		}                                                                  // 37
	},                                                                  // 33
	author: {                                                           // 41
		type: String,                                                      // 42
		label: "Author",                                                   // 43
		autoValue: function () {                                           // 44
			return this.userId;                                               // 45
		},                                                                 // 46
		autoform: {                                                        // 47
			type: "hidden"                                                    // 48
		}                                                                  // 47
	},                                                                  // 41
	createdAt: {                                                        // 51
		type: Date,                                                        // 52
		label: "Created At",                                               // 53
		autoValue: function () {                                           // 54
			return new Date();                                                // 55
		},                                                                 // 56
		autoform: {                                                        // 57
			type: "hidden"                                                    // 58
		}                                                                  // 57
	}                                                                   // 51
});                                                                  // 21
Meteor.methods({                                                     // 63
	toggleMenuItem: function (id, currentState) {                       // 64
		Recipes.update(id, {                                               // 65
			$set: {                                                           // 66
				inMenu: !currentState                                            // 67
			}                                                                 // 66
		});                                                                // 65
	},                                                                  // 70
	deleteRecipe: function (id) {                                       // 71
		Recipes.remove(id);                                                // 72
	}                                                                   // 73
});                                                                  // 63
Recipes.attachSchema(RecipeSchema);                                  // 76
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
