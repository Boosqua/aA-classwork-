Array.prototype.bubblesort = function () {
    let swapped = true
    let sorted = this
    
    function sorting(){
        let i = 0;
        while (i < sorted.length - 1) {
            if(i === 0){
                swapped = false;
            }
            let j = i + 1;
            if (sorted[i] > sorted[j]) {
                swapped = true;
                let a = sorted[i];
                let b = sorted[j];
                sorted[i] = b;
                sorted[j] = a;
            }
            i++;
        }
    }
    while (swapped) {
        sorting();
    }
    return sorted;
}

let arr2 = [5, 3, 4, 5, 1, 9, 8, 90]
console.log(arr2.bubblesort());


String.prototype.subStrings = function() {
    let subStrings = [];

    let i = 0;

    while (i < this.length) { 
        let j = i;

        while (j < this.length) {
            subStrings.push(this.slice(i, j+1));
            j++;
        }
        i++;
    }

    return subStrings;
}

let abcdefg = "word";
console.log(abcdefg.subStrings());