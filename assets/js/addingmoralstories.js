let storyInArray = [];
function addStory(event) {
    event.preventDefault();

    let poster = document.getElementById("imgUrl").value;
    let title = document.getElementById("stitle").value;
    let mainStory = document.getElementById("storyContent").value;

    const storyDetails = {
        "storyTitle": title,
        "storyPoster": poster,
        "story": mainStory
    };

    let validatingStoryTitle = validateStories(title);
    if (validatingStoryTitle) {
        alert("This story name is already existed");
        return;
    }
    storyInArray.push(storyDetails);

    console.log(storyInArray);

    const storyDetailsInString = JSON.stringify(storyInArray);
    localStorage.setItem("stories", storyDetailsInString);
    onPageLoad();
    console.log(storyDetailsInString);
    window.location.href="/moral stories.html"
}

function onPageLoad(){
    const storyDetailsInParse = JSON.parse(localStorage.getItem("stories"));

    if (storyDetailsInParse == null){
       localStorage.setItem("stories","[]");
    }
    console.table(storyDetailsInParse);

    storyInArray = storyDetailsInParse;



    
    
}
onPageLoad();
function validateStories(storyName){
    const storyDetailsInParse = JSON.parse(localStorage.getItem("stories"));

    let isExist = false ;
    if(storyDetailsInParse!= null){

    
    for (let i of storyDetailsInParse){
        const storyList = storyDetailsInParse[i].title;

        if (storyName.toLowerCase()==storyList.toLowerCase()){
            isExist=true;
            break;
        }
    }
    }
  return isExist;
 
}



