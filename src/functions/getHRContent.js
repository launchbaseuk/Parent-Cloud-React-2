import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function getHRContent() {
  const token = await AsyncStorage.getItem('token');

  // let response = await fetch(
  //   'https://hub.the-wellness-cloud.com/wp-json/wp/v2/categories'
  //   // {
  //   //   headers: {
  //   //     Authorization: `Bearer ${token}`,
  //   //   },
  //   // },
  // );
  // response = await response.json();

  // let catId;

  // for (let i = 0; i < response.length; i++) {
  //   if (response[i].slug.includes('hr')) {
  //     catId = response[i].id;
  //     break;
  //   }
  // }

  // let responseInformation = await fetch(
  //   `https://hub.the-wellness-cloud.com/wp-json/wp/v2/categories/${catId}`
  //   // {
  //   //   headers: {
  //   //     Authorization: `Bearer ${token}`,
  //   //   },
  //   // },
  // );
  // responseInformation = await responseInformation.json();

  // let postTypes = responseInformation._links['wp:post_type'];

  let postTypesItems = [];
  let response = await fetch(`https://hub.the-wellness-cloud.com/wp-json/wp/v2/guides?categories=45`
    // {
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
    // }
  );
  response = await response.json();
  let responseVideos = await fetch(`https://hub.the-wellness-cloud.com/wp-json/wp/v2/videos?categories=45`
    // {
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
    // }
  );
  responseVideos = await responseVideos.json();

  for (let i = 0; i < response.length; i++) {
    console.log(response[i]);
    let type = response[i].type;
    let excerpt = response[i].excerpt.rendered.replace(/<[^>]*>?/gm, '');
    let title = response[i].title.rendered.replace(/&[^;]*;/g, '');
    let content = response[i].content.rendered;
    let vimeoLink;

    if (content.includes('https://player.vimeo.com/video/')) {
      vimeoLink = content.substring(
        content.indexOf('https://player.vimeo.com/video/'),
        content.indexOf('frameborder=') - 2,
      );
      vimeoLink = vimeoLink.substring(
        vimeoLink.indexOf('/', 8),
        vimeoLink.indexOf('?'),
      );
      vimeoLink = 'https://player.vimeo.com' + vimeoLink;
    }

    console.log(vimeoLink);

    if (postTypesItems.find(item => item.type === type)) {
      postTypesItems
        .find(item => item.type === type)
        .items.push({
          title,
          excerpt,
          content,
          vimeoLink,
        });
    } else {
      postTypesItems.push({
        type,
        items: [
          {
            title,
            excerpt,
            content,
            vimeoLink,
          },
        ],
      });
    }
  }
  
  for (let i = 0; i < responseVideos.length; i++) {
    let type = responseVideos[i].type;
    let excerpt = responseVideos[i].excerpt.rendered.replace(/<[^>]*>?/gm, '');
    let title = responseVideos[i].title.rendered.replace(/&[^;]*;/g, '');
    let content = responseVideos[i].content.rendered;
    let vimeoLink;

    if (content.includes('https://player.vimeo.com/video/')) {
      vimeoLink = content.substring(
        content.indexOf('https://player.vimeo.com/video/'),
        content.indexOf('frameborder=') - 2,
      );
      vimeoLink = vimeoLink.substring(
        vimeoLink.indexOf('/', 8),
        vimeoLink.indexOf('?'),
      );
      vimeoLink = 'https://player.vimeo.com' + vimeoLink;
    }

    console.log(vimeoLink);

    if (postTypesItems.find(item => item.type === type)) {
      postTypesItems
        .find(item => item.type === type)
        .items.push({
          title,
          excerpt,
          content,
          vimeoLink,
        });
    } else {
      postTypesItems.push({
        type,
        items: [
          {
            title,
            excerpt,
            content,
            vimeoLink,
          },
        ],
      });
    }
  }
  // loop through postTypes, make a request for each one and push the response to postTypesItems like this: type: [{}, {}, {}]
  // if(postTypes.length > 0) {
  //   for (let i = 0; i < postTypes.length; i++) {
  //     let response = await fetch(`https://hub.the-wellness-cloud.com/wp-json/wp/v2/guides?categories=45`
  //       // {
  //       // headers: {
  //       //   Authorization: `Bearer ${token}`,
  //       // },
  //     // }
  //     );
  //     response = await response.json();

  //     for (let i = 0; i < response.length; i++) {
  //       console.log(response[i]);
  //       let type = response[i].type;
  //       let excerpt = response[i].excerpt.rendered.replace(/<[^>]*>?/gm, '');
  //       let title = response[i].title.rendered;
  //       let content = response[i].content.rendered;
  //       let vimeoLink;

  //       if (content.includes('https://player.vimeo.com/video/')) {
  //         vimeoLink = content.substring(
  //           content.indexOf('https://player.vimeo.com/video/'),
  //           content.indexOf('frameborder=') - 2,
  //         );
  //         vimeoLink = vimeoLink.substring(
  //           vimeoLink.indexOf('/', 8),
  //           vimeoLink.indexOf('?'),
  //         );
  //         vimeoLink = 'https://player.vimeo.com' + vimeoLink;
  //       }

  //       console.log(vimeoLink);

  //       if (postTypesItems.find(item => item.type === type)) {
  //         postTypesItems
  //           .find(item => item.type === type)
  //           .items.push({
  //             title,
  //             excerpt,
  //             content,
  //             vimeoLink,
  //           });
  //       } else {
  //         postTypesItems.push({
  //           type,
  //           items: [
  //             {
  //               title,
  //               excerpt,
  //               content,
  //               vimeoLink,
  //             },
  //           ],
  //         });
  //       }
  //     }
  // }
  // }

  return postTypesItems;
}
