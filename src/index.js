
let element = document.querySelector("div#now")
element.innerHTML = 'Hello, DOM!<br>'

function onScreen(string) {
   string +=`<br>`
    return  element.innerHTML += string
}
onScreen("Test")
onScreen("Test2")

// binary search tree

function findOrAdd(rootNode, newNode){
    let currentNode = rootNode
    if(newNode.data < rootNode.data){
        currentNode = rootNode.left
        if(currentNode){
          findOrAdd(currentNode, newNode)
        } else {
          rootNode.left = newNode
        }
    } else if(newNode.data > rootNode.data) {
      currentNode = rootNode.right
      if(currentNode){
        findOrAdd(currentNode, newNode)
      } else {
        rootNode.right = newNode
      }
    }
  }

  let node = {data: 5, left:
    {data: 3, left: null, right: null},
      right: {data: 7, left: null,
      right: {data: 9, left: null, right: null}
    }}

    function inOrder(currentNode){
        if(currentNode.left){
          inOrder(currentNode.left)
        }
        onScreen(currentNode.data)
        if(currentNode.right){
          inOrder(currentNode.right)
        }
        onScreen(currentNode.data)
      }

      inOrder(node)
      let newNode = {data: 3, left: null, right: null}
      findOrAdd(node, newNode)
      inOrder(node)
      newNode = {data: 17, left: null, right: null}
      findOrAdd(node, newNode)
      inOrder(node)
      onScreen(node.JSON)
