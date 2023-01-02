import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import "@servicenow/now-input";
import "@servicenow/now-card";
import view from "./view";
import { RESPONSE } from "./responseJson";
import actionHandlers from "./actionHandler";
// Custom Components for Tweets using Response from Tweets
createCustomElement("x-956727-tweets-demo1", {
	renderer: { type: snabbdom },
	view,
	initialState: {
		...RESPONSE,
		inputVal: "",
	},
	styles,
	actionHandlers,
});
