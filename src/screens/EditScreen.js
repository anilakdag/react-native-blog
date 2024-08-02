import { StyleSheet } from "react-native";
import React from "react";
import { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function EditScreen({ navigation, route }) {
  const postId = route.params.postId;
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === postId);

  console.log(postId);
  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(postId, title, content, () => navigation.pop());
      }}
    />
  );
}

const styles = StyleSheet.create({});
