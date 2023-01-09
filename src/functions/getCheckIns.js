export default async function getCheckIns(email, token) {
    let response = await fetch("https://hub.the-wellness-cloud.com/wp-json/mo/v1/posts/mood_tracker", {
        headers: {
            // "Authorization": `Bearer ${token}`
        }
    });
    response = await response.json();

    let checkIns = [];
    for (let i = 0; i < response.length; i++) {
        let responseItems = await fetch(`https://hub.the-wellness-cloud.com/wp-json/wp/v2/mood_tracker/${response[i].ID}`, {
            method: "GET",
            headers: {
                // "Authorization": `Bearer ${token}`
            }
        });
        responseItems = await responseItems.json();

        if(responseItems.data && responseItems.data.status != undefined && responseItems.data.status == 403) {
            continue;
        } else {
            if(responseItems.acf.email === email) {
                checkIns.push(responseItems);
            }
        }
    }

    return checkIns;
}