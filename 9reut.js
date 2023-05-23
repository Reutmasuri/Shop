

let items = [
    {
  category: "iphone",
 barcode: "1",
 price: "1599$",
 name: "iphone 14 pro",
 qty:"500",
img:"https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-pro-deep-purple-fall22-a?wid=930&hei=930&fmt=webp"
    },
    {
      category: "iphone",
        barcode: "2",
        price: "999$",
        name: "iphone 13",
        qty:"670",
        img:"https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-13-starlight-09142021?wid=930&hei=930&fmt=webp"
    },
    {
      category: "iPad",
        barcode: "3",
        price: "1256$",
        name: "Apple iPad Pro",
        qty:"10",
        img:"https://www.phoneplay.co.il/images/itempics/2087_11072021161030_large.jpg"
    },
    {
      category: "computer",
        barcode: "4",
        price: "4499$",
        name: "Apple iMac",
        qty:"35",
        img: "https://img.zap.co.il/pics/6/1/7/9/58409716c.gif",
    },
    {
      category: "watch",
        barcode: "5",
        price: "200$",
        name: "Apple Watch",
        qty:"5000",
        img: "https://img.zap.co.il/pics/2/9/1/4/74314192c.gif"
    },
]

let container=document.getElementById("container")

let count = [0,0,0,0,0]

items.map((item,index) =>{

let card=document.createElement("div")
card.className="card"
card.id= index
container.appendChild(card)

let img= document.createElement("img")
img.className='img'
img.src = item.img
card.appendChild(img)

let name= document.createElement("div")
name.innerHTML=item.name
name.className='name'
card.appendChild(name)
 
let price= document.createElement("div")
price.innerHTML=item.price
price.className='name'
card.appendChild(price)

let rowCart = document.createElement("div")
rowCart.className = "rowCart"
card.appendChild(rowCart)

let btn = document.createElement("button")
btn.className="btn"
btn.innerHTML="+"
rowCart.appendChild(btn)
//btn.onclick = () => alert(item.name+" added to cart")
btn.addEventListener("mouseover", function (){
btn.style.backgroundColor = "gray"})
btn.addEventListener("mouseout", function (){
btn.style.backgroundColor = ""})
//btn.addEventListener("dblclick", function () {
//alert("נוסף לעגלה")})

btn.addEventListener("click", function () {
  if(count[index]< item.qty){
  count[index]++
  cart.innerHTML = count[index]}
})

let cart = document.createElement("p")
cart.className="cart"
cart.innerHTML= count[index]
rowCart.appendChild(cart)

let btn_ = document.createElement("button")
btn_.className="btn"
btn_.innerHTML="-"
rowCart.appendChild(btn_)

btn_.addEventListener("click", function () {
if(count[index] > 0)
  count[index]--
cart.innerHTML = count[index]
})
})
   

    let Search = document.getElementById("Search")
    Search.oninput = () => console.log(Search.value)

Search.oninput = () => {
  items.map((item,index) =>{ if (item.name.toLowerCase().includes(Search.value)){
    document.getElementById(index).style.display=""
  }
  else{ 
   document.getElementById(index).style.display="none"

}})}


let select = document.getElementById("select")
select.onchange = () => {
  items.map((item,index) =>{ if(item.category == select.value || select.value==""){
    document.getElementById(index).style.display=""
   }
    else{ 
      document.getElementById(index).style.display="none"}
  
  

})}














//let student = {
//firstName: "Moshe",
    //  lastNameL: "Levi",
      //gender: "male",
      //phone: 0525666245,
     // }
      
      
      //let students = [
        //  {
          //    firstName: "Moshe",
            //  lastNameL: "Levi",
              //gender: "male",
              //phone: "0525666245",
          //},
          //{
            //  firstName: "Noam",
             // lastNameL: "Cohen",
              //gender: "male",
              //phone: "0503600924",
          //},
          //{
           //   firstName: "Rachel",
             // lastNameL: "Cohen",
             // gender: "female",
             // phone: "0503600925",
          //},
      //]
      
      //let phone=students.map(student=>student.phone)
      
      //let arrFilterByGender=students.filter(student=>student.gender=="male")
      
      //console.log(students[2].firstName);
      //console.log(phone);
      //console.log(arrFilterByGender);
      
      //let users = [
       //   {
       //       firstName: "Rachel",
       //       lastNameL: "Cohen",
         //     Age: "14",
         // },
        //  {
        //      firstName: "Tal",
        //      lastNameL: "Nativ",
        //      Age: "23",
        //  },
        //  {
        //      firstName: "Or",
        //      lastNameL: "Levi",
        //      Age: "19",
        //  },
        //  {
        //      firstName: "Noam",
        //      lastNameL: "Moshe",
        //      Age: "17",
        //  },
     //  {
        //      firstName: "Eliad",
        //      lastNameL: "Neiman",
        //      Age: "20",
         // },
      
      
      //]
      
      //let firstName=users.map(users=>users.firstName)
      
      //console.log(users[2]);
      //console.log(users[4].Age);
      //console.log(users[1].lastNameL);
      //console.log(firstName);


///functions
//function getItem(barcode){
//    let item = items.find(item => item.barcode == barcode)
//    if (!item) {
//        console.log("no item");
//    }
//    else {console.log(item) }}

//function getItemByName(name){
  //  let item = items.filter(i => i.name.includes(name))
  //  if (item.length == 0) {
  //      console.log("no item");
  //  } else {
  //      console.log(item);
  //  }}

//function reduceQty(barcode, qty){
//    let item = items.find(item => item.barcode == barcode)
//    item.qty = item.qty - qty
//    console.log(item);
//}

//function addItem(barcode, name, price, qty){
//    items.push({
//        barcode,
//        name,
//        price,
//        qty,
//    })
//}
//addItem(6,"kumkum", 54, 23,)
//console.log(items);

//getItemByName("o")
//getItem(2)
//getItem(6)
//reduceQty(3,6)
