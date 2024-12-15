const db = require("./DataBase/db.json");
const http = require("http");
const port = 3001;

const server = http.createServer((req, res) => {
  const { url } = req;
  res.writeHead(200, { "Content-Type": "application/json" });
  if (url === "/") {
    res.write(JSON.stringify(db));
    res.end();
  } else if (url === "/icons") {
    res.write(JSON.stringify(db.icons));
    res.end();
  } else if (url === "/storySlider") {
    res.write(JSON.stringify(db.storySlider));
    res.end();
  } else if (url === "/categorizeShopping") {
    res.write(JSON.stringify(db.categorizeShopping));
    res.end();
  } else if (url === "/clientTaste") {
    res.write(JSON.stringify(db.clientTaste));
    res.end();
  } else if (url === "/clientTaste2") {
    res.write(JSON.stringify(db.clientTaste2));
    res.end();
  } else if (url === "/mostPopularBrands") {
    res.write(JSON.stringify(db.mostPopularBrands));
    res.end();
  } else if (url === "/selectedOffer") {
    res.write(JSON.stringify(db.selectedOffer));
    res.end();
  } else if (url === "/partnerShip") {
    res.write(JSON.stringify(db.partnerShip));
    res.end();
  } else if (url === "/partnerShip2") {
    res.write(JSON.stringify(db.partnerShip2));
    res.end();
  } else if (url === "/partnerShip3") {
    res.write(JSON.stringify(db.partnerShip3));
    res.end();
  } else if (url === "/partnerShip4") {
    res.write(JSON.stringify(db.partnerShip4));
    res.end();
  } else if (url === "/readingBlog") {
    res.write(JSON.stringify(db.readingBlog));
    res.end();
  } else if (url === "/mostSell") {
    res.write(JSON.stringify(db.mostSell));
    res.end();
  } else if (url === "/mainSlider") {
    res.write(JSON.stringify(db.mainSlider));
    res.end();
  } else if (url === "/superMarket") {
    res.write(JSON.stringify(db.superMarket));
    res.end();
  } else if (url === "/features") {
    res.write(JSON.stringify(db.features));
    res.end();
  } else if (url === "/withDigikala") {
    res.write(JSON.stringify(db.withDigikala));
    res.end();
  } else if (url === "/customer") {
    res.write(JSON.stringify(db.customer));
    res.end();
  } else if (url === "/guide") {
    res.write(JSON.stringify(db.guide));
    res.end();
  } else if (url === "/digiChild") {
    res.write(JSON.stringify(db.digiChild));
    res.end();
  } else if (url === "/amazingSlider") {
    res.write(JSON.stringify(db.amazingSlider));
    res.end();
  }
});

server.listen(port, () => {
  console.log(`server run on http://localhost:${port}`);
});
