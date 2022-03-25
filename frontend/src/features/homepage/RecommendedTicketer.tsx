/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import { Post } from '../../types';
import PostInfo from '../createpostpage/PostInfo';

function RecommendedTicketer(props: { posts: Array<Post> }) {
  return (
    <div className="mt-0 ml-5 mr-5 p-0">
      <Container style={{ minHeight: '500px' }}>
        <p className="text-center fs-2">Anbefalte Ticketer</p>
        <CardGroup>
          {props.posts.map(
            (post, idx): JSX.Element => (
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
            )
          )}
        </CardGroup>
      </Container>
    </div>
  );
}

export default RecommendedTicketer;
