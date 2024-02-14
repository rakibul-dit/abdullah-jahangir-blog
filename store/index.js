import { Store as PullStateStore } from "pullstate";

const Store = new PullStateStore({
	isBack: false,
	yp: {},
	dynamicPagesYP: {},
	isTab: true,
});

export default Store;
