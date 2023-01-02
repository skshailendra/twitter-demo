import { createHttpEffect } from "@servicenow/ui-effect-http";
import {
	REST_URL,
	FETCH_REQUESTED,
	FETCH_STARTED,
	FETCH_SUCCESS,
	FETCH_FAILED,
	SEARCH_REQUESTED,
} from "./constant";

// Dispatch Actions for API Calling
export default {
	[SEARCH_REQUESTED]: ({ dispatch, updateState, action }) => {
		const {
			payload: { searchString },
		} = action;
		dispatch(FETCH_REQUESTED);
	},
	[FETCH_REQUESTED]: createHttpEffect(REST_URL, {
		headers: {
			Authorization:
				"Bearer AAAAAAAAAAAAAAAAAAAAAFXxkQEAAAAAFJJz8GGrBMP92SCQ3hXAoG%2FCJBs%3DC00CQ0KlwNbxlkKJcq9a45J4MYvmPhwf8Oyl0HDjwdtz9mjzNz",
		},
		batch: false,
		startActionType: FETCH_STARTED,
		successActionType: FETCH_SUCCESS,
		errorActionType: FETCH_FAILED,
	}),
	[FETCH_STARTED]: ({ updateState }) => {
		updateState({ isLoading: true });
	},
	[FETCH_SUCCESS]: ({ action, updateState }) => {
		const {
			payload: { result = [] },
		} = action;
		console.log("Actions", action);
		updateState({
			isLoading: false,
			result,
		});
	},
	[FETCH_FAILED]: ({ action, updateState }) => {
		const {
			type,
			payload: {
				statusText,
				data: {
					error: { message },
				},
			},
		} = action;
		console.error(`[${type}] ${statusText}: ${message}!`); // eslint-disable-line no-console
		updateState({ isLoading: false, result: [] });
	},
};
