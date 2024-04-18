async function main() {
    const res = await fetch('https://swapi.dev/api/people/1');
    const data = await res.json();
    console.log(data.name);
}

main();
