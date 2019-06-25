import { repeat,concat,sort, sum, takeLast, reduce,add, map, pipe, split, join } from 'ramda'


// Let A be a n-dimensional space of integers in the range (0...m)
// Where n < 6 and m < 10 (i.e. the elements of V are digits)
// The function below gives us a subset of A whose points p fullfill the contstraint:
// The sum of digits of p is less or equal to m
// -------------------------------------------------------------------------------
// Example:
//
// 2      (2,0)  (2,1)  (2,2)
// 1      (1,0)  (1,1)  (1,2)
// 0      (0,0)  (0,1)  (0,2)
//
//          0      1      2
//  
// In this example n=2 (two-dimensional space) and also m=2 (max value in table) 
// then the valid points are (1,0), (0,0), (0,1), (2,0), (1,1) and (0,2)
// because the digit sum of all of those is less or equal to 2
// Note that in base-3 (m+1) the first nine numbers are 00, 01, 02, 10, 11, 12, 20, 21 and 22 
// -------------------------------------------------------------------------------
// There is a bijection betwen A and the non-negative integers from
// zero to (m+1)^n-1. Also A can be viewed as the set of those integers expressed in
// base (m+1). The algorithm takes advantage of that.


// Helper for sorting the result
const relevance = (row:number[]) => {
  return sum(row) * 1000000 
  + reduce(Math.max, Number.MIN_VALUE)(row) * 1000 
  + row.reduce((previous, current, index, array) => previous + 2 ** (array.length - index) * current, 0)
}
const byRelevance = (a:number[], b:number[]) => relevance(b) - relevance(a)



// Delivers an array of given size of digits of given number expressed in given base
const transform = (size:number, base:number, value:number) => pipe(

  concat(join('',repeat('0',size))),  // ensure enough length for next step
  takeLast(size),                     // the length must equals the value of the "size" variable
  split(''),                          // transforms the number string representation to an array of chars
  map(Number)                         // array of chars to array of numbers (one digit each)

) (value.toString(base))      // send to pipe the number in <base>ary form




// Returns the points in non-negative integer n-dimensional space (n < 6)
// of size m  whose digts sum <= m (m < 10))
// Believe it or not that's useful
// Reminder:
// - n denotes the number of dimensions of A (the phase space)
// - m is the max value the coordinates that the points of A can have.
// - also m is the max value the sum of coordinates of the points p can have.
const takeValidPoints = (n:number, m:number) => {
  
  // Initialize the list of valid points to empty
  let valids = []
  
  // All the posibilities are taken into account
  let phaseSpaceCardinality = (m + 1) ** n

  // Visits the entire phase space searching for good points
  for (let ordinal = 0; ordinal < phaseSpaceCardinality; ++ordinal) {

    // the number expressed in base <degree+1>. This is the punch line!
    let point = transform(n, m+1, ordinal)

    // the point tested (and adopted if its digits sum is adequate)
    if (point.reduce(add, 0) <= m) {

      valids.push(point)

    }

  }

  return valids

}



// Returns a matrix where each row is a exponents array for each term in the polynomial
// A 'exponents array' is a vector containing the powers at which the correspondent 
// independent variable must be raised

export const exponents = (dimensions:number, degree:number) => {
  
  // Add zero degree case
  if (degree === 0) {
    return [repeat(0,dimensions)]
  }

  // Gathering the points whose sum of elements is less or equal to the given degree
  let stack = takeValidPoints(dimensions, degree)

  // On delivery be polite and give a neat, ordered list
  return sort( byRelevance, stack)

}

