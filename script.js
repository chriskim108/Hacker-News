// Connecting to the API
let url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=" + "aeb13dbfc6a149c7b87d360f9591eabd";

fetch(url)
    .then(
        r => {
            return(r.json());
        }
    )
    .then(
        data => {
            let results = data.articles;
            let newList = document.createElement("ul");
            let bodyTag = document.querySelector("body");

            // Adding the unordered list element to the body tag
            bodyTag.appendChild(newList);
            
            // Iterate through each index of the array
            results.map(news => {
                let newsItem = document.createElement("li");
                // Applied HTML tags and called on some bootstrap classes for styling purposes
                // Getting the specific data from the object
                let newsAuthor = "<b> Author: </b> " + news.author,
                    newsTitle =  "<span class='badge badge-primary'> Title </span> " + news.title,
                    newsDescription = "<b> Description: </b>" + news.description;
                    
                
                // Checking to see if author, title or description is null
                if(news.author == null){
                    newsAuthor = "<b> Author: Author cannot be found </b> "
                }
                if(news.title == null){
                    newsTitle = "<span class='badge badge-primary'> Title </span> " + "Title cannot be found";
                }
                if(news.description == null){
                    newsDescription = "<b> Description: Description cannot be found</b>"
                }

                // Applied an anchor tag such that the user can get access to the original news feed
                newsItem.innerHTML = "<a href=" + news.url + " target='_blank'>"  + 
                                        newsAuthor + "<br>" + 
                                        newsTitle + "<br>" +
                                        newsDescription +
                                     "</a>";
                
                // Adding in the child elements
                newList.appendChild(newsItem);
            });

        }
    )
    .catch(
        e => {
            // Check if there is an error
            console.log("Error has occured: ${e}");
        }
    );