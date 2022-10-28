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

export { getGuides };