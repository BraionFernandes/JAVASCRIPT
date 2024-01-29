const obj={
    thisLocal: function(){
        const thisLocal=(()=> console.log(this))
        ()
        console.log(thisLocal);
    }
}

obj.thisLocal();