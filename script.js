let minus=document.getElementsByClassName("minus")
let plus=document.getElementsByClassName("plus")
let price=document.getElementsByClassName("price")
let quant=document.getElementsByClassName("quant")
let total=document.getElementById("total")

let prices=[25,1500,250,50,2000]
for(let i=0;i<price.length;i++){
    plus[i].addEventListener("click",function(){
        price[i].textContent=Number(price[i].textContent)+prices[i]
        quant[i].textContent=Number(quant[i].textContent)+1
        total.textContent=Number(total.textContent)+prices[i]
    })
    minus[i].addEventListener("click",function(){
        if(Number(price[i].textContent)>prices[i]){
            price[i].textContent=Number(price[i].textContent)-prices[i]
            quant[i].textContent=Number(quant[i].textContent)-1
            total.textContent=Number(total.textContent)-prices[i]
        }
        
    })
}
