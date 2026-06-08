const fadeCard= document.getElementById("faceCard");
const popBox = document.getElementById("popBox");
const replayFade = document.getElementById("replayFade");
const replayPop = document.getElementById("replayPop");

function replayAnimation(element, className){
    element?.classList.remove(className);
    void element?.offsetWidth; 
    // void element checks element then throws it away
    element?.classList.add(className);
}

//Run once on load
fadeCard?.classList.add("animate-fade");
popBox?.classList.add("animate-pop");