import fetch from 'node-fetch';

let handler = async function (m, { conn, text, usedPrefix }) {
    const apiUrl = `https://lookup.binlist.net/${text}`;
    fetch(apiUrl).then(response => {
        if (!response.ok) {
            return console.log('The page is not working currently');
        }
        return response.json();
    }).then(data => {
        const formattedResult = `
📇| BIN: ${text}
💳| BRAND: ${data.scheme}
🏧| TYPE: ${data.type}
🌐| COUNTRY: ${data.country.name}
🏁| FLAG: ${data.country.emoji}
🏦| BANK: ${data.bank.name}

> *MADE BY Shotgun_Suppressor TEAM*
`;
        m.reply(formattedResult.trim());
    }).catch(error => {
        console.error('Error:', error);
    });
}

handler.command = /^(bin|card)$/i;
export default handler;
