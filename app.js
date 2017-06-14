/*filter function that meets callback function criteria
create function filter that takes (arr, fn)
create
*/


// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const namesByLetter = filter(myNames, function(name) {
    // This is a "predicate function" - it's a function that only returns a boolean
    // console.log(name[0]);
    return name[0] === 'R';
});

console.log(namesByLetter) // => ['Rich', 'Ray']



// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
	let newArray = [];
	for(var i = 0; i < arr.length; i++) {
		if (fn(arr[i])) {
			newArray.push(arr[i]);
		}
	}
	return newArray;
}


filter(myNames, namesByLetter);

