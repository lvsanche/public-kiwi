import React from 'react';

const ErrorBanner = ({error}) => {
    var errorBanner;
    if ( typeof error === 'string' || error === null){
        errorBanner = <p className='error container'>{error}</p>
    }
    else {
        //means the the error is an array of error msgs
        var tempStr = '';
        error.forEach(msg => tempStr+= msg+', ');
        errorBanner = <p className='error container'>{ tempStr.slice(0, tempStr.length -2) }</p>
    }
    return errorBanner;
}
    


export default ErrorBanner;