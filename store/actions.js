import Store from ".";

export const setIsBack = (v) => {
	Store.update((s) => {
		s.isBack = v;
	});
};

export const setScrollPosition = (key, v) => {
	Store.update((s) => {
		s.yp[key] = v;
	});
};

export const setDynamicPagesYP = (key, v) => {
	Store.update((s) => {
		s.dynamicPagesYP[key] = v;
	});
};

export const emptyDynamicPagesYP = () => {
	Store.update((s) => {
		s.dynamicPagesYP = {};
	});
};
