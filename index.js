const db = require("./DataBase/db.json");
const http = require("http");
const port = 3001;

const server = http.createServer((req, res) => {
  const { url } = req;

  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allowed HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allowed headers

  // Handle preflight OPTIONS requests for CORS
  if (req.method === "OPTIONS") {
    res.writeHead(204); // No content
    res.end();
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });

  if (url === "/") {
    res.write(JSON.stringify(db));
  } else if (url === "/icons") {
    res.write(JSON.stringify(db.icons));
  } else if (url === "/storySlider") {
    res.write(JSON.stringify(db.storySlider));
  } else if (url === "/categorizeShopping") {
    res.write(JSON.stringify(db.categorizeShopping));
  } else if (url === "/clientTaste") {
    res.write(JSON.stringify(db.clientTaste));
  } else if (url === "/clientTaste2") {
    res.write(JSON.stringify(db.clientTaste2));
  } else if (url === "/mostPopularBrands") {
    res.write(JSON.stringify(db.mostPopularBrands));
  } else if (url === "/selectedOffer") {
    res.write(JSON.stringify(db.selectedOffer));
  } else if (url === "/partnerShip") {
    res.write(JSON.stringify(db.partnerShip));
  } else if (url === "/partnerShip2") {
    res.write(JSON.stringify(db.partnerShip2));
  } else if (url === "/partnerShip3") {
    res.write(JSON.stringify(db.partnerShip3));
  } else if (url === "/partnerShip4") {
    res.write(JSON.stringify(db.partnerShip4));
  } else if (url === "/readingBlog") {
    res.write(JSON.stringify(db.readingBlog));
  } else if (url === "/mostSell") {
    res.write(JSON.stringify(db.mostSell));
  } else if (url === "/mainSlider") {
    res.write(JSON.stringify(db.mainSlider));
  } else if (url === "/superMarket") {
    res.write(JSON.stringify(db.superMarket));
  } else if (url === "/features") {
    res.write(JSON.stringify(db.features));
  } else if (url === "/withDigikala") {
    res.write(JSON.stringify(db.withDigikala));
  } else if (url === "/customer") {
    res.write(JSON.stringify(db.customer));
  } else if (url === "/guide") {
    res.write(JSON.stringify(db.guide));
  } else if (url === "/digiChild") {
    res.write(JSON.stringify(db.digiChild));
  } else if (url === "/amazingSlider") {
    res.write(JSON.stringify(db.amazingSlider));
  } else if (url === "/popularCities") {
    res.write(JSON.stringify(db.popularCities));
  } else if (url === "/allCities") {
    res.write(JSON.stringify(db.allCities));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ error: "Not Found" }));
  }

  res.end();
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
