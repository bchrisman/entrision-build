/*
 *  This script provides the scrolling functionality for the process page
 *
*/

/**
 *
 *  Is the element in the viewport
 *
 *  @param  nodeList  NodeList     A group of elements to iterate through
 *
 *  @return           Boolean      True if in view False otherwise
 *
*/
function inView(nodeList) {
  var nodeList = nodeList,
  // topThird = 0,
  topThird = ((window.innerHeight - (window.innerHeight * 0.6666)) || (document.documentElement.clientHeight - (document.documentElement.clientHeight * 0.6666))),
  bottomThird = ((window.innerHeight * 1)||(document.documentElement.clientHeight * 1));
  // Determine if element enters the magic range from top or bottom
  for (i = 0; i < nodeList.length; i++) {
    if (nodeList[i].getBoundingClientRect().top >= topThird && nodeList[i].getBoundingClientRect().bottom <= bottomThird) {
      if (!nodeList[i].classList.contains('process__active')) {
        nodeList[i].classList.add('process__active');
      }
    } else {
      nodeList[i].classList.remove('process__active');
    }
  }
}
