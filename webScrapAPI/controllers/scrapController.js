const scrapService = require("../services/scrapService");

exports.scrap = (async) => (req, res) => {
  console.log("Scrapping in Controller");
  scrapService.scrap();
};
