import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import Navigation from '../components/Navigation';

const Journey: React.FC = () => {
  return (
    <article>
      <Navigation />

      <Row>
        <Col lg={12}>
          <header className="title-header">
            <h1>A Journey to the Centre of the Earth</h1>
          </header>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <section>
            <header>
              <h2>Chapter 1 (excerpt)</h2>
            </header>
            <blockquote>Looking back to all that has occurred to me since that eventful day, I am scarcely able to believe in the reality of my adventures. They were truly so wonderful that even now I am bewildered when I think of them.</blockquote>
            <blockquote>My uncle was a German, having married my mother&apos;s sister, an Englishwoman. Being very much attached to his fatherless nephew, he invited me to study under him in his home in the fatherland. This home was in a large town, and my uncle a professor of philosophy, chemistry, geology, mineralogy, and many other ologies.</blockquote>
            <p>- Jules Verne</p>
          </section>
        </Col>
        <Col className="mt-5" lg={4}>
          <Image width={400} height={250} alt="multiples notebooks" src={"https://source.unsplash.com/collection/journey/400x250"} />
        </Col>
      </Row>
    </article>
  )
}

export default Journey;