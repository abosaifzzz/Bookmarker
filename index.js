var bookmarkNameInput = document.getElementById("bookmarkName");
var siteUrlInput = document.getElementById("siteUrl");
var second = document.getElementById("second");
var deleteBookmark = document.getElementById("delete");
console.log(bookmarkNameInput.value);

console.log(siteUrlInput);
var bookMarkContainer = [];
submit.addEventListener("click", function addProduct(eventInfo) {
  var bookMark = {
    name: bookmarkNameInput.value,
    siteUrl: siteUrlInput.value,
  };

  bookMarkContainer.push(bookMark);
  localStorage.setItem("bookmarkContainer", JSON.stringify(bookMarkContainer));
  console.log(bookMarkContainer);
  clearForm();
  display();
});
function clearForm() {
  bookmarkNameInput.value = "";
  siteUrlInput.value = "";
}

function display() {
  var cartoona = "";
  var head = ` <div class="t-head d-flex ">
                <div class="index d-flex justify-content-center w-25">Index</div>
                <div class="web  d-flex justify-content-center w-25">Website Name</div>
                <div class="visit  d-flex justify-content-center w-25">Visit</div>
                <div class="delete  d-flex justify-content-center w-25">Delete</div>
            </div>`;
  for (var i = 0; i < bookMarkContainer.length; i++) {
    cartoona += `<div class="t-body pt-2 d-flex ">
                <div class="index-value  d-flex justify-content-center w-25 ps-2  ps-2 ">
                    ${bookMarkContainer[i].name}
                </div>
                <div class="index-value  d-flex justify-content-center w-25 ps-2 ">
                   ${bookMarkContainer[i].siteUrl}

                </div>
                <div id="view" class="index-value  d-flex justify-content-center w-25 ps-2 ">
                    <button class="view">
                    
                    <a href=" ${bookMarkContainer[i].siteUrl}"> <span><i class="fa-regular fa-eye"></i></span> View
                    
                    </a></button>

                </div>
                <div class="index-value  d-flex justify-content-center w-25 ps-2 ">
                    <button id="delete" class="delete"><span><i class="fa-solid fa-trash-can"></i></span> Delete</button>

                </div>
            </div>
`;
  }

  second.innerHTML = head + cartoona;
}

deleteBookmark.addEventListener("click", function deleteBook() {
  bookMarkContainer.splice([i], 1);
  localStorage.setItem("bookmarkContainer", JSON.stringify(bookMarkContainer));

  display();
});
