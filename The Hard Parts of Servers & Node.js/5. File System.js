/* File System

We have much of our twitter app set up now -
handling, inspecting and responding to these
messages (‘requests’) is the core of our app, of
Node, and of servers

	— But, Node can do even more. We have an archive of
	tweets stored in a huge file (1.5GB)

	— Unfortunately they’re saved on our computer, not in
	our little JavaScript-specific data store (JavaScript
	memory)

	— Could we load them into JavaScript to run a function
	that removes bad tweets?

	— We can use fs to do so but there might be some issues
	with a file that large

Importing our tweets with fs

function cleanTweets (tweetsToClean){
	// code that removes bad tweets
}

function useImportedtweets(errorData, data){
	const cleanedTweetsJson = cleanTweets(data);
	const tweetsObj = JSON.parse(cleanedTweetsJson)
	console.log(tweetsObj.tweet2)
}

fs.readFile('./tweets.json', useImportedtweets)

	— Every file has a ‘path’ (a link - like a domestic url)

	— JSON is a javascript-ready data format

 */