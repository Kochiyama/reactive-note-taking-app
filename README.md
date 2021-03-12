# Notes App with react with observer paradigm

Sometimes we need to handle the state on higher components on our hierarchy.
When a value on our state needs to be used on multiple components we usually put
the state above and above till all the components that use this data are bellow of it.
But looking behind the scenes, when we change this state ALL the children components
are re-rendered. On a small and study application this may not be noticieble.
But when the application starts to grow, or our client computer is not the best,
every component rendered unnecessary would decrease our performance.

To solve that problem the Reactive Programming Paradigm exists, we extract the data management
responsibility to our observers and let the state localized just on components
that really need to update when the data changes.

# About this app

This app is a simple note taking app:

- create notes
  - category
  - title
  - note
- delete notes
- create new categories

This app was implement following the concepts of reactive programming.
