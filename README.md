Live link: https://sanjanaoney.github.io/emergency-service/



Answer-1: 
The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is given below:
getElementById() find an element by using it's id. As id is unique in a page so this method normally returns a single element.
getElementsByClassName() finds all elements that have similar class name. It returns HTML collections,which is a collection of elements.
querySelector() uses a CSS selector and returns the first matching element. For example, querySelector(".heart-icon") finds the first element with that class.
querySelectorAll() also uses CSS selectors, but it returns all matching elements as a NodeList.
So, the main difference is that the first two methods have specific ways of searching, while querySelector() and querySelectorAll() can use almost any CSS selector.



Answer-2:
First,we create the element using document.createElement().Then we can add content, classes, attributes, or other elements to it.
Finally, insert it into the page using a method such as appendChild().
Example:
const paragraph = document.createElement("p");
paragraph.innerText = "Hello World";
paragraph.classList.add("text");
document.body.appendChild(paragraph); Here, a new paragraph element is created, its text is added, and then it is inserted inside the body.



Answer-3:
Event Bubbling means that when an event happens on an element, the event can move upward through its parent elements.
For example, if a button is inside a div and the button is clicked, the click event happens on the button first. Then it can bubble up to the <div>, and then to other parent elements.
This is called bubbling because the event moves from the target element upward toward the document.



Answer-4:
Event Delegation means adding one event listener to a parent element instead of adding separate listeners to every child element.
It works because of event bubbling.
For example:
const list = document.getElementById("list");
list.addEventListener("click", function(event) 
{
    if (event.target.classList.contains("item"))
    {
        console.log("Item clicked");
    }
});
Here, the parent list handles clicks from its child elements.
It is useful because it can reduce the number of event listeners and it also works well when child elements are added dynamically after the page loads.



Answer-5:
preventDefault() stops the browser's normal default action for an event.
For example, clicking a link normally navigates to another page. Using:event.preventDefault() prevents that normal navigation.
On the other hand stopPropagation() stops the event from continuing to move through the DOM.
For example, event.stopPropagation() can stop a click event from bubbling from a child element to its parent.


