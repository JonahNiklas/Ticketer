import React, { useState } from 'react';
import { Container, Card, CardGroup } from 'react-bootstrap'
import { getPosts, getPostsByAuthorId } from '../../client/postHandler';
import '../../stylesheets/ProfileInfo.css';
import PostInfo from '../createpostpage/PostInfo';
import PostTemplate from '../createpostpage/PostTemplate';
import { Post } from "../../types";

function UserPosts() {
  let rendered=false;

  const [posts, setPosts] = useState<Post[]>([]);
  const activeUser = 500;//this need to be connected to token
  async function getUsersPosts(){
    try {
      setPosts(await getPostsByAuthorId(activeUser));
    } catch (error: any) {
      console.error(error);
    }
  }
  if(!rendered){
    getUsersPosts();
    rendered=true;
  }
  

  return (
    <div className="mt-0 ml-5 mr-5 p-0">
    <Container>     
        <h2 className='text-center'>Dine Ticketer</h2>
        <CardGroup>
          {posts.map((post, idx) => (
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
              />
          ))}
        </CardGroup>
    </Container>
  </div>
  );
}

export default UserPosts;
