// Get search button
let button = document.querySelector('button');

// search books function
function search() {

    // get user input
    let userChoice = document.getElementById('user-choice').value.toLowerCase();

    if(userChoice.length > 0) {

        let BooksUrl = `https://openlibrary.org/subjects/${userChoice}.json`;
        fetch(BooksUrl).then(response => {
            return response.json();
        }).then(filteredBooks => {
            let TitlesGenerator =  filteredBooks.works;

            let divBooksContainer = document.getElementById('books-container');

            //create template to print filered books
            TitlesGenerator.forEach((element ) => {

                let authors = element.authors;

                let divCardBooks = document.createElement('div');
                divCardBooks.id = 'books-card';
                
                let divCardsContent = document.createElement('div');
                divCardsContent.className = 'card-content';
                divCardsContent.innerHTML = element.title + ': ';
                
                authors.forEach((el) => {

                    let authorsP = document.createElement('p');

                    
                    authorsP.innerHTML = el.name;

                    divCardsContent.appendChild(authorsP);
                });

                divBooksContainer.appendChild(divCardBooks); 
                divCardBooks.appendChild(divCardsContent);
                
                // show info box
                divCardsContent.addEventListener('click', () => {
                    let overlayInfo = document.getElementById('popup-1');
                    overlayInfo.className = 'show';

                    // take infos
                    let currentKeyBooks = element.key;

                    // fetch to take descriptions' books
                    fetch(`https://openlibrary.org${currentKeyBooks}.json`).then(res => {
                        return res.json();
                    }).then(infos => {
                        
                        // create template to print descriptions
                        let description = infos.description;

                        let content = document.getElementById('content');

                        // test create div container x h2 e p 
                        let desContainer = document.createElement('div');
                        desContainer.className = 'description-container';


                        let contentTitle = document.createElement('h2');
                        contentTitle.innerHTML = infos.title;

                        let descriptionParag = document.createElement('p');
                        descriptionParag.innerHTML = description;

                        //cover ?
                        let coverKey = infos.covers[0];
                        console.log(coverKey);
                        let cover = document.createElement('img');
                        cover.src = `https://covers.openlibrary.org/b/id/${coverKey}-M.jpg`;

                        desContainer.appendChild(contentTitle);
                        desContainer.appendChild(descriptionParag);
                        content.appendChild(desContainer);
                        content.appendChild(cover);
                    })
                });
                
            });
    
        });
        // fix error reload same user value    
        let userRefresh = document.getElementById('user-choice');
        userRefresh.value = '';
    } else {
      alert('insert a genre!');
    }
}

// search button finction
button.addEventListener('click', () => {
    search();
});

// hidden info box
let closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', () => {

    overlayInfo = document.getElementById('popup-1');
    overlayInfo.className = 'hidden';

                
    //remove
    let descriptionToDelete = document.getElementById('content');

    if(descriptionToDelete != null) {
        // remove description container
        descriptionToDelete.removeChild(descriptionToDelete.lastChild);
        
        // remove img
        descriptionToDelete.removeChild(descriptionToDelete.lastChild);
    }
       
});


// clear search
let clearButton = document.getElementById('clear');

clearButton.addEventListener('click', () => {
    clearSearch();
});


function clearSearch() {
    let containerToRemove = document.getElementById('books-container');
    // let divToRemove = document.getElementById('books-card');
    
    while (containerToRemove.firstChild) {
        containerToRemove.removeChild(containerToRemove.lastChild);
    }
} 
