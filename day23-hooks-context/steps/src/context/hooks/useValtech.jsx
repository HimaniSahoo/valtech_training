let useValtech = (arg)=>{
    var message = "welcome to Valtech"
    if(arg===1){
        return ({message}.toUppercase())
    }else if(arg===2){
        return ({message}.toLowercase())
    }
}
export default useValtech