let module = {}
module.sayHey = function(){
  let text = 'hello world'
  alert(text)
}

let bindFunction = ::module.sayHey

bindFunction()
