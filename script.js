const adviceText = document.querySelector('.advice-generator-text');
const adviceID = document.querySelector('.advice-generator-ID');
const adviceBtn = document.querySelector('.advice-generator-button');

const apiURL = "https://api.adviceslip.com/advice";

async function getQuotes() {

  try{
    const response = await fetch(apiURL);
    const quote = await response.json();

    adviceID.innerHTML = `ADVICE #${quote.slip.id}`;
    adviceText.innerHTML = `"${quote.slip.advice}"`;


  } catch (error){
    console.log("Encountered problem while fetching API data", error)
  }
};

getQuotes();

window.addEventListener('DOMContentLoaded', ()=> {
  adviceBtn.addEventListener('click', getQuotes);  
})
