import React, { useEffect, useState } from 'react';
import { Post } from '../../types';
import { getPostsByCategory } from '../../client/postHandler';
import { CardGroup, Container } from 'react-bootstrap';
import PostInfo from '../createpostpage/PostInfo';

const FilteredTicketer = () => {
const [posts, setPosts] = useState<Post[]>([]);

  async function getFilteredPosts() {
    try {
      setPosts(await getPostsByCategory('Show'));
    } catch (error: any) {
      console.error(error);
    }
  }
  useEffect(() => {
    getFilteredPosts();
  }, []);
    return(
        <div className="mt-0 ml-5 mr-5 p-0">
            <Container>
            <h2 className="text-center">Anbefalte Ticketer</h2>
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

export default FilteredTicketer;