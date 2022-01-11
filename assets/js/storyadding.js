console.group("storyAdding");
const currentUrl = window.location.search;
console.log(currentUrl);
const urlParam = new URLSearchParams(currentUrl);
console.log(urlParam);
const storytitle = urlParam.get("story");
console.log(storytitle);
console.groupEnd("storyAdding");

function getStoryDetails(storyName) {
    const getStory = JSON.parse(localStorage.getItem("stories"));

    const story = getStory.find(element => element.storyTitle == storyName);

    addingStories();
    return story;
}


getStoryDetails(storytitle);

function addingStories() {
    console.group("addingStories")
    const urlStatus = window.location.search;
    const urlParam = new URLSearchParams(urlStatus);
    const storytitle = urlParam.get("story");
    console.log(storytitle);
    const getvalue = JSON.parse(localStorage.getItem("stories"));
    console.log(getvalue);
    let fables = '';
    const tale = getvalue.filter(story => story.storyTitle == storytitle);
    console.log(tale);
    const titleOfStory = tale[0].storytitle;
    console.log(titleOfStory);
    console.groupEnd();
    const contentOfStory = tale[0].story;
    console.log(contentOfStory);


    fables += `<div id="main">
    <img src="${contentOfStory}" alt="${titleOfStory}" id="imageOfStory"> 
</div>`
    console.groupEnd("addingStories")
    let mainDiv = document.getElementById("main");
    mainDiv.innerHTML = fables;

}