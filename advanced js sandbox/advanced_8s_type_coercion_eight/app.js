// Type coercion
// basically on type on the left is equal to the right obn is then converted to the same type
// eg String and num the string may be converted to a num or a num to string

1 == '1'
// type coercion in js happens when using the double == sign
1 === '1'
//  this means compare two values but dont try and coerce the values 
// Using the === sign.

// another example of type coercion is using 1 and zero js converts it into a bool true or false
eg
if (1) {
    console.log(5)
}

// use tripple equals always