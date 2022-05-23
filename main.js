const button = document.querySelector("button")
const resultado = document.querySelector("#resultado p")

button.addEventListener("click", function (e){
    e.preventDefault()
    const $weight = Number(document.querySelector("#peso").value)
    const $stature = document.querySelector("#altura").value
    const $stature2 = parseFloat($stature.replace(",", ".")) 

    function criaPessoa(weight, stature){
        return{
            peso: weight,
            altura: stature,
            get imc(){
                const indice = this.peso / (this.altura ** 2);
                return indice.toFixed(2)
            }, 
        }
    }

    const p1 = criaPessoa($weight, $stature2) 
    const calculateIndiceMassaCorporal = (p1.imc);
    console.log(calculateIndiceMassaCorporal)

    if(calculateIndiceMassaCorporal < 18.0){
        resultado.textContent = "Tais medidas impossibilitam um resultado"
    }else if( calculateIndiceMassaCorporal > 18.0 && calculateIndiceMassaCorporal <= 24.99){
        resultado.textContent = "Peso normal"
    }else if(calculateIndiceMassaCorporal >= 25.0 && calculateIndiceMassaCorporal <= 29.99){
        resultado.textContent = "Sobrepeso"
    }else if(calculateIndiceMassaCorporal >= 30.0 && calculateIndiceMassaCorporal <= 34.99){
        resultado.textContent = "Obesidade grau 1"
    }else if(calculateIndiceMassaCorporal >= 35.0 && calculateIndiceMassaCorporal <= 39.99){
        resultado.textContent = "Obesidade grau 2"
    }else{
        resultado.textContent = "Obesidade grau 3"
    }
})