
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const input = document.createElement("p");
    input.innerText = string;
    htmlElement.appendChild(input);
};

htmlGenerator('Party Time.', partyHeader);