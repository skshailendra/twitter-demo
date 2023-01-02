export const CARDS = {
	title: "Steve",
	id: "@Steve Roger",
	date: "Jun 27",
	post: "If you're tired of using outline styles for secondary buttons, a soft solid background based on the text color can be a great alternative",
};

export const REST_URL =
	"https://api.twitter.com/2/tweets?ids=1601580012657852418&tweet.fields=attachments,author_id,conversation_id,created_at,edit_controls,edit_history_tweet_ids,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,public_metrics,referenced_tweets,reply_settings,source,text,withheld&expansions=attachments.media_keys,attachments.poll_ids,author_id,edit_history_tweet_ids,entities.mentions.username,geo.place_id,in_reply_to_user_id,referenced_tweets.id,referenced_tweets.id.author_id&media.fields=alt_text,duration_ms,height,media_key,non_public_metrics,organic_metrics,preview_image_url,promoted_metrics,public_metrics,type,url,variants,width&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld&place.fields=contained_within,country,country_code,full_name,geo,id,name,place_type";
export const SEARCH_REQUESTED = "SEARCH_REQUESTED";
export const FETCH_REQUESTED = "FETCH_REQUESTED";
export const FETCH_STARTED = "FETCH_STARTED";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILED = "FETCH_FAILED";
