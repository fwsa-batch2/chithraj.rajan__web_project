let storyInArray = [];
function renderingstories(){
    const storyInParse = JSON.parse(localStorage.getItem("stories"));
    if (storyInParse == null){
        localStorage.setItem("stories","[]");
      
    }
    console.log(storyInParse);

    storyInArray = storyInParse;

    addingStoriesInHtml()

}
function addingStoriesInHtml(){
    console.group(addingStoriesInHtml);
    const storyInParse = JSON.parse(localStorage.getItem("stories"));
    console.log(storyInParse);
    let stories = '';
    
    for (let i = 0; i<storyInParse.length; i++){
        let title = storyInParse[i].storyTitle;
        let poster = storyInParse[i].storyPoster;
        

        stories+=`
        <div id='images'>
        <a href="./../pages/storyAdding.html?story=${title}">
            <img src="${poster}" alt="${title}" onclick="" id="addImg" class="add-img">
        </a>  
        </div>`;
    }
    let storyContent = document.getElementById("newStories");
    console.log(storyContent);

    storyContent.innerHTML= stories;

}
renderingstories();