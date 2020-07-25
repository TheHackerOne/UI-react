const express = require("express");
const ig = require("instagram-scraping"); // 12 posts
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.use("/getApiData", (req, res, next) => {
  ig.scrapeUserPage("advertere.tms").then((result) => {
    const postCount = result.user.edge_owner_to_timeline_media.count;
    const imgURL = result.user.edge_owner_to_timeline_media.edges.map(edge => {
      return edge.node.thumbnail_resources[0].src
    })

    res.send({ postCount: postCount, imgURL: imgURL });
    // console.log(postCount, imgURL)
  })
})

  app.listen(5000, () => {
    console.log("succesfully connected to port 5000");
  })


