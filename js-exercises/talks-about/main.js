console.log(talksAbout(document.body, "Politics")); // -> true



function talksAbout (root, word) {
  if (root.nodeType === Node.TEXT_NODE) {
    return root.nodeValue.toLowerCase().indexOf(word.toLowerCase()) !== -1;
  } else if (root.nodeType === Node.ELEMENT_NODE) {
    for (var i = 0; i < root.childNodes.length; i++) {
      if (talksAbout(root.childNodes[i], word)) {
        return true;
      }
    }
    return false;
  }
}
