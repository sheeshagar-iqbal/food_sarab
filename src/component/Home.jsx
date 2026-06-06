
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <>
    <div className='hcontainer'>
        <div className='hcontain'>
           

        

        </div>
        
        <Card style={{ width: '18rem' }}>
        <Card.Body>
        <Card.Subtitle className="mb-2 text-muted"> <div className="hbadge">
                <div className='hstar'><i class="fa-solid fa-star"></i></div>
                <span>#1 Rated Fast Food Restaurant in New York</span>
            </div></Card.Subtitle>
        <Card.Title>
            <div className="htitle">
                <h1>Delicious Fast Food <br />  for Every Moment</h1>
            </div>
        </Card.Title>
        
        <Card.Text className='htext'>
          Experience bold flavors crafted from premium ingredients. From crispy burgers to gourmet pizzas - every bite is an adventure worth savoring.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>

        <div className='himg'>
            <img src="https://themewagon.github.io/sarab/img/banner-img.jpg" alt="" />
        </div>

    </div>
    
    </>
  )
}

export default Home