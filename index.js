minimatch = require('minimatch');
cheerio = require('cheerio');
unique = require('array-unique');



module.exports = subsetfonts;

function subsetfonts(){

	return function(files,metalsmith,done){
		var testFiles = [];
		var cssFiles = [];
		var testHTML = "**/*.html";
		var testCSS = "**/*.css";
		Object.keys(files).forEach(function(file){
			if(minimatch(file,testHTML)){
				testFiles.push(file);
			} else if (minimatch(file,testCSS)){
				cssFiles.push(file);
			}
		});
		var chars = [];
		testFiles.forEach(function(file){
			$ = cheerio.load(files[file].contents);
			$('script').remove();
			var body = $('body');
			chars = unique(chars.concat(body.text().split('')));
		})
		var include = chars.join('').replace('\n','').replace(' ','');
		console.log(include);
		cssFiles.forEach(function(file){
			var css = files[file].contents.toString();
			css = css.replace('fonts.googleapis.com/css?','fonts.googleapis.com/css?text='+encodeURIComponent(include)+'&')
			files[file].contents = css;
		})
		done();
	}

}