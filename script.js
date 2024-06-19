function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let s1l=s1.toLowerCase();
	let s2l=s2.LowerCase();

	return s1l.indexOf(s2l);
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
