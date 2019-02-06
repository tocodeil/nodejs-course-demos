function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function main() {
    for (let i = 0; i < 10; i++) {
        await sleep(1000);
        console.log(i);
    }
}

main();