
let element = document.querySelector("div#now")
element.innerHTML = 'Hello, DOM!<br>'

function onScreen(string) {
   string +=`<br>`
    return  element.innerHTML += string
}
onScreen("Test")
onScreen("Test2")

// display object on the DOM
const show = (obj) => {
    onScreen(JSON.stringify(obj, null, 4));
}


// binary search tree

function findOrAdd(currentNode, newNode){
    if(currentNode.data == newNode.data){
      return true
    }
    if(newNode.data < currentNode.data){
      if(currentNode.left){
        return findOrAdd(currentNode.left, newNode)
      } else {
        return currentNode.left = newNode
      }
    }
  
    if(newNode.data > currentNode.data){
      if(currentNode.right){
        return findOrAdd(currentNode.right, newNode)
      } else {
        return currentNode.right = newNode
      }
    }
  }

  let node = {data: 5, left:
    {data: 3, left: null, right: null},
      right: {data: 7, left: null,
      right: {data: 9, left: null, right: null}
    }}

    let arr = []
    function inOrder(currentNode){
       
          if(currentNode.left){
            inOrder(currentNode.left)
          }
         arr.push(currentNode.data)
          if(currentNode.right){
            inOrder(currentNode.right)
          }
          arr.push(currentNode.data)
          return arr
        }

    
      
      let newNode = {data: 3, left: null, right: null}
      findOrAdd(node, newNode)

      newNode = {data: 17, left: null, right: null}
      findOrAdd(node, newNode)
     
    show(node)
    
   let newer = findOrAdd(node, {data: 2, left: null, right: null})
    show(node)
   let new2 = findOrAdd(node, {data: 18, left: null, right: null})
    show(node)
   let new3 = findOrAdd(node, {data: 3, left: null, right: null})
    show(node)
    let result = findOrAdd(node, {data: 18, left: null, right: null})
    onScreen(result)
let example = inOrder(node)
show(example)
    function min(tree) {
        let values = inOrder(node)
        let unique = [...new Set(values)]
        return Math.min(...unique) 
    }
   
onScreen(min(node))