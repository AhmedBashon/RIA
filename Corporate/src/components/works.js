import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/images/cars/show/image1.jpg'),
    title: 'Ferarri',
    subtitle: 'BLU & WHITE'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/images/cars/show/image2.jpg'),
    title: 'BMW',
    subtitle: 'POWER'
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../assets/images/cars/show/image3.jpg'),
    title: 'Sport Cars',
    subtitle: 'The Fastest'
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: require('../assets/images/cars/show/image4.jpg'),
    title: 'DODGE',
    subtitle: 'Hellcat'
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: require('../assets/images/cars/show/image5.jpg'),
    title: 'FERARRI',
    subtitle: 'The Flame'
  },
  {
    id: 6,
    link: 'https://www.google.com',
    image: require('../assets/images/cars/show/image6.jpg'),
    title: 'JEEP',
    subtitle: 'American Dream'
  },
  {
    id: 7,
    link: 'https://www.google.com',
    image: require('../assets/images/cars/show/image7.jpg'),
    title: 'Porch',
    subtitle: '911'
  },
  {
    id: 8,
    link: 'https://www.google.com',
    image: require('../assets/images/cars/show/image8.jpg'),
    title: 'Classic',
    subtitle: 'Luxury'
  },
  {
    id: 9,
    link: 'https://www.google.com',
    image: require('../assets/images/cars/show/image9.jpg'),
    title: 'Lampo',
    subtitle: 'Classic'
  }
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Cars</h2>
          <div className="subtitle">our awesome works</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

export default AppWorks;