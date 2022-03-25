import React, { useEffect, useState } from 'react';
import { Container, CardGroup, Row, Col } from 'react-bootstrap';
import { getPostsByAuthorId } from '../../client/postHandler';
import '../../stylesheets/ProfileInfo.css';
import PostInfo from '../createpostpage/PostInfo';
import { Post } from '../../types';
import { store } from '../../redux/store';

function UserPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const activeUserId = store.getState().user.userId;

  async function getUsersPosts() {
    if (activeUserId) {
      try {
        setPosts(await getPostsByAuthorId(activeUserId));
      } catch (error: any) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    getUsersPosts();
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <h2 className="text-center">Dine Ticketer</h2>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <CardGroup className="justify-content-md-center">
            {posts.map((post, idx) => (
              <PostInfo
                key={idx}
                id={post.id}
                createdAt={post.createdAt}
                timeOfEvent={post.timeOfEvent}
                city={post.city}
                venue={post.venue}
                isActive={post.isActive}
                forSale={post.forSale}
                title={post.title}
                description={post.description}
                category={post.category}
                price={post.price}
                authorId={post.authorId}
              />
            ))}
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default UserPosts;
