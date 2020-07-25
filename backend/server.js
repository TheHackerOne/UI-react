// const express = require("express");
// const ig = require("instagram-scraping"); // 12 posts
// const app = express();

// app.use("/", (req, res, next) => {
// 	ig.scrapeUserPage("advertere.tms").then((result) => {
// 		const postCount = result.user.edge_owner_to_timeline_media.count;
// 		const imgURL = result.user.edge_owner_to_timeline_media.edges.map(edge => {
// 			return edge.node.thumbnail_resources[0].src
// 		})
		
// 		res.send({ postCount: postCount, imgURL : imgURL});
// 		// console.log(postCount, imgURL)
// 	});
	// ig.scrapeUserPage("advertere.tms").then(({user}) => {
		
	// 	res.send({ msg: user });
	// });
// });












// const instagramPosts = require("instagram-posts"); //20 posts

// app.use("/", async (req, res, next) => {
// 	const posts = await instagramPosts("advertere.tms");
// 	res.send({ posts: posts });
// 	console.log(posts.length);
// });
// (async () => {
// 	const posts = await instagramPosts("advertere.tms");
// 	res.send({ posts: posts });
// })();

// app.listen(3000, () => {
// 	console.log("succesfully connected to port 3000");
// });

// const axios = require("axios");
// const cheerio = require("cheerio");
// const app = express();
// let html;
// https://support.glitch.com/t/any-way-to-access-node-js-console/14000/7
// https://www.instagram.com/advertere.tms/'
// app.use("/hello", (req, res, next) => {
	// axios
	// .get("https://www.jamesqquick.com/blog")
	// .then((res) => {
		// 	console.log("object")
		// 	let html = cheerio.load(res.data);
		// 	console.log(html);
		// })
		// .catch((err) => console.log("err is here"));
		












		
// const express = require("express");
// const app = express();
// const rp = require("request-promise");
// const cheerio = require("cheerio");
// const options = {
// 	uri: `https://www.google.com`,
// 	transform: function (body) {
// 		return cheerio.load(body);
// 	},
// };

// rp(options)
// 	.then(($) => {
// 		console.log($);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// app.listen(5000, () => {
// 	console.log("successfully");
// });

