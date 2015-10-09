
// concatenate array # times & shuffle with each concatenation
function makeBlocks(array,reps) {
  repArray = new Array();
  for (var i = 0; i<reps;i++) {
    repArray = repArray.concat(shuffle(array));
  }
  return repArray;
}

function repeatArray(array,reps) {
    repArray = new Array();
    for (var i = 0; i<reps; i++) {
        repArray = repArray.concat(array);
    }
    return repArray;
}

// Fisher-Yates Shuffle algorithm
function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// make integer series from lb (lower) to ub (upper)
function makeSeries(lb,ub) {
    series = new Array();
    if (ub<=lb) {
      throw new Error("Upper bound should be greater than lower bound!");
    }
   for (var i = lb; i<(ub+1); i++) {
      series = series.concat(i);
   }
   return series;
}

// fast intersection of arrays
// from: https://gist.github.com/lovasoa/3361645#file-array_intersect-js
function array_intersect() {
  var i, all, shortest, nShortest, n, len, ret = [], obj={}, nOthers;
  nOthers = arguments.length-1;
  nShortest = arguments[0].length;
  shortest = 0;
  for (i=0; i<=nOthers; i++){
    n = arguments[i].length;
    if (n<nShortest) {
      shortest = i;
      nShortest = n;
    }
  }

  for (i=0; i<=nOthers; i++) {
    n = (i===shortest)?0:(i||shortest); //Read the shortest array first. Read the first array instead of the shortest
    len = arguments[n].length;
    for (var j=0; j<len; j++) {
        var elem = arguments[n][j];
        if(obj[elem] === i-1) {
          if(i === nOthers) {
            ret.push(elem);
            obj[elem]=0;
          } else {
            obj[elem]=i;
          }
        }else if (i===0) {
          obj[elem]=0;
        }
    }
  }
  return ret;
}

// check if any of elements in array match object
function include(arr,obj) {
    return (arr.indexOf(obj) != -1);
} 

function reverseArray(array) {
    var left = null;
    var right = null;
    var length = array.length;
    for (left = 0; left < length / 2; left += 1)
    {
        right = length - 1 - left;
        var temporary = array[left];
        array[left] = array[right];
        array[right] = temporary;
    }
    return array;
}

// BELOW FIND ORIENTATION_REPORT - SPECIFIC HELPER FUNCTIONS

  function linearSpacing(ns) {
    console.log('HIHIIIIII')
    loci = numeric.linspace(0,360,ns+1);
    loci.pop();
    console.log(loci);
    offset = parseInt(Math.random()*Math.ceil(360/ns));
    console.log(offset);
    loci = _.map(loci,function(num){ return (num + offset)%360});
    return loci;
  }































