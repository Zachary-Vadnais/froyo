
const userInput = prompt("enter froyo flavors sparated by comas");

const flavorArray=userInput.split(',')

function countFlavors(arr){
    const flavorCounts= {};
    for(let i =0;i<arr.length;i++) {
        const flavor = arr[i].trim().toLowerCase();
        flavorCounts[flavor]=(flavorCounts[flavor] || 0) +1;
    }
    return flavorCounts;
}

const result= countFlavors(flavorArray);

console.log("Your Froyo order!:");
console.log(result);
