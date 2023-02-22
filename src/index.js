//BookStore has been moved to data.js 
// console.log(bookStore);

function formatPrice(price) {
  return '$' + parseFloat(price).toFixed(2);
}

// create a function called renderBook(book)
// it will take a book object as an argument
// and create the html struture for rendering 
// that book and insert it into our webpage!

// function renderBook(book) {
// should create an li element that looks something like this:
  // <li class="list-li">
  //   <h3>Eloquent JavaScript : A Modern Introduction to Programming</h3>
  //   <p>Marjin Haverbeke</p>
  //   <p>$10.00</p>
  //   <img src="https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Eloquent JavaScript cover"/>
  //   <button>Delete</button>
  // </li>
console.log(bookStore)
  function renderBook(book){
  const bookList = document.getElementById("book-list")
  const li = document.createElement("li")
  li.className = "list-li"
  bookList.append(li)
  const bookTitle = document.createElement("h3")
  const bookAuthor = document.createElement("p")
  const bookPrice = document.createElement("p")
  const bookImg = document.createElement("img")
  const bookBtn = document.createElement("button")
  li.append(bookTitle, bookAuthor, bookPrice, bookImg, bookBtn)
  bookTitle.innerHTML = book.title
  bookAuthor.innerText = book.author
  bookPrice.textContent = formatPrice(book.price)
  bookImg.src = book.imageUrl
  bookBtn.innerHTML = "Delete"
  bookBtn.addEventListener("click", ()=>{
  li.remove()
  })
}

bookStore.inventory.forEach((data, index) => {
if(index > 0){
renderBook(data)
}
})






