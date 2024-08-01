export default async function decorate(block) {
    let listEl = document.createElement('ul');
    fetch("test-spreadsheet.json?limit=20")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((testData) => {
            testData?.data?.forEach(data => {
                const li = document.createElement('li');
                li.innerText = data?.TC1 + ': ' + data.TC2;
                listEl.appendChild(li);
            });
            block.appendChild(listEl);
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}