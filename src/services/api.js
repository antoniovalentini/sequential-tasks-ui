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

const step1 = async () => await snooze(2000);
const step2 = async () => await snooze(1500);
const step3 = async () => await snooze(500);
const step4 = async () => await snooze(500);

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

// expose your method to other services or actions
const API = {
    get,
    step1,
    step2,
    step3,
    step4,
};
export default API;
