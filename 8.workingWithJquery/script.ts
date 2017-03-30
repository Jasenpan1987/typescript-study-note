import "jquery";

// *** 1. manully download
// 1) use system.js to load the module (check index.html)
// 2) import jquery
// 3) find definitely jquery from github and add the file here

// *** 2. using typings
// 1) npm install -g typings
// 2) typings install dt~jquery --global --save      // global means it will be available to all files in your current working directory, --save means create and save into the typings.json file
// 3) find definitely jquery from github and add the file here


// *** 3. using npm (with ts 2.x)
// 1) npm install --save-dev @types/jquery
$("#root").css("background-color", "red");