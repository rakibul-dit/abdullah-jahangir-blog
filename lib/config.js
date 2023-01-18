export const server =
	!process.env.NODE_ENV || process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://blog-dev1dit.vercel.app";

export const youtubeKeys = {
	key1: "AIzaSyBWEuVwCQzW32iZIn75_BGtJrgZ9LqQDmE",
	key2: "AIzaSyD0_xKUAf4o5i8xkvL7PbZW-s-KJsO_mTU",
	key3: "AIzaSyCdpd6V9fNPDEDLIAliGQkDmTki2P0bDTM",
};

export const youtube = {
	url: "https://www.googleapis.com/youtube/v3",
	key: youtubeKeys.key1,
	// channelID: 'UCbMys3ID_1S8D1mZuYkoG2A',
	// uploadPlaylistID: 'UUbMys3ID_1S8D1mZuYkoG2A'
	channelID: "UCr-AkLFJhK0djI61Ze3vU8g",
	uploadPlaylistID: "UUr-AkLFJhK0djI61Ze3vU8g",
};

export const constants = {
	DEFAULT_PAGE_LIMIT: 12,
	MAX_YOUTUBE_PAGE_LIMIT: 50,
	YOUTUBE_RELATED_VIDEOS_PAGE_LIMIT: 4,
	YOUTUBE_HOME_PAGE_RECENT_VIDEOS: 6,
};
