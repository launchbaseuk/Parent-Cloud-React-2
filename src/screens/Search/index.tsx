import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";

import ListItem from "../../components/ListItem";

import SearchBg from "../../components/SearchBg";
import TagFilter from "../../components/TagFilter";
import listitemimage from "../../images/ListItemImage.png";
import ComingSoon from "../../images/svg/ComingSoon";
import PrimaryButton from "../../components/shared/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { number } from "yup/lib/locale";
import Loader from "../../components/Loader";
import SearchItem from "../../components/SearchItem";

const { width, height } = Dimensions.get("window");
type ResultsTypes = {
  post_id: number;
  post_title: string;
  post_excerpt: string;
  post_type: string;
  post_image: string;
}[];

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>("");
  const [results, setResults] = useState<ResultsTypes>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearchResults = async () => {
    setLoading(true);
    const request = await fetch(
      `https://hub.parent-cloud.com/wp-json/swgsearch/v1/term/?s=${searchText}`
    );
    const response = await request.json();

    setResults(response);
    setLoading(false);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButton text={"Search"} style={styles.backBtn} />
        {/* <View style={{ width: width, height: height - 200, justifyContent: "center", alignItems: "center" }}>
          <ComingSoon />
          <Text style={{ fontFamily: "SofiaProBlack", color: "#11535C", fontSize: 25, marginTop: 32, marginBottom: 8 }}>Coming soon...</Text>
          <Text style={{ fontFamily: "Montserrat-Regular", color: "#150E00", fontSize: 16, marginBottom: 64, width: width - 140, textAlign: "center" }}>This page is coming soon, please stay tuned!</Text>

          <PrimaryButton text="Go back" onPress={() => navigation.goBack()} />
        </View> */}
        <SearchBg
          searchText={searchText}
          setSearchText={setSearchText}
          onPress={handleSearchResults}
        />

        {results.length > 0 ? (
          <View style={styles.searchResultsBox}>
            <ScrollView>
              <Text
                style={[
                  styles.sectionTitle,
                  { marginLeft: 35, marginBottom: 16, marginTop: 20 },
                ]}
              >
                Search Results
              </Text>

              {loading ? (
                <Loader />
              ) : (
                results.map((result: any) => {
                  return (
                    <SearchItem
                      key={result.post_id}
                      id={result.post_id}
                      title={result.post_title}
                      description={result.post_excerpt}
                      image={result.post_image}
                      type={result.post_type}
                    />
                  );
                })
              )}
            </ScrollView>
          </View>
        ) : loading ? (
          <Loader />
        ) : (
          <View>
            <Text
              style={[styles.sectionTitle, { marginBottom: 16, marginTop: 41 }]}
            >
              What do you want to look for
            </Text>
            {/* <TagFilter /> */}

            {/* <View style={styles.results}>
                <Text
                  style={[styles.sectionTitle, {marginBottom: 16, marginTop: 16}]}>
                  Most searched
                </Text>
                {Array.from({length: 10}).map((_, index) => {
                  return (
                    <ListItem
                      key={index}
                      text="Lorem ipsum dolor sit amet..."
                      description="Lorem ipsum dolor sit amet..."
                      image={listitemimage}
                    />
                  );
                })}
              </View> */}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  results: {
    background: "rgba(242, 242, 242, 0.5)",
    marginLeft: 16,
    marginRight: 16,
    marginTop: 36,
  },
  searchResultsBox: {
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    width: width - 40,
    // height: 532,
    alignSelf: "center",
    marginTop: 10,
    paddingBottom: 10,
    marginBottom: 30,
  },
  backBtn: {},
  bubbleWrapper: {
    flexDirection: "row",
    marginLeft: 20,
  },
  bubble: {
    marginRight: 8,
    // border: 2px solid $violet,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 2,
    borderColor: "#11535C",
    borderRadius: 30,
  },
  bubbleClicked: {
    color: "#FFFAC5",
    backgroundColor: "#11535C",
  },
  sectionTitle: {
    fontFamily: "SofiaProBlack",
    fontSize: 20,
    color: "#11535C",
    width: width - 40,
    alignSelf: "center",
    textAlign: "left",
  },
  actionsContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    width: width - 40,
    alignSelf: "center",
    flexDirection: "row",
    paddingBottom: 73,
    paddingTop: 32,
  },
});

export default SearchScreen;
