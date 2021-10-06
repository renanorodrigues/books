import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const Peter = () => (
  <article>
    <Navigation />

    <Row>
      <Col lg={12}>
        <header className="title-header">
          <h1>Peter & Wendy</h1>
        </header>
      </Col>
    </Row>

    <Row>
      <Col lg={8}>
        <section>
          <header>
            <h2>Chapter 1 (excerpt)</h2>
          </header>
          <blockquote>All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a garden, and she plucked another flower and ran with it to her mother. I suppose she must have looked rather delightful, for Mrs. Darling put her hand to her heart and cried, &apos;Oh, why can&apos;t you remain like this for ever!&apos; This was all that passed between them on the subject, but henceforth Wendy knew that she must grow up. You always know after you are two. Two is the beginning of the end.</blockquote>
          <p>- J. M. Barrie</p>
        </section>
      </Col>
      <Col className="mt-5" lg={4}>
        <Image width={400} height={250} alt="montains in background and forest with snow" src={"https://source.unsplash.com/collection/fly/400x250"} />
      </Col>
    </Row>
  </article>
);

export default Peter;