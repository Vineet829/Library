const button = document.querySelector(".but")
const collection = document.querySelector(".collection")

const myLibrary = [];
class Book {
constructor  (author, title, pages, read_status){
 
this.author = author
this.title = title
this.pages = pages
this.read_status = read_status   
}


}



button.addEventListener("click", function addBookToLibrary() {
   var inp = prompt("Type Book Name") 
   var inp1 = prompt("Type Author Name")
   var inp2 = prompt("Type pages Number") 
   var inp3 = prompt("Read Status")
   
  const books = new Book(inp,inp1,inp2,inp3)
   myLibrary.push(books);
   const book = document.createElement("div")
   book.classList.add("book");
   collection.appendChild(book)
    
    var arr = Object.values(myLibrary[myLibrary.length - 1])   
    var arr1 =  Object.keys(myLibrary[myLibrary.length - 1])  
    for(let i = 0; i<arr.length+1; i++){
    if(i < 3){   
      
      const para = document.createElement("p")
      para.textContent = arr1[i] + ":  " + arr[i]
      book.appendChild(para)
   }
   
   else if(i>3){
   const butt1 = document.createElement("button")
   butt1.textContent = "Remove"
   book.appendChild(butt1)
   butt1.addEventListener("click", () => {
      collection.removeChild(book)
   })
   }
   else if(i == 3){   
   const butt = document.createElement("button")
      butt.setAttribute("type", "button")
      
      butt.textContent = arr1[i] + ":"  + "No"
      book.appendChild(butt)
      butt.addEventListener("click", () => {
         if(butt.textContent == "read_status:No"){
         butt.textContent = arr1[i] + ":"  + "Yes"
         }
      else{
         butt.textContent = arr1[i] + ":"  + "No"
      }
      })
      
   }
   
   }
      
}

)

