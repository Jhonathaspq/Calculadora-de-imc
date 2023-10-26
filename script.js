function calcular(){
    let txtp = document.getElementById('peso').value
    let txta = document.getElementById('altura').value
    let peso = Number(txtp)
    let altura = Number(txta)
    let cal = peso/(altura*altura)
    if(cal<18.5){
        alert("Abaixo do peso normal")
    }else if (cal>18.5 && cal<24.9){
        alert("Peso normal")
    }else if(cal >25.0 && cal<29.9){
        alert("Excesso de peso")
    }else if(cal>30.0 && cal<34.9){
        alert("Obesidade classe 1")
    }else if(cal>35.0 && cal<39.9){
        alert("Obesidade classe 2")
    }else if(cal>=40.0){
        alert("Obesidade classe 3")
    }

}
