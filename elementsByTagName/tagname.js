function byTagName(node, tagName) {
    tagName = tagName.toUpperCase();
    var hasTagName = [];

    checkChildNode(node.firstChild);
    return hasTagName; 
    
    function checkChildNode(node) { 
      while (node) { 
        if (node.nodeType == 1 && node.tagName) { 
          if (node.tagName === tagName) { 
            hasTagName.push(node); 
          }
          checkChildNode(node.firstChild); 
        }
        node = node.nextSibling; 
      }
    } 
  }
  
  console.log(byTagName(document.body, "h1").length); 
  console.log(byTagName(document.body, "span").length); 
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);