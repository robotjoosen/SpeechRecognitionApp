
let played = -1;
let answer = [
  document.querySelector('.ja'),
  document.querySelector('.nee')
];

let recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'nl';
recognition.onresult = function(event)
{
  let last_result = event.results.length - 1;
  if(last_result > played)
  {
    played = last_result;
    if(event.results[last_result][0].transcript.toLowerCase().indexOf("test") > -1)
    {
      let nmbr = Math.floor(Math.random() * 2);
      let obj = answer[nmbr];
      obj.play();
    }
  }
}
recognition.start();
