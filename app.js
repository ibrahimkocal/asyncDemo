async function getData(userId) {
    const result = await(
        await fetch (`https://jsonplaceholder.typicode.com/users/` + 4)
    ).json();

    console.log(result);
}

getData(2);