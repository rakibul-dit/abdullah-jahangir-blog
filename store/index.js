import { Store as PullStateStore } from "pullstate";

const Store = new PullStateStore({
	isBack: false,
	yp: {},
	dynamicPagesYP: {},
});

export default Store;
