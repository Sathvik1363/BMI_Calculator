function bmi_calci(){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    if (isNaN(height) || isNaN(weight)) {  
        alert('Please enter numeric values!');c``
        }
        else if(height == ""|| weight ==  ""){
            alert("Enter the height and weight")
        }
         else{
            let bmi = weight/ ((height/100)**2);
            let category = ""
            if (bmi < 18.5){
                category= "Underweight"
            }else if (bmi <= 24.9){
                category="Normal Weight"
            }else if (bmi<=29.9){
                category="Overweight"
            }else{
                category="Obese"
            }
            document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(1)+ " (" + category + ")";
        }




}