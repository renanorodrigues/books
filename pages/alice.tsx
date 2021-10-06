import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const Alice: React.FC = () => {
  return (
    <article>
      <Navigation />
    
      <Row>
        <Col lg={12}>
          <header className="title-header">
            <h1>Alice in Wonderland</h1>
          </header>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <section>
            <header>
              <h2>Chapter 1 (excerpt)</h2>
            </header>
            <blockquote>Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, &apos;and what is the use of a book,&apos; thought Alice &apos;without pictures or conversation?&apos;</blockquote>
            <blockquote>So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.</blockquote>
            <p>- Lewis Carroll</p>
          </section>
        </Col>
        <Col className="mt-5" lg={4}>
          <Image 
            width={400} 
            height={250}
            alt="montains with clouds anywhere"
            src={"https://source.unsplash.com/collection/wonderland/400x250"} />
        </Col>
      </Row>
    </article>
  )
}

export default Alice;