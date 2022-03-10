/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import { getPosts } from '../../client/postHandler';
import { Post } from '../../types';
import PostInfo from '../createpostpage/PostInfo';

function RecommendedTicketer() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function getAllPosts() {
    try {
      setPosts(await getPosts());
    } catch (error: any) {
      console.error(error);
    }
  }
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="mt-0 ml-5 mr-5 p-0">
      <Container style={{minHeight:"500px"}}>
        <h2 className="text-center">Anbefalte Ticketer</h2>
        <CardGroup>
          {posts.map((post, idx): JSX.Element => (
            <PostInfo
              key={idx}
              createdAt={post.createdAt}
              timeOfEvent={post.timeOfEvent}
              city={post.city}
              venue={post.venue}
              forSale={post.forSale}
              title={post.title}
              description={post.description}
              category={post.category}
              price={post.price}
              authorId={post.authorId} 
              id={post.id}                                         />
          ))}
        </CardGroup>
      </Container>
    </div>
  );
}

export default RecommendedTicketer;