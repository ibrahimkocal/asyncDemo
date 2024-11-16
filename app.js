async function getData(userId) {
    const result = await(
        await fetch (`https://jsonplaceholder.typicode.com/users/` + userId)
    ).json();

    const result2 = await(
        await fetch (`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    ).json();

    console.log(result);
    console.log(result2);

}

getData(2);