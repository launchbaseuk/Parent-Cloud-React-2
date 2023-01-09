export default async function uploadCheckIn(feeling, feeling_at_the_moment, what_have_you_been_doing, cognitive_distortions, challenge, interpretation, feeling_now, email, token) {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    console.log(randomString);

    let responseCreate = await fetch("https://hub.the-wellness-cloud.com/wp-json/wp/v2/mood_tracker", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            "title": randomString
        })
    });
    responseCreate = await responseCreate.json();
    console.log(responseCreate.id);

    let responseAddInformation = await fetch(`https://hub.the-wellness-cloud.com/wp-json/acf/v3/mood_tracker/${responseCreate.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            "fields": {
                "feeling": feeling,
                "feeling_at_the_moment": feeling_at_the_moment,
                "what_have_you_been_doing": what_have_you_been_doing,
                "cognitive_distortions": cognitive_distortions,
                "challenge": challenge,
                "interpretation": interpretation,
                "feeling_now": feeling_now,
                "email": email
            }
        })
    });
    responseAddInformation = await responseAddInformation.json();
    console.log(responseAddInformation);

    return true;
}
