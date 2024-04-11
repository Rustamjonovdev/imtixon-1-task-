const container = document.querySelector('.container')
const userDay = document.querySelector('.day')
const userMonth = document.querySelector('.month')
const userYear = document.querySelector('.year')
const calBtn = container.querySelector('.cal-Btn')
const localDay = new Date().toLocaleDateString



calBtn.addEventListener('click', () =>{
    if(userDay.value && userMonth.value && userYear.value != ' '){
        if(userDay.value && userMonth.value && userYear.value < localDay){
            if(userDay.value < 31){
                if(userMonth.value !== [1,3,5,7,8,10,12]){
                    function kabisaYear(userYear){
                        if((userYear % 4 == 0 && userYear % 100 !=0) || userYear % 400 == 0){
                            console.log('This year Kabisa Year');
                        }else{
                            console.log('This year not Kabisa YEar');
                        }
                    } 
                    kabisaYear(userYear)
                }

            }else{
                console.log("kechirasiz bunday kun yoq");
            }
        }else{
            console.log(localDay);
        }
    }else{
        alert('iltimos qayta urinib koring')
    }
})