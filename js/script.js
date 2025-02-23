const products= [
    {name:"product1",price:200.34,description:"the product 1 is trendy"},
    {name:"product2",price:100.34,description:"the product 2 is trendy"},
    {name:"product3",price:500.34,description:"the product 3 is trendy"},
]
let productList = document.createElement("div");
productList.classList.add("products-list");
products.forEach((product)=>{
    let productItem = document.createElement("div")
    productItem.classList.add("product-item")

let productName = document.createElement("h3");
productName.innerText = `${product.name}`
let productPrice = document.createElement("p");
productPrice.innerText = `${product.price}`
let productDescription = document.createElement("p");
productDescription.innerText = `${product.description}`
let editButton = document.createElement("button");
editButton.classList.add("edit-btn")
editButton.setAttribute("type","submit");
editButton.innerText = `Edit`

editButton.addEventListener("click",(event)=>{
    event.preventDefault();
let productName = prompt('Please enter the new product name',this.name);
    let productPrice = prompt('Please enter the new product price',this.price);
    let productDescription = prompt('Please enter the new product description',this.description);


        let productItem = editButton.parentNode;
        productItem.getElementsByTagName("h3")[0].innerText= productName;
        productItem.getElementsByTagName("p")[0].innerText= `${parseFloat(productPrice)}`;
        productItem.getElementsByTagName("p")[1].innerText= productDescription;

})

let deleteButon = document.createElement("button");
deleteButon.classList.add("delete-btn")
deleteButon.setAttribute("type","submit");
deleteButon.innerText = 'Delete'


deleteButon.addEventListener("click", (event)=>{
event.preventDefault();
let productItem = deleteButon.parentNode;
    productList.removeChild(productItem);

})
productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    productItem.appendChild(productDescription);
    productItem.appendChild(editButton);
    productItem.appendChild(deleteButon);

    productList.appendChild(productItem)
})
let mainProducts = document.getElementById("products")
mainProducts.appendChild(productList);



