export const server =
	!process.env.NODE_ENV || process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://blog-dev1dit.vercel.app";

export const youtubeKeys = {
	key1: "AIzaSyBWEuVwCQzW32iZIn75_BGtJrgZ9LqQDmE",
	key2: "AIzaSyDUCJuapfrKsBgFdDjdpAEUvAG3VvogmXo",
	key3: "AIzaSyCdpd6V9fNPDEDLIAliGQkDmTki2P0bDTM",
	key4: "AIzaSyD0_xKUAf4o5i8xkvL7PbZW-s-KJsO_mTU",
};

export const youtube = {
	url: "https://www.googleapis.com/youtube/v3",
	key: youtubeKeys.key1,
	// channelID: 'UCbMys3ID_1S8D1mZuYkoG2A',
	// uploadPlaylistID: 'UUbMys3ID_1S8D1mZuYkoG2A'
	channelID: "UCWuvzUF7ZcRCAsWswzjNLbw",
	uploadPlaylistID: "UUWuvzUF7ZcRCAsWswzjNLbw",
	playlistChannelID: "UCMD8zSDhtqraYAx5ih98z-w",
};

export const constants = {
	DEFAULT_PAGE_LIMIT: 12,
	MAX_YOUTUBE_PAGE_LIMIT: 50,
	YOUTUBE_RELATED_VIDEOS_PAGE_LIMIT: 4,
	YOUTUBE_HOME_PAGE_RECENT_VIDEOS: 6,
	SOME_IMPORTANT_LECTURES: 6,
	GENERATED_ANS_PAGE: 10,
	BOOKS_PER_REQ: 8,
};

export const receiverEmail = "assunnahtrust@gmail.com";
export const emailSenderName = "DIT Web Client";
