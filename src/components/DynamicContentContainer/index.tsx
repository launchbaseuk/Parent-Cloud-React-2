import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Loader from '../../components/Loader';

const {width, height} = Dimensions.get('window');
export default function DynamicContentContainer({
  title,
  excerpt,
  mediaId,
}: any) {
  const [image, setImageUrl] = useState<any>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://parentcloud.borne.io/wp-json/wp/v2/media/${mediaId}`,
      );
      const data = await response.json();

      let imageUrl = data.guid.rendered;
      // replace everything before the third slash with nothing
      imageUrl =
        'https://parentcloud.borne.io/' +
        imageUrl.split('/').slice(3).join('/');

      setImageUrl(imageUrl);
      setLoading(false);
    })();
  }, [mediaId]);

  return (
    <TouchableOpacity style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <Image style={styles.image} source={{uri: image}} />
      )}
      <Text style={styles.title}>{title}</Text>
      <Text numberOfLines={3} style={styles.excerpt}>
        {excerpt}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: 220,
    borderRadius: 8,
    backgroundColor: '#F2F2F280',
    marginTop: 12,
  },
  image: {
    width: '90%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 8,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: '#11535C',
    fontSize: 15,
    marginLeft: 18,
    width: '90%',
    marginTop: 5,
  },
  excerpt: {
    fontFamily: 'Montserrat-Regular',
    color: '#150E00',
    fontSize: 13,
    marginLeft: 18,
    width: '90%',
    marginTop: 5,
  },
});
