import { createSelector } from "reselect";

const getState = (state) => state;

export const getIsBack = createSelector(getState, (state) => state.isBack);
export const getScrollPosition = createSelector(getState, (state) => state.yp);
export const getDynamicPagesYP = createSelector(
	getState,
	(state) => state.dynamicPagesYP
);
export const getIsTab = createSelector(getState, (state) => state.isTab);
