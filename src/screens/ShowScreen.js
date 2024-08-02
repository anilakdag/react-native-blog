import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect} from "react";
import { Context } from "../context/BlogContext";
import { useContext } from "react";
import { EvilIcons } from "@expo/vector-icons";

export default function ShowScreen({ route, navigation }) {
  const postId = route.params.postId;
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === postId);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditScreen", { postId })
          }
        >
          <EvilIcons name="pencil" size={35} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
