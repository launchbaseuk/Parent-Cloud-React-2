export default async function getContentPresenters(token) {
    let presenters = [];

    const response = await fetch("https://parentcloud.borne.io/wp-json/wp/v2/content_presenter", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await response.json();

    for(let i=0; i<data.length; i++) {
        const id = data[i].id;
        
        const secondResponse = await fetch(`https://parentcloud.borne.io/wp-json/wp/v2/content_presenter/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        const dataPresenter = await secondResponse.json();

        let image = dataPresenter._links["wp:featuredmedia"][0].href;

        const thirdResponse = await fetch(image, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        const dataImage = await thirdResponse.json();

        let imageLink = dataImage.guid.rendered;
        imageLink = imageLink.replace(/.*wp-content/, "https://parentcloud.borne.io/wp-content");

        const title = dataPresenter.title.rendered;

        presenters.push({
            id,
            imageLink,
            title
        });
    }

    return presenters;
}

// export default async function getContentPresentersContent(token, presenter) {
//     let content = [];

//     const response = await fetch("https://parentcloud.borne.io/wp-json/mo/v1/posts/live-learning", {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         }
//     });
//     const data = await response.json();

//     for(let i=0; i<data.length; i++) {
//         if(data[i].post_author == presenter) {
//             content.push(data[i]);
//         }
//     }
// }