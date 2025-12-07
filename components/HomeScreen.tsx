import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Post {
  id: number;
  title: string;
  body: string;
}

const HomeScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        console.log('POSTS:', data);
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Text style={styles.loading}>Yükleniyor...</Text>;

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#0d1117', padding: 16 },
  loading: { color: '#fff', marginTop: 80, textAlign: 'center', fontSize: 20 },
  card: { backgroundColor: '#161b22', padding: 16, marginBottom: 10, borderRadius: 8 },
  title: { color: '#58a6ff', fontSize: 18, marginBottom: 6, fontWeight: 'bold' },
  body: { color: '#c9d1d9' },
});

export default HomeScreen;