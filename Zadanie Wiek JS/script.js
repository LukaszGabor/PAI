const name = document.getElementById('name');
const age = document.getElementById('age');
const color = document.getElementById('color');
const button = document.getElementById('button');
const result = document.getElementById('result');

button.addEventListener('click', function(button){
button.preventDefault();

const tab = [...imie.value];

for(let a = 0; a < tab.length; a++){
    if(!isNaN(tab[a])){
        alert("Podaj poprawne imię!");
        return 0;
    }

    else if(tab.length < 3){
        alert("Imię musi zawierać więcej niż 3 znaki!");
        return 0;
    }

    else{
        const color1 = [...color.value];

        if(age.value < 1){
            alert("Błędny wiek");
            return 0;
        }

        else if(color1[0]! = "#"){
            alert("Na początku musi być #");
            return 0;
        }

        else if(color1.length < 7 || color.length > 7){
            alert("Liczba znaków koloru musi być równa 6");
            return 0;
        }

        else{
            let age;
            
            if(age.value < 17 || age.value > 19){
                age = "lat";
            }

            else if(age.value == 17 || age.value == 19){
                age = "roku";
            }

            if(age.value > 18){
                result.innerHTML = `Hejka ${imie.value}:) Jesteś posiadaczem pełnych praw od ${age.value - 18} ${age}!`;
            }

            else if(age.value == 18){
                result.innerHTML = `Siemka ${imie,value}:) Możesz robić wszysto`;
            }

            else{
                result.innerHTML = `Hejoo ${imie.value}:) Do dorosłości na papierku brakuje ci ${18 - age.value}`;
            }

            wynik.style.borderColor = color.value;
        }
     }
  }
})