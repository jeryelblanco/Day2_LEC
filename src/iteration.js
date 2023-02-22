const arr = [
    {
    name: "Frank",
    age: 15,
    hegiht: "5'11",
    colors: ["white", "red"]
},
{
    name: "Joe",
    age: 20,
    hegiht: "5'1",
    colors: ["gray", "black"]
}]

fetch("")
.then(res=>res.json())
.then(data=>{
data.forEach(element => {
console.log(element)
const booklist=document.querySelector("#book-list")
const li = document.createElement("li")
li.innerText = element.title
booklist.append(li)



});
})



