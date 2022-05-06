let button = document.querySelector('button');


function search() {
    let userChoice = document.getElementById('user-choice').value;
    // alert(userChoiceGenerator);
    // console.log(userChoiceGenerator);

    let BooksUrl = `https://openlibrary.org/subjects/${userChoice}.json`;
    fetch(BooksUrl).then(response => {
        return response.json();
    }).then(fantaBooks => {
        // console.log(fantaBooks);
        let fantaBooksTitlesGenerator = fantaBooks.works;
        // console.log(fantaBooksTitlesGenerator);

        let divBooksContainer = document.getElementById('books-container');

        fantaBooksTitlesGenerator.forEach((element ) => {
            // console.log(element.key);

            let authors = element.authors;
            // console.log(authors);

            let divCardBooks = document.createElement('div');
            divCardBooks.id = 'books-card';
            
            let divCardsContent = document.createElement('div');
            divCardsContent.className = 'card-content';
            divCardsContent.innerHTML = element.title + ': ';
            // ulBooks.appendChild(liBooks);
            
            authors.forEach((el) => {
                // console.log(el);

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
                // console.log(currentKeyBooks);

                fetch(`https://openlibrary.org${currentKeyBooks}.json`).then(res => {
                    return res.json();
                }).then(infos => {
                    
                    let description = infos.description;
                    // console.log(description);

                    // to append
                    let content = document.getElementById('content');

                    let contentTitle = document.createElement('h2');
                    contentTitle.innerHTML = infos.title;

                    let descriptionParag = document.createElement('p');
                    descriptionParag.innerHTML = description;

                    content.appendChild(contentTitle);
                    content.appendChild(descriptionParag);
                })
            });

            // hidden info box
            let closeBtn = document.getElementById('close-btn');
            closeBtn.addEventListener('click', () => {
                overlayInfo = document.getElementById('popup-1');
                overlayInfo.className = 'hidden';
            });

            
        });

    });

}

button.addEventListener('click', () => {
    search();
});

// authors.forEach((el) => {
//     console.log(el);
//     liBooks.innerHTML = element.title + ': ' + el.name;
    
// })

