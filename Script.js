const weightOfHousePerSquareMeterInGrams = 976000

const heliumLiftInGrams = 12

const hydrogenLiftInGrams = 13

function calculate(){
    if(document.getElementById("gasSelector").value == "Helium"){
        calculateHelium()
    }
    if(document.getElementById("gasSelector").value == "Hydrogen"){
        calculateHydrogen()
    }
}

function calculateHelium(){
    var result = weightOfHousePerSquareMeterInGrams * parseInt(document.getElementById("inputSquareMeters").value) / heliumLiftInGrams 
    writeResult(result)
}

function calculateHydrogen(){
    var result = weightOfHousePerSquareMeterInGrams * parseInt(document.getElementById("inputSquareMeters").value) / hydrogenLiftInGrams 
    writeResult(result)
}

function writeResult(result){
    document.getElementById("resultText").innerText = `According to actual scientific calculations, you would need around ${Math.round(result)} medium sized balloons to lift a house this size.`
}