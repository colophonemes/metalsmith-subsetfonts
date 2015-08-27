# Metalsmith Subset Fonts

Cut down page load times in your [metalsmith](http://metalsmith.io) site by subsetting fonts loaded through the [Google Fonts API](https://www.google.com/fonts)

This plugin scans all HTML files and finds every character you've used across all pages (i.e. the subset of all characters used on your website). It then inserts this into URL references to the Google Fonts API.

As the plugin needs to scan HTML files, and modifies CSS files, you should run it later in the buildchain after these files have been built.

At this stage the plugin only modifies Google Fonts imported using an `@import` declaration within a stylesheet.

### Installation

```

$ npm install --save metalsmith-subsetfonts

```


### Example

Lets say your entire website consists of the text 'Hello World!', and you're importing Open Sans regular using an `@import` declaration in your stylesheet.

**Before:**

```css

@import url(https://fonts.googleapis.com/css?family=Open+Sans);

```

**After:**

```css

@import url(https://fonts.googleapis.com/css?text=HWdelor!&family=Open+Sans);

```

More on subsetting Google Fonts:
* [Google Developers — Subsetting Fonts](https://developers.google.com/fonts/docs/getting_started#Subsets)
* [The New Code - Slash Page Load Times With CSS Font Subsetting](http://thenewcode.com/878/Slash-Page-Load-Times-With-CSS-Font-Subsetting)