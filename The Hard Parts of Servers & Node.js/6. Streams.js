/* Streams

What if Node used the ‘event’ (messagebroadcasting) pattern to send out a message (‘event’) each time a sufficient batch of the
json datahad been loaded in

And at each point, take that data and start cleaning it - in
batches

let cleanedTweets = "";

function cleanTweets (tweetsToClean){
	// algorithm to remove bad tweets from `tweetsToClean`
}

function doOnNewBatch(data){
	cleanedTweets += cleanTweets(data);
}

const accessTweetsArchive = fs.createReadStream('./tweetsArchive.json')

accessTweetsArchive.on('data', doOnNewBatch);

Introducing Event loop and Callback Queue
 
*/