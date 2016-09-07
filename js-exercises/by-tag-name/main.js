console.log(getElementsByTagName(document.body, "h1")); // [Node, Node, ...]

/*
  API:

  childNodes: [Node, Node, ...]
  parentNode: Node
  nextSibling: Node
  previousSibling: Node
  firstChild: Node
  lastChild: Node
*/


function getElementsByTagName (root, tagName) {
  var elements = [];
  var childNodes = getElementNodes(root);

  for (var i = 0; i < childNodes.length; i++) {
    if (childNodes[i].nodeName.toLowerCase() === tagName.toLowerCase()) {
      elements.push(childNodes[i]);
    }
  }

  return elements;
}

function getElementNodes (root) {
  var elements = [];

  for (var i = 0; i < root.childNodes.length; i++) {
    if (root.childNodes[i].nodeType === Node.ELEMENT_NODE) {
      elements.push(root.childNodes[i]);
    }
  }
  return elements;
}
