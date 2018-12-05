const expandToArray = (f, l) => { var x=[]; var i=l-f; while(x.push(f++) <=i) {} return x;};

<<<<<<< HEAD
export const isCountingStringValid = (inputStr) => {
    var isValid = true;
    var rawArray = inputStr.split(',').map( st => st.trim() );
    rawArray.forEach( str => {
        if( str.split('-').length === 2){
            var firstNum = parseInt(str.split('-')[0], 10);
            var lastNum = parseInt(str.split('-')[1], 10);
            if ( typeof firstNum !== 'number' ||
                typeof lastNum !== 'number' || isNaN(firstNum+lastNum) ||
                firstNum > lastNum){
                isValid = false;
            }
        }
        else if(str.split('-').length === 1){
            var singleNum = parseInt(str, 10);
            if( typeof singleNum !== 'number' || isNaN(singleNum) ){
                isValid = false;    
            }
        }
        else {
            isValid = false;
        }
    })
    return isValid;
}

export const makeDictFromCountingString = (inputStr) => {
=======
export const createWholeDict = (inputStr) => {
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
    // console.log(inputStr);
    var rawArray = inputStr.split(',').map( st => st.trim() );

    var wholeArray = [];
    rawArray.forEach( str =>
        {   
            if(str.split('-').length === 2){
                var firstNum = parseInt(str.split('-')[0], 10);
                var lastNum = parseInt(str.split('-')[1], 10);
                if ( typeof firstNum === 'number' &&
                typeof lastNum === 'number' && !isNaN(firstNum+lastNum) &&
                firstNum < lastNum){
                    var expandedArray = expandToArray(firstNum,lastNum);
                    
                    wholeArray.push(...expandedArray);
                }
                
            }
            else if(str.split('-').length === 1){
                var singleNum = parseInt(str, 10);
                
                if( typeof singleNum === 'number' && !isNaN(singleNum) ){
                    wholeArray.push(singleNum);
                }
            }
        }
    );

    var dict = {};
    wholeArray.forEach( val => dict[val] = true);
    return dict;
};

export const countingFromString = (inputStr) => {
<<<<<<< HEAD
    const someDict = makeDictFromCountingString(inputStr);
    return Object.keys(someDict).length;
=======
    const someDict = createWholeDict(inputStr);
    return Object.keys(someDict).length;
}

//////////////////////Helper Functions //////////////////
//returns the assessmentID that was last taken
export const findNewestAssessment = ( assessmentIDList, assessmentList ) => {
    var recentID = assessmentList[assessmentIDList[0]].id;
    var recentDate = new Date(assessmentList[assessmentIDList[0]].date);
    for( var i=1; i < assessmentIDList.length; i++) {
      var nD = new Date(assessmentList[assessmentIDList[i]].date);
      if( nD.getTime() > recentDate.getTime() ){
        recentID = assessmentIDList[i];
        recentDate = nD;
      }
    }
    return recentID;
>>>>>>> 98ad0f66c03ec6d13485689bba55708e6d86d80d
}

///////////////////////Bar formatter Helpers
//Helper function for
export const randomBarColorMaker = (txt) => {
    var randMaker = () => Math.floor(Math.random() * 255);
    var rC = [ randMaker(), randMaker(), randMaker() ];
    return {
      label: txt,
      backgroundColor: 'rgba('+rC[0]+','+rC[1]+','+rC[2]+',0.5)'
    }
  }


export const barColorSelector = ( txt, index ) => {
    const colors = [[255,0,0], [255,255,0], [0,255,0], [105,77,117], [255,74, 28], [30, 88, 117], [159,194,204], [209,240,177] ];
    var rC = colors[index];
    return {
        label: txt,
        backgroundColor: 'rgba('+rC[0]+','+rC[1]+','+rC[2]+',0.5)'
    }
}

export const countingLabelMaker = ( maxNum ) => {
    if( typeof maxNum === 'number' && !isNaN(maxNum) && maxNum > 0){
        var labels = new Array(maxNum+1).fill(0);
        for ( var i =0; i < labels.length; i++){
            labels[i] = i.toString();
        }
        return labels;
    }
    else{
        return [];
    }
    
}
