
import Card from 'react-bootstrap/Card';
import banner from '../image/banner-img.jpg'

const Home = () => {
  return (
    <>
    <div className='hcontainer '>
        <div className='hcontain'>
             <Card style={{ width: '28rem' }} className='cardcontainer'>
        <Card.Body className='cardbody'>
        <Card.Subtitle className="mb-2 text-muted "> <div className="hbadge">
                <div className='hstar'><i class="fa-solid fa-star"></i></div>
                <span>#1 Rated Fast Food Restaurant in New York</span>
            </div></Card.Subtitle>
        <Card.Title>
            <div className="htitle">
                <h1>Delicious <span>Fast Food</span> <br />  for Every Moment</h1>
            </div>
        </Card.Title>
        
        <Card.Text className='htext'>
          Experience bold flavors crafted from premium ingredients. From crispy burgers to gourmet pizzas - every bite is an adventure worth savoring.
        </Card.Text>
        <Card.Link href="#" className='btnn'> Explore Menu</Card.Link>
        <Card.Link href="#" className='btnwatch'><i class="fa-solid fa-play play"></i>Watch Our Story</Card.Link>
      </Card.Body>
    </Card>

        
        </div>
        
      

        <div className='himg'>
            <img src={banner} alt="" />
        </div>

    </div>

    
    
    </>
  )
}

export default Home