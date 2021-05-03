
import React from 'react';
import { Button, Card } from 'react-bootstrap';
 import Be_fresh from "../../assets/img/projects/food.png";
 import fresh from "../../assets/img/projects/fresh_move.png";
 import city from "../../assets/img/projects/city_ride.png";
 import Champions from "../../assets/img/projects/chapion_ship.png";
 import women from "../../assets/img/projects/womens_ball.png";



import './projects-timeline.styles.css';


const TimeLine = () => {
  //   return ( {
  return (
    <div id="projects">
      <div >
      <h1 className='text-center text-white 'style={{ fontSize:'60px'}}>Projects</h1>
      </div>
     



     <div className='row'>


{/* 1st project */}
     <div className=" mt-2 mb-5 col-md-4">

<Card className="mt-5 focus"style={{ width: '20rem',height:'620px',backgroundColor:'dark' }}>
      <Card.Title className='text-center mt-1 fs-3' >Be Fresh Food</Card.Title>
  <Card.Img style={{ width: '19.9rem',height:'200px'}} src={Be_fresh} />
  <Card.Body>
    
    <Card.Text className="h-40 ">
      <p style={{textAlign:'justify-center'}} >This is an resturant service  website site. 
        Here user can order different Type of food.
From this website user can easily select their food .
User also see order list and from this order list user easily know order status. 
User have to have a account for order food.
In this website user can give review
WithOut singin user and Admin both can not access this website.
admin and normal User Interface of dashboard is different.</p>
    </Card.Text >
    </Card.Body>
        <div className=" w-10"> 
          <a href="https://github.com/NSumaiya5/Be_Fresh_Food_client"
             target="_blank" rel="noopener noreferrer">
           <Button className="m-2 " style={{backgroundColor: '#1a1f59' }}> Code </Button>
            </a>
           <a href="https://creativeservice-9ca8d.web.app/"
            target="_blank" rel="noopener noreferrer">
            <Button className="m-2 ms-5 " style={{backgroundColor: '#1a1f59' }}>Live</Button>
             </a>
              </div>
</Card>
</div>

{/* second project */}
 <div className=" mt-2 mb-5 col-md-4">
       <Card className="mt-5 focus"style={{ width: '20rem',height:'620px',backgroundColor:'dark' }}>
      <Card.Title className='text-center mt-1 fs-3' >Fresh-Move-Shop</Card.Title>
  <Card.Img style={{ width: '19.9rem',height:'200px'}} src={fresh} />
  <Card.Body>
    
    <Card.Text >
      <p style={{textAlign:'justify-center'}}>This is a product buying site.
User can brought product from here and also see the product details.
For buying product user need a register account .Admin can add and delete product.
User can review the orders.</p>
    </Card.Text >
    </Card.Body>
    <div className=" w-10"> 
          <a href="https://github.com/NSumaiya5/Fresh_Move_Shop_client"
             target="_blank" rel="noopener noreferrer">
           <Button className="m-2 ms-5 " style={{backgroundColor: '#1a1f59' }}> Code </Button>
            </a>
           <a href="https://fresh-move-shop.web.app/home"
            target="_blank" rel="noopener noreferrer">
            <Button className="m-2 ms-5 " style={{backgroundColor: '#1a1f59' }}>Live</Button>
             </a>
              </div>
 
</Card>
</div>
{/* 3rd projects */}
<div className=" mt-2 mb-5 col-md-4">

<Card className="mt-5 focus"style={{ width: '20rem',height:'620px',backgroundColor:'dark' }}>
      <Card.Title className='text-center mt-1 fs-3' >City_Riders</Card.Title>
  <Card.Img style={{ width: '19.9rem',height:'200px'}} src={city} />
  <Card.Body>
    
    <Card.Text>
      <p style={{textAlign:'justify-center'}}>Show vehicles options for ride.
By login rider can select destination .
Rider need to create an account for login.
Rider can see the location in google map.
With unique email rider register only once </p>
    </Card.Text >
    </Card.Body>

    <div className=" w-10"> 
          <a href="https://github.com/NSumaiya5/City_Riders"
             target="_blank" rel="noopener noreferrer">
           <Button className="m-2 ms-5" style={{backgroundColor: '#1a1f59' }}> Code </Button>
            </a>
           <a href="https://react-auth-65009.web.app/"
            target="_blank" rel="noopener noreferrer">
            <Button className="m-2 ms-5 " style={{backgroundColor: '#1a1f59' }}>Live</Button>
             </a>
       </div>
</Card>
</div>
</div>

{/* 4th project */}
    <div className='row '>
    <div className=" mt-2 mb-5 col-md-4">

<Card className="mt-5 focus"style={{ width: '20rem',height:'620px',backgroundColor:'dark' }}>
      <Card.Title className='text-center mt-1 fs-3' >Champions Leagues</Card.Title>
  <Card.Img style={{ width: '19,9rem',height:'200px'}} src={Champions} />
  <Card.Body>
    
    <Card.Text className="h-40">
      <p style={{textAlign:'justify-center'}}>This is a website about "Different leagues".

By clicking on each 'Explore' button you can see the details of selected league.

 Also you can see the social sites of selected league by clicking on social icons below.</p>
    </Card.Text >
    </Card.Body>
        <div className=" w-10"> 
          <a href="https://github.com/NSumaiya5/Champions_League-"
             target="_blank" rel="noopener noreferrer">
           <Button className="m-2 " style={{backgroundColor: '#1a1f59' }}> Code </Button>
            </a>
           <a href="https://happy-edison-550edb.netlify.app/"
            target="_blank" rel="noopener noreferrer">
            <Button className="m-2 ms-5 " style={{backgroundColor: '#1a1f59' }}>Live</Button>
             </a>
              </div>
</Card>
</div>

{/* 5th project */}
<div className=" mt-2 mb-5 col-md-4">

<Card className="mt-5 focus"style={{ width: '20rem',height:'620px',backgroundColor:'dark' }}>
      <Card.Title className='text-center mt-1 fs-3' >Women's-BasketBall</Card.Title>
  <Card.Img style={{ width: '19.9rem',height:'200px'}} src={women} />
  <Card.Body>
    
    <Card.Text className="h-40">
      <p style={{textAlign:'justify-center'}}>This website for selection player. By clicking added  button player can selected.Anyone know Player details from player card.
         </p>
    </Card.Text >
    </Card.Body>
        <div className=" w-10"> 
          <a href="https://github.com/NSumaiya5/Women-s-BasketBall"
             target="_blank" rel="noopener noreferrer">
           <Button className="m-2 " style={{backgroundColor: '#1a1f59' }}> Code </Button>
            </a>
           <a href="https://infallible-pasteur-31c422.netlify.app/"
            target="_blank" rel="noopener noreferrer">
            <Button className="m-2 ms-5 " style={{backgroundColor: '#1a1f59' }}>Live</Button>
             </a>
              </div>
</Card>
</div>


    </div>
    </div>


  
  );
};

export default TimeLine;