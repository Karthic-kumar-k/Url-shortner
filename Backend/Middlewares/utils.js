function isValid(arg){
    return arg != null && arg != undefined
}

function getErrorMessage(step,msg){
    return {step : step, error_message : msg}
}


module.exports = {isValid, getErrorMessage}
