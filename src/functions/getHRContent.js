import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function getHRContent() {
  const token = await AsyncStorage.getItem('token');

  let response = await fetch(
    'https://parentcloud.borne.io/wp-json/wp/v2/categories',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  response = await response.json();

  let catId;

  for (let i = 0; i < response.length; i++) {
    if (response[i].slug.includes('hr')) {
      catId = response[i].id;
      break;
    }
  }

  let responseInformation = await fetch(
    `https://parentcloud.borne.io/wp-json/wp/v2/categories/${catId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  responseInformation = await responseInformation.json();

  let postTypes = responseInformation._links['wp:post_type'];

  let postTypesItems = [];
  // loop through postTypes, make a request for each one and push the response to postTypesItems like this: type: [{}, {}, {}]
  for (let i = 0; i < postTypes.length; i++) {
    let response = await fetch(postTypes[i].href.replace('https', 'http'), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    response = await response.json();

    for (let i = 0; i < response.length; i++) {
      let type = response[i].type;
      let excerpt = response[i].excerpt.rendered.replace(/<[^>]*>?/gm, '');
      let title = response[i].title.rendered;
      let content = response[i].content.rendered;

      console.log(response[i]);

      if (postTypesItems.find(item => item.type === type)) {
        postTypesItems
          .find(item => item.type === type)
          .items.push({
            title,
            excerpt,
            content,
          });
      } else {
        postTypesItems.push({
          type,
          items: [
            {
              title,
              excerpt,
              content,
            },
          ],
        });
      }
    }
  }

  return postTypesItems;
}
