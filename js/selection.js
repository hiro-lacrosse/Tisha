let array = [];
let result = document.getElementsByClassName('preResult')[0]
console.log(result)

function clearValue() {
    array = [];
    result.innerHTML = '';
    document.getElementsByClassName('result')[0].innerHTML = '';
}

function addValue() {
    let data = parseInt(document.getElementsByClassName('inputValue')[0].value.trim()
    );
    array.push(data);

    // array = [...array, data]; spread syntax by ES6
    document.getElementsByClassName('inputValue')[0].value = '';
    result.innerHTML=array.toString();
}

function executeSelectionSort() {
    if (array.length > 0) {
        // selection_sort(array);
        //Loop till the second last element
        for (let i = 0; i < array.length - 1; i++) {

            //Loop after the i till the last element
            for (let j = i + 1; j < array.length; j++) {

                //if jth element is less than the ith element then swap
                //change < to > for sorting in descending order
                if (array[j] < array[i]) {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }

            }

        }

        document.getElementsByClassName('result')[0].innerHTML = array.toString();
    } else {
        alert('there are no data to be sorted'
        )
    }
}

// function selection_sort(x){
//
//     //Loop till the second last element
//     for(let i = 0; i < x.length - 1; i++){
//
//         //Loop after the i till the last element
//         for(let j = i + 1; j < x.length; j++){
//
//             //if jth element is less than the ith element then swap
//             //change < to > for sorting in descending order
//             if(x[j] < x[i]){
//                 let temp = x[i];
//                 x[i] = x[j];
//                 x[j] = temp;
//             }
//
//         }
//
//     }
//
//     //return the sorted array
//     return x;
// }


