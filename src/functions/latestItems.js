import { getGuides, getVideos } from "./requests";

export default async function latestItems() {
    let guides = await getGuides();
    let videos = await getVideos();

    let latestGuides = [];
    let latestVideos = [];
    let randomFilters = [];

    while (randomFilters.length < 3) {
        let random = Math.floor(Math.random() * guides.length);
        if (!randomFilters.includes(random)) {
            randomFilters.push(random);
        }
    }

    latestGuides.push(guides[randomFilters[0]].guides[0]);
    latestGuides.push(guides[randomFilters[1]].guides[0]);
    latestGuides.push(guides[randomFilters[2]].guides[0]);

    for (let i = 0; i < 3; i++) {
        latestVideos.push(videos[i]);
    }

    return [latestGuides, latestVideos];
}