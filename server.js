var popcms = require("popcms");


var username = "webuser1";
var password = "tyugiuh7698"; 
popcms.createServer(
		{
			templatePath : __dirname + '/html',
			staticFilePath :  __dirname + '/static',  
			adminEmails : [
				"john@eastpoint.co.uk",
				"amy@eastpoint.co.uk",
				"john@pudd.co.uk",
				"dan@eastpoint.co.uk"
			],
			secret : "nxfjkndkjlvnjkvnvndnv", 
			dbCollectionNamePrefix : "eastpoint-2017-",

				//connString :  "mongodb://127.0.0.1:27017/popcms",
				host : "127.0.0.1",
				port : "5000",
				httpOrHttps : "http",

			 connString :  "mongodb://"  + username + ":"  + password + "@sl-eu-lon-2-portal.3.dblayer.com:15695,sl-eu-lon-2-portal.1.dblayer.com:15695/websitecontent?ssl=true",
			// host : "v2017.eastpoint.co.uk",
			// port : "80",
			// httpOrHttps : "http",
			dev: { 
				connString :  "mongodb://127.0.0.1:27017/popcms",
				host : "127.0.0.1",
				port : "5000",
				httpOrHttps : "http",
			}, 
			live : {
				connString :  "mongodb://"  + username + ":"  + password + "@sl-eu-lon-2-portal.3.dblayer.com:15695,sl-eu-lon-2-portal.1.dblayer.com:15695/websitecontent?ssl=true",
				host : "v2017.eastpoint.co.uk",
				port : "80",
				httpOrHttps : "http",
			},
			sendgrid: {
			    username: "naresht",
			    password: "94roberto",
			    contactMailTo: "info@eastpoint.co.uk",
			    contactMailFrom: "info@eastpoint.co.uk",
			    contactSubject: "Contact from Eastpoint website" 
			},
			googleAuth : {
				clientID      : '691678409776-3f3jkkulnggesjatp8rm7e7rj64660so.apps.googleusercontent.com',
				clientSecret  : '7VSRlxOwx0t6ayH1FG0XMfRt', 
				//https://console.developers.google.com/apis/credentials/oauthclient/691678409776-3f3jkkulnggesjatp8rm7e7rj64660so.apps.googleusercontent.com?project=691678409776
			},
			navigation : [
				{name:"home", url:"/"},
				{
					name:"services", 
					url:"/services/",
					pages : [
						{name:"intro", url:"/services/"},
						{name:"web services", url:"/services/web/"}
						]
					},
				{name:"contact", url:"/contact-us/"}
			]
		}
);
 