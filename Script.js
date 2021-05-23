const weightOfHousePerSquareMeterInGrams = 976000

const heliumLiftInGrams = 12

const hydrogenLiftInGrams = 13

function calculate(){
    if(document.getElementById("inputSquareMeters").value != ""){
        if(document.getElementById("gasSelector").value == "Helium"){
            calculateHelium()
        }
        if(document.getElementById("gasSelector").value == "Hydrogen"){
            calculateHydrogen()
        }
    }
    else{
        window.alert("We need to know the size of your house fot the maths to work ;)")
    }
}

function calculateHelium(){
    var result = weightOfHousePerSquareMeterInGrams * parseInt(document.getElementById("inputSquareMeters").value) / heliumLiftInGrams + 1
    writeResult(result)
}

function calculateHydrogen(){
    var result = weightOfHousePerSquareMeterInGrams * parseInt(document.getElementById("inputSquareMeters").value) / hydrogenLiftInGrams + 1
    writeResult(result)
}

function writeResult(result){
    document.getElementById("resultText").innerText = `According to actual scientific calculations, you would need around ${Math.round(result)} medium sized balloons to lift a house this size.`
}