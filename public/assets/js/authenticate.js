// Necessary documentation to authenticate a user is listed below.

// To request an authorization code, 
// you must direct the user's browser to LinkedIn's
// OAuth 2.0 authorization endpoint.  
// Once the request is made, 
// one of the following two situations will occur:

// 1. If the user has not previously accepted the application's permission request, 
// or the grant has expired or been manually revoked by the user, 
// the browser will be redirected to LinkedIn's authorization screen (shown here: https://developer.linkedin.com/docs/oauth2).  
// When the user completes the authorization process, the browser is redirected 
// to the URL provided in the redirect_uri query parameter.

// 2. If there is a valid existing permission grant from the user, 
// the authorization screen is by-passed and 
// the user is immediately redirected to the URL provided in the redirect_uri query parameter.

var authorizationURL = 
"https://www.linkedin.com/oauth/v2/authorization?" +
"response_type=code&" + 
"client_id=78nnd61xa8po8u&" +
"redirect_uri=https://the-guilds.herokuapp.com/&" +
"state=DCEeFWf45A53sdfKef424&" +
"scope=r_basicprofile";

// When the user provides valid Linkedin credentials and clicks the "Allow Access" button,
// they approve your app's request to access their member data and interact with Linkedin
// Linkedin then sends the user back to the callback url you defined in redirect_uri

$.get("/api/all", function(data) {

})

// Retrieve basic profile data for the user:
// https://developer.linkedin.com/docs/fields/basic-profile
// The member's id (unique for the member)
// The first & last name of the member
// The member's headline
// The industry the member belongs to
// The text area describing the member's professional profile
// An object representing the member's current position (title chosen)
		// https://developer.linkedin.com/docs/fields/positions
// The URL to the member's authenticated profile on Linkedin (must be )
var basicProfileURL = 
"https://api.linkedin.com/v1/people/~:" + 
"(id,firstName,lastName,headline,industry,summary,position.title,site-standard-profile-request)?format=json";

$.get("/api/all", function(data) {

})