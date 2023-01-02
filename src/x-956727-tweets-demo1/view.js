import { SEARCH_REQUESTED } from "./constant";
import "@servicenow/now-icon";
const getDateFunction = (date) => {
	const newDate = new Date(date);
	const monthList = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	let month = monthList[newDate.getMonth()];
	let dateIn = newDate.getDate();
	return dateIn + month;
};
const view = (state, { dispatch, updateState }) => {
	const { data, includes } = state;
	const { media, users } = includes;
	const { text, public_metrics } = data[0];
	const { inputVal } = state;
	const getPostDate = getDateFunction(users[0]["created_at"]);
	const onSearchId = (e) => {
		dispatch(SEARCH_REQUESTED, { searchString: e.target.value.trim() });
	};
	return (
		<div className="main-container">
			<now-input
				helper-content=""
				label="Twitter Id *"
				messages={[]}
				placeholder=""
				step="any"
				type="text"
				value={inputVal}
				on-blur={(e) => onSearchId(e)}
			></now-input>
			{/* <input
				className="now-agent-assist-search-input"
				placeholder="Twitter"
				value={inputVal}
				on-blur={onSearchId}
			></input> */}
			<div className="tweet-component">
				<now-card size="sm" interaction="none" className="tweet-card">
					<div className="tweet-container">
						<div className="tweet-header">
							<img
								src={users && users[0] && users[0]["profile_image_url"]}
								alt="profile-image"
								className="avator"
							/>
							<div className="tweets-info">
								<span className="tweet-heading">{users[0].name}</span>
								<span className="tweet-id">
									@{users[0].username} .{getPostDate}
								</span>
								<p className="tweet-post">{text}</p>
							</div>
						</div>
						{media && media[0] && media[0]["url"] && (
							<div className="tweet-image">
								<img
									src={media[0].url}
									alt={media[0].alt_text}
									style={{
										width: media[0].width,
										height: media[0].height,
									}}
									className="tweet-img"
								/>
							</div>
						)}

						<div className="tweet-footer">
							<span>
								<now-icon icon="chart-bar-column-fill" size="md"></now-icon>
							</span>
							<span>
								<now-icon icon="chat-outline" size="md"></now-icon>
								{public_metrics.quote_count}
							</span>
							<span>
								<now-icon icon="sync-outline" size="md"></now-icon>
								{public_metrics.retweet_count}
							</span>
							<span>
								<now-icon icon="thumbs-up-outline" size="md"></now-icon>
								{public_metrics.like_count}
							</span>
						</div>
					</div>
				</now-card>
			</div>
		</div>
	);
};
export default view;
