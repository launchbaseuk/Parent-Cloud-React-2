export default async function getSubscriptions(email) {
    let activeSubscription = false;

    let responseGetID = await fetch(`https://parentcloud.borne.io/wp-json/mp/v1/members?search=${email}`, {
        method: 'GET',
        headers: {
            "MEMBERPRESS-API-KEY": "8T5AkgBptM"
        }
    });
    responseGetID = await responseGetID.json();

    let responseGetSubscriptions = await fetch(`https://parentcloud.borne.io/wp-json/mp/v1/subscriptions?member=${responseGetID[0].id}`, {
        method: 'GET',
        headers: {
            "MEMBERPRESS-API-KEY": "8T5AkgBptM"
        }
    });
    responseGetSubscriptions = await responseGetSubscriptions.json();

    for(let i=0; i<responseGetSubscriptions.length; i++) {
        if(responseGetSubscriptions[i].status === "active") {
            activeSubscription = true;
            break;
        } else {
            activeSubscription = false;
        }
    }

    if(activeSubscription) {
        return true;
    }

    return false;
}