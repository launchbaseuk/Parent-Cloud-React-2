import moment from "moment";

export default async function getSubscriptions(email) {
  let activeSubscription = false;

  let responseGetID = await fetch(
    `https://hub.parent-cloud.com/wp-json/mp/v1/members?search=${email}`,
    {
      method: "GET",
      headers: {
        "MEMBERPRESS-API-KEY": "8T5AkgBptM",
      },
    }
  );
  responseGetID = await responseGetID.json();

  let responseGetSubscriptions = await fetch(
    `https://hub.parent-cloud.com/wp-json/mp/v1/subscriptions?member=${responseGetID[0].id}`,
    {
      method: "GET",
      headers: {
        "MEMBERPRESS-API-KEY": "8T5AkgBptM",
      },
    }
  );
  responseGetSubscriptions = await responseGetSubscriptions.json();

  if (responseGetSubscriptions.length > 0) {
    for (let i = 0; i < responseGetSubscriptions.length; i++) {
      if (responseGetSubscriptions[i].status === "active") {
        activeSubscription = true;
        break;
      } else {
        activeSubscription = false;
      }
    }

    if (activeSubscription) {
      return true;
    }
  } else {
    console.log("in transactions");
    let responseGetTransactions = await fetch(
      `https://hub.parent-cloud.com/wp-json/mp/v1/transactions?member=${responseGetID[0].id}`,
      {
        method: "GET",
        headers: {
          "MEMBERPRESS-API-KEY": "8T5AkgBptM",
        },
      }
    );
    responseGetTransactions = await responseGetTransactions.json();
    console.log("1");
    if (responseGetTransactions.length > 0) {
      for (let i = 0; i < responseGetTransactions.length; i++) {
        let compare = moment(
          responseGetTransactions[i].expires_at
        ).isSameOrBefore(moment(new Date()).format("YYYY-MM-DD HH:mm:ss"));
        if (responseGetTransactions[i].status == "complete" && !compare) {
          activeSubscription = true;
          console.log("3");
          break;
        } else {
          activeSubscription = false;
          console.log("4");
        }
      }

      if (activeSubscription) {
        return true;
      }
    }
  }

  return false;
}
