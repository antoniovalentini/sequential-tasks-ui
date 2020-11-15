// function to execute the http get request
const get = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const response = await fetch(url)
        .catch(error => console.log(error));

    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    return await response.json();
};

const step1 = async () => await waitAndResult(2000, "SUCCESS");
const step2 = async () => await waitAndResult(1500, "SUCCESS");
const step3 = async () => await waitAndResult(500, "KO");
const step4 = async () => await waitAndResult(500, "SUCCESS");

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

const waitAndResult = async (ms, res) => {
    await snooze(ms);
    return res;
}

// expose your method to other services or actions
const API = {
    get,
    step1,
    step2,
    step3,
    step4,
};
export default API;
