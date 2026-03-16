### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementByID is DOM method that returns a single element using the id attribute. However, getElementsByClassName is a method that returns all the element which has the given class name. Again, querySelector is a method that returns the first element that has the given css selector but querySelectorAll returns all the elements with the css selector.
### 2. How do you create and insert a new element into the DOM?
Ans: In order to create and insert a new element we need to use createElement() method to create an element and appendChild() method to insert the new element.
### 3. What is Event Bubbling? And how does it work?
Ans: When an event occurs on a target element, it moves upward through the DOM tree to the root element of the document, this is called Event Bubbling. When we click on a element it triggers an event on the targer element which travels to the root element and in the way it triggers all matching listeners along the way.
### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans:Instead of attaching event listeners to each child element,we can attach one event listener to the parent and let events bubble up to it, this is called Event Delegation. This method is a useful one as it ensures not all the are attached the same lister individually which saves a lot of memory and makes it dynamic.
### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:preventDefault() method stops the browsers default behaviour for an event, though bubbling happens. However, stopPropagation() method stops the event from bubbling up to the parent from the target element.
