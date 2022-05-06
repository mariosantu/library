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
            console.log(element);

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
            })

            divBooksContainer.appendChild(divCardBooks); 
            divCardBooks.appendChild(divCardsContent);
            

            // divCardsContent.addEventListener('click', () => {
            //     alert('ciao');
            // });
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