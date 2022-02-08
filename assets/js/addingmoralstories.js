//validate data

let storyInArray = [];
function addStory(event) {
    event.preventDefault();

    const poster = document.getElementById("imgUrl").value;
    const title = document.getElementById("stitle").value;
    const mainStory = document.getElementById("storyContent").value;

    const storyDetails = {
        "storyTitle": title,
        "storyPoster": poster,
        "story": mainStory
    };

    let validatingStoryTitle = validateStories(title);

    if (validatingStoryTitle) {
        alert("This story name is already existed");
        return
    }

    storyInArray.push(storyDetails);

    console.log(storyInArray);

    const storyDetailsInString = JSON.stringify(storyInArray);
    localStorage.setItem("stories", storyDetailsInString);

    window.location.href = "./../pages/moral stories.html";

    onPageLoad();
}

// change data into array

function onPageLoad() {
    const storyDetailsInParse = JSON.parse(localStorage.getItem("stories"));

    if (storyDetailsInParse == null) {
        localStorage.setItem("stories", "[]");
    }

    console.table(storyDetailsInParse);

    storyInArray = storyDetailsInParse;
}

onPageLoad();

//validation of stories

function validateStories(storyName) {
    const storyDetailsInParse = JSON.parse(localStorage.getItem("stories"));
    let len = storyDetailsInParse.length
    let isExist = false;
    if (storyDetailsInParse != null) {


        for (let i = 0; i < len; i++) {

            const storyList = storyDetailsInParse[i].storyTitle;
            console.log(storyList);

            if (storyName.toLowerCase() == storyList.toLowerCase()) {
                isExist = true;
                break;
            }
        }
    }
    return isExist;

}
