/*
	A way to write a code 	async that looks syncronous.
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
      "https://jsonplaceholder.typicode.com/posts?usersId=" + firstUser.id
    );
  })
  .then((response) => response.json())
  .then((posts) => console.log(posts));
