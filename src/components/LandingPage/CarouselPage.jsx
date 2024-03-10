import Carousel from 'react-bootstrap/Carousel';
import  './CarouselPage.css'
function CarouselPage() {
  return (
    <Carousel className='' >
     <Carousel.Item interval={1000}>
  <img className='relative' src='https://149842022.v2.pressablecdn.com/activello/wp-content/uploads/sites/57/2012/03/photo-1437915015400-137312b61975-1920x550.jpg' />
 
</Carousel.Item>


      <Carousel.Item interval={1000}>
      <img src='https://149842022.v2.pressablecdn.com/activello/wp-content/uploads/sites/57/2015/11/photo-1431578500526-4d9613015464-1920x550.jpg' />
      <div className="absolute inset-0 bg-black opacity-40"></div> 
      <Carousel.Caption className='static'>
    <span className='relative right-20 bottom-20 md:text-4xl font-semibold xs:text-xs'>Discover Life's Infinite Adventures</span>
   {/* <p>In the expansive realm of the digital world, an orchestra of diverse voices harmonize through <br/>the profound medium of blogs, resonating with profound thoughts, intricate emotions, and compelling perspectives, forging a tapestry</p> */}
  </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src='https://149842022.v2.pressablecdn.com/activello/wp-content/uploads/sites/57/2015/11/oIpwxeeSPy1cnwYpqJ1w_Dufer-Collateral-test-1920x550.jpg' />
      <Carousel.Caption className='static'>
    <span className='relative right-20 bottom-20 md:text-4xl font-semibold xs:text-xs'>Unveil the Blogosphere's Wonders</span>
   {/* <p>In the expansive realm of the digital world, an orchestra of diverse voices harmonize through <br/>the profound medium of blogs, resonating with profound thoughts, intricate emotions, and compelling perspectives, forging a tapestry</p> */}
  </Carousel.Caption>
      </Carousel.Item >
     
    </Carousel>
  );
}

export default CarouselPage