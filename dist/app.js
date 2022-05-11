/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

// Get search button
var button = document.querySelector('button'); // search books function

function search() {
  // to avoid printing a second search
  clearSearch(); // get user input

  var userChoice = document.getElementById('user-choice').value.toLowerCase();

  if (userChoice.length > 0) {
    var BooksUrl = "https://openlibrary.org/subjects/".concat(userChoice, ".json");
    fetch(BooksUrl).then(function (response) {
      return response.json();
    }).then(function (filteredBooks) {
      var TitlesGenerator = filteredBooks.works;
      var divBooksContainer = document.getElementById('books-container'); //create template to print filered books

      TitlesGenerator.forEach(function (element) {
        var authors = element.authors;
        var divCardBooks = document.createElement('div');
        divCardBooks.id = 'books-card';
        var divCardsContent = document.createElement('div');
        divCardsContent.className = 'card-content';
        divCardsContent.innerHTML = element.title + ': ';
        authors.forEach(function (el) {
          var authorsP = document.createElement('p');
          authorsP.innerHTML = el.name;
          divCardsContent.appendChild(authorsP);
        });
        divBooksContainer.appendChild(divCardBooks);
        divCardBooks.appendChild(divCardsContent); // show info box

        divCardsContent.addEventListener('click', function () {
          var overlayInfo = document.getElementById('popup-1');
          overlayInfo.className = 'show'; // take infos

          var currentKeyBooks = element.key; // fetch to take descriptions' books

          fetch("https://openlibrary.org".concat(currentKeyBooks, ".json")).then(function (res) {
            return res.json();
          }).then(function (infos) {
            // create template to print descriptions
            var description = infos.description;
            var content = document.getElementById('content'); // test create div container x h2 e p 

            var desContainer = document.createElement('div');
            desContainer.className = 'description-container';
            var contentTitle = document.createElement('h2');
            contentTitle.innerHTML = infos.title;
            var descriptionParag = document.createElement('p');
            descriptionParag.innerHTML = description; //cover ?

            var coverKey = infos.covers[0];
            console.log(coverKey);
            var cover = document.createElement('img');
            cover.src = "https://covers.openlibrary.org/b/id/".concat(coverKey, "-M.jpg");
            desContainer.appendChild(contentTitle);
            desContainer.appendChild(descriptionParag);
            content.appendChild(desContainer);
            content.appendChild(cover);
          });
        });
      });
    }); // fix error reload same user value    

    var userRefresh = document.getElementById('user-choice');
    userRefresh.value = '';
  } else {
    alert('insert a genre!');
  }
} // search button finction


button.addEventListener('click', function () {
  search();
}); // hidden info box

var closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', function () {
  overlayInfo = document.getElementById('popup-1');
  overlayInfo.className = 'hidden'; //remove

  var descriptionToDelete = document.getElementById('content');

  if (descriptionToDelete != null) {
    // remove description container
    descriptionToDelete.removeChild(descriptionToDelete.lastChild); // remove img

    descriptionToDelete.removeChild(descriptionToDelete.lastChild);
  }
}); // clear search

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function () {
  clearSearch();
});

function clearSearch() {
  var containerToRemove = document.getElementById('books-container'); // let divToRemove = document.getElementById('books-card');

  while (containerToRemove.firstChild) {
    containerToRemove.removeChild(containerToRemove.lastChild);
  }
}

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/app": 0,
/******/ 			"dist/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklibrary"] = self["webpackChunklibrary"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;