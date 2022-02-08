//renderingstories from local storage

let storyInArray = [];
function renderingstories() {
    const storyInParse = JSON.parse(localStorage.getItem("stories"));
    if (storyInParse == null) {
        localStorage.setItem("stories", "[]");

    }
    console.log(storyInParse);

    storyInArray = storyInParse;

    addingStoriesInHtml()

}

//adding that rendered data into new html page

function addingStoriesInHtml() {
    console.group(addingStoriesInHtml);
    const storyInParse = JSON.parse(localStorage.getItem("stories"));
    let len = storyInParse.length;
    console.log(storyInParse);
    let stories = '';

    for (let i = 0; i < len; i++) {
        let title = storyInParse[i].storyTitle;
        let poster = storyInParse[i].storyPoster;


        stories += `
        <div id='images'>
        <a href="./../pages/storyAdding.html?story=${title}">
            <img src="${poster}" alt="${title}" onclick="" id="addImg" class="add-img"></a> 
            <img src="./../assets/img/close.png" alt="delete" id="delete" onclick="removeStory(${i})"></img>
            
         
        </div>`;
    }
    
    let storyContent = document.getElementById("newStories");
    console.log(storyContent);

    storyContent.innerHTML = stories;

}
renderingstories();

//function for remove story

function removeStory(index){
    console.group("removeStory");
    const storyInLocalStorage = JSON.parse(localStorage.getItem("stories"));
    console.log(storyInLocalStorage);
    storyInLocalStorage.splice(index,1);
    const storiesInString = JSON.stringify(storyInLocalStorage);
    localStorage.setItem("stories",storiesInString);
    addingStoriesInHtml();

    console.groupEnd("removeStory");
}


