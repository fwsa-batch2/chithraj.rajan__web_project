const currentUrl = window.location.search;
const urlParam = new URLSearchParams(currentUrl);
const storytitle = urlParam.get("story");
console.log(storytitle);

function getStoryDetails (storyName){
    const getStory = JSON.parse(localStorage.getItem("stories"))
    console.log(getStory);
    const story = getStory.find(element => element.storyTitle == storyName);
    console.log(story);
    return story;
}
getStoryDetails(storytitle);

function addingStories(){
    console.group("addingStories")
const urlStatus = window.location.search;
const urlParam = new URLSearchParams(urlStatus);
const storytitle = urlParam.get("story");
const getvalue = JSON.parse(localStorage.getItem ("stories"));
let fables = '';
const tale = getvalue.filter(stories => stories.storytitle == storytitle );
console.log(tale);
const titleOfStory = tale[0].storytitle;
co
const contentOfStory = tale[0].story;


fables += `<div id="main">
    <img src="${contentOfStory}" alt="${titleOfStory}"> 
</div>`
    console.groupEnd("addingStories")
    let mainDiv = document.getElementById("main");
    mainDiv.innerHTML = fables;

}