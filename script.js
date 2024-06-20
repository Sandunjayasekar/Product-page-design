let productImage = document.getElementById("productImage");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function () {
    productImage.src = "images/image1.png";
};
btn[1].onclick = function () {
    productImage.src = "images/image2.png";
};
btn[2].onclick = function () {
    productImage.src = "images/image3.png";
}