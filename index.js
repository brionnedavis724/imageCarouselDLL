//Import necessary modules
import DoubleLinkedList from './dll';
import images from './images';
import './style.css';

// Create instance of DLL
const list = new DoubleLinkedList();
console.log(list); // list just created so there are 0 images to view

// store the html elements into a variable in js
const viewer = document.getElementById('viewer');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

// Load your images from the array.
/*
dll "list" is empty. give it some images:
loop through images.js file that has been imported above
forEach() is used because images is an array
make a variable to store ea iteration of images loop (call it image)
at ea iteration, push the image at the index to the end of list
*/
images.forEach((image) => list.push(image));
console.log(list); // list should now have all images from images.js

//Set the initial image in the gallery.
let idx = 0; // this will be the index set at 0
const counter = document.getElementById('counter'); // this is where index will be stored
counter.innerHTML = idx; // this is where index will be displayed

// Add an event listener to handle when the next button
// is clicked to increment the image gallery.
next.addEventListener('click', function () {
  // Implement the 'next' functionality here.

  // if index is greater than # of length of images
  if (idx >= list.length - 1) {
    // reset the idx counter back to 0
    idx = 0;
    // display idx counter in elem stored in counter
    counter.innerHTML = idx;
    // update the src of viewer to the value of node at current index
    viewer.src = list.getNodeAtIndex(idx).value;
  } else {
    // if idx is less than length of list increment idx
    idx++;
    // reflect change in counter elem
    counter.innerHTML = idx;
    //change picture w value of the node at current index(idx)
    viewer.src = list.getNodeAtIndex(idx).value;
  }
});

// Add an event listener to handle when the previous button
// is clicked to decrement the image gallery.
prev.addEventListener('click', function () {
  // Impliment the previous functionality here.
  if (idx === 0) {
    idx = list.length - 1;
    counter.innerHTML = idx;
    viewer.src = list.getNodeAtIndex(idx).value;
  } else {
    idx--;
    counter.innerHTML = idx;
    viewer.src = list.getNodeAtIndex(idx).value;
  }
});

console.log(list.getNodeAtIndex(3));
list.insertAtIndex(
  3,
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tKVNq9iCO1QIGLmBGjQ3WgHaEK%26pid%3DApi&f=1'
);
// console.log(list);
list.removeAtIndex(4);
list.pop();
list.push(
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.30fuPl3x9KvMB2ZYW0k7owHaEK%26pid%3DApi&f=1'
);
list.shift();
list.unshift(
  'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tom-archer.com%2Fwp-content%2Fuploads%2F2020%2F03%2Fdubai-skyline-cityscape-5.jpg&f=1&nofb=1'
);
