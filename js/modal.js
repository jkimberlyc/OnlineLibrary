// var modal = document.getElementById('confirmPurchase');
// var btn = document.getElementById("confirmBtn");

// btn.onclick = function() {
//     if(document.getElementById("firstName").value != "") {

//         modal.style.display = "block";
//     } else {
//         alert('All fields are required.');
//     }
// }

document.getElementById("mastercard").checked = false;



function showPurchase() {
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var contactNum = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var address2 = document.getElementById("address2").value;
    var country = document.getElementById("country").value;
    var city = document.getElementById("city").value;
    var zip = document.getElementById("zip").value;
    var cardName = document.getElementById("cc-name").value;
    var creditCardNumber = document.getElementById("cc-number").value;
    var expCard = document.getElementById("cc-expiration").value;
    var cvv = document.getElementById("cc-cvv").value;

    // if(fName === ""){
    //     $('#confirmPurchase').modal('hide')
    // }
    // var isSameAddress = document.querySelector('.messageCheckbox:checked').value;

    document.getElementById("fullNameModal").innerHTML = fName + " " + lName;
    document.getElementById("contactModal").innerHTML = contactNum;
    document.getElementById("addressModal").innerHTML = address;
    document.getElementById("address2Modal").innerHTML = address2;
    document.getElementById("locationModal").innerHTML = zip + " " + city + " City, " + country; 
    document.getElementById("cardNameModal").innerHTML = cardName;
    document.getElementById("creditCardNumberModal").innerHTML = creditCardNumber;
    document.getElementById("expCardModal").innerHTML = expCard;
    document.getElementById("cvvModal").innerHTML = cvv;

}

function selectPaymentMethod(paymentMethod){
    document.getElementById("paymentMethodModal").innerHTML = paymentMethod;
}