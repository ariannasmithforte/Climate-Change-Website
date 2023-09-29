/* .js files add interaction to your website */


var quoteList = [
  "More than a million species are at risk of extinction.", "There’s more CO2 in our atmosphere than at any time in human history.", "Food waste causes more greenhouse gas emissions than the aviation industry.", "Flying at night causes less global warming!", "More than a million species are at risk of extinction!", "Higher tempertures caused by climate change causes havoc on air quality, food supply, increase of infectious illnesses, and natural disasters."];

var quote = document.getElementById("quote");
var myBtn = document.getElementById("myBtn");
var counter = 0;

myBtn.addEventListener("click", displayQuote);

quote.innerHTML = quoteList[counter];

function displayQuote() {
  quote.innerHTML = quoteList[counter];
  counter+=1;
  if (counter == quoteList.length) {
    counter = 0;
  }
}
