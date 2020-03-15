const express = require('express');
const app = express();
const businessRoutes = express.Router();
const images = require("../data/Image-urls");


/*
 * Returns the list of all the images to the front end
 */

businessRoutes.route('/').get(function (req, res) {
  res.send(images.imageUrls);

});

/*
 *
 *  Returns the list 
 *  of all the images 
 *  filtered by resolution
 * 
 */


businessRoutes.route('/filterbyResolutions').get(function (req, res) {
  let list1 = [];
  let list2 = [];
  let list3 = [];
  let list4 = [];
  let list5 = [];
  for (const img of images.imageUrls) {
    displayedName = img.substring(img.lastIndexOf('/') + 1);
    displayedName = displayedName.replace(/-/g, ' ');
    var content = img.substring(img.lastIndexOf('/') - 3);
    displayedName2 = content.replace('/', ' ');
    let firstres = displayedName2.substr(0, displayedName2.indexOf(' '));
    let secondres = displayedName2.substr(displayedName2.indexOf(' ') + 1);
    if (firstres === '300' && secondres == '300') {
      list1.push(img);
    }
    if (firstres === '300' && secondres == '200') {
      list2.push(img)
    }
    if (firstres === '100' && secondres == '100') {
      list3.push(img)
    }
    if (firstres === '250' && secondres == '250') {
      list4.push(img)
    }

    if (firstres === '400' && secondres == '200') {
      list5.push(img)
    }
  }
  res.send({
    '300by300': list1,
    '300by200': list2,
    '100by100': list3,
    '250by250': list4,
    '400by200': list5
  })

});

/*
 *
 *  Returns the image 
 *  by ID passed in the 
 *  req.pararms( request parameters)
 * 
 */


businessRoutes.route('/getById/:id').get(function (req, res) {
  let result;
  let id = req.params.id.toString();
  for (const i of images.imageUrls) {
    const substring = i.match('://(.*?)/(.*?)(\/|$)(\/|$)')[2];
    const matchid = substring.split('/');
    if (id === matchid[1]) {
      result = i;
    }
  }
  res.send({
    res: result
  })
});


/*
 *
 *  Returns the image 
 *  by ID passed in the 
 *  req.pararms( request parameters) in grayscale
 * 
 */


businessRoutes.route('/geByGrayScale/:id').get(function (req, res) {
  let result;
  let id = req.params.id.toString();
  for (const i of images.imageUrls) {
    const substring = i.match('://(.*?)/(.*?)(\/|$)(\/|$)')[2];
    const matchid = substring.split('/');
    if (id === matchid[1]) {
      result = i + "?grayscale"
    }
  }
  res.send({
    result: result
  })
});
module.exports = businessRoutes;
