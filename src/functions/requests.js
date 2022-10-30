import AsyncStorage from "@react-native-async-storage/async-storage";

async function getFilters() {
    const token = await AsyncStorage.getItem("token");
    const response = await fetch(`https://parentcloud.borne.io/wp-json/wp/v2/master_filter`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    let filters = [];

    for(let i=0; i<data.length; i++) {
        filters.push({
            id: data[i].id,
            name: data[i].name,
            slug: data[i].slug
        });
    }

    return filters;
}

async function getGuides() {
    const token = await AsyncStorage.getItem("token");
    const filters = await getFilters();
    let guides = [];

    for (let i = 0; i < filters.length; i++) {
        let response = await fetch(`https://parentcloud.borne.io/wp-json/wp/v2/guides?master_filter=${filters[i].id}`, {
            headers: {
            Authorization: `Bearer ${token}`,
            }
        });
        response = await response.json();

        // Check if the filter exists, if it does push it otherwise create new filter
        if (guides.find((guide) => guide.filter === filters[i].name)) {
            guides.find((guide) => guide.filter === filters[i].name).guides.push(response);
        } else {
            guides.push({
                filter: filters[i].name,
                guides: response
            });
        }
    }

    return guides;
};

async function getPageDocs(page) {
    const token = await AsyncStorage.getItem("token");
    const filters = await getFilters();

    for (let i = 0; i < filters.length; i++) {
        if(filters[i].slug === page) {
            let response = await fetch(`https://parentcloud.borne.io/wp-json/wp/v2/guides?master_filter=${filters[i].id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            response = await response.json();

            return response;           
        }
    }
}

async function getVideos() {
    const token = await AsyncStorage.getItem("token");
    let videos = [];
    const filters = await getFilters();
    // const response = await fetch(`https://parentcloud.borne.io/wp-json/mo/v1/posts/videos`, {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //     }
    // });
    // const data = await response.json();

    // for(let i=0; i<data.length; i++) {
    //     if(data[i].post_status === "publish") {
    //         videos.push(data[i]);
    //     }
    // }

    for (let i = 0; i < filters.length; i++) {
        let response = await fetch(`https://parentcloud.borne.io/wp-json/wp/v2/videos?master_filter=${filters[i].id}`, {
            headers: {
            Authorization: `Bearer ${token}`,
            }
        });
        response = await response.json();

        // Check if the filter exists, if it does push it otherwise create new filter
        if(response.length > 0) {
            for(let j=0; j<response.length; j++) {
                videos.push(response[j]);
            }
        }
    }

    return videos;
}

async function getPodcasts() {
    const token = await AsyncStorage.getItem("token");
    let podcasts = [];
    const response = await fetch(`https://parentcloud.borne.io/wp-json/mo/v1/posts/videos`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    const data = await response.json();

    for(let i=0; i<data.length; i++) {
        if(data[i].post_status === "publish" && !(data[i].post_content.includes("wp:embed"))) {
            podcasts.push(data[i]);
        }
    }

    return podcasts;
}

export { getGuides, getPageDocs, getVideos, getPodcasts };

// filters {"id": 31, "name": "Adult Nutrition", "slug": "adult-nutrition"}
// LOG  filters {"id": 80, "name": "Bereavement", "slug": "bereavement"}
// LOG  filters {"id": 58, "name": "Breastfeeding", "slug": "breastfeeding"}
// LOG  filters {"id": 22, "name": "Child Behaviour", "slug": "child-behaviour"}
// LOG  filters {"id": 32, "name": "Child Nutrition &amp; Weaning", "slug": "child-nutrition-weaning"}
// LOG  filters {"id": 34, "name": "Children’s Mental Health", "slug": "childrens-mental-health"}
// LOG  filters {"id": 35, "name": "Coaching &amp; Career", "slug": "coaching-career"}
// LOG  filters {"id": 30, "name": "Expectant Parent", "slug": "expectant-parent"}
// LOG  filters {"id": 81, "name": "Family Activity", "slug": "family-activity"}
// LOG  filters {"id": 68, "name": "Fertility", "slug": "fertility"}
