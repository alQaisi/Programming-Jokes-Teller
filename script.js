// VoiceRSS Javascript SDK
const audio=document.getElementById('audio');
const button=document.getElementById('button');
const loader=document.getElementById('loader')

const fetchJoke=async()=>{
    loader.hidden=false;
    const response=await fetch("https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist");
    const joke=await response.json();
    if(joke.type==="single"){
        fetchAudio(joke.joke);
    }else{
        const fullJoke=`${joke.setup} ... ${joke.delivery}`
        fetchAudio(fullJoke);
    }
}
const fetchAudio=(text)=>{
    button.disabled=true;
    fetch('https://hidden-citadel-03585.herokuapp.com/fetchAudio',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            text:text})
        }).then(response=>response.json())
          .then(textToSpeech=>{
            audio.src=textToSpeech;
            loader.hidden=true;
            audio.onloadedmetadata=()=>audio.play();
            audio.onended=()=>button.disabled=false;  
        }).catch(console.log);
}
button.addEventListener('click',fetchJoke);
