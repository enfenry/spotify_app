// module.exports = {
//     // mongoURI: process.env.MONGODB_URI,
//     // origin: process.env.ORIGIN,
//     // s3_key: process.env.AWS_ACCESS_KEY_ID,
//     // s3_secret: process.env.AWS_ACCESS_KEY_ID
//     // awsREGION: process.env.AWS_DEFAULT_REGION
// }

// console.log("Keys loaded");

module.exports = {
    google: process.env.REACT_APP_GOOGLE_KEY,
    spotify: {
        id: process.env.REACT_APP_SPOTIFY_ID,
        secret: process.env.REACT_APP_SPOTIFY_SECRET
    },
    ticketmaster: process.env.REACT_APP_TICKETMASTER_KEY
};