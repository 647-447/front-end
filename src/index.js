import { getLocation } from 'locator.js';

let state = {};

let form = [
  {
    question: "Do you need rescuing?",
    key: "needsRescue"
  },
  {
    question: "Are you stuck?",
    key: "isStuck"
  },
  {
    question: "Are you in a danger zone?",
    key: "inDangerZone"
  }
];

const question = document.getElementById("question");
question.innerHTML = form[form.length-1].question;

const yes = document.getElementById("yes");
const no = document.getElementById("no");

const addToState = function(key, val) {
  state[key] = val;
  console.log(state);
}

const next = function(boolean) {
  
  let input = form.pop();
  addToState(input.key, boolean);
  
  if(form.length) {
    question.innerHTML = form[form.length-1].question;
    
  } else {
    const text = document.createElement("div");
    text.innerHTML = "We have tracked your location, help is on its way. You will be redirected to our maps page soon";
    text.className = "instructions";
    
    const wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = "";
    wrapper.appendChild(text);
    
    //wait 3 seconds then forward to the maps page
  }
}

yes.addEventListener("click", () => next(true));
no.addEventListener("click", () => next(false));