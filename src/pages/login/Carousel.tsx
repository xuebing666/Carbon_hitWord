import { Carousel } from '@mantine/carousel';
import { Center } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import FirstImg from 'src/images/first.png'
import SecondImg from 'src/images/second.png'
import ThirdImg from 'src/images/third.jpeg'


export default function Index(){
  const autoplay = useRef(Autoplay({delay:3000}))
  const carouselData = [
    {
      label:'first',
      img:FirstImg
    },
    {
      label:'second',
      img:SecondImg
    },
    {
      label:'third',
      img:ThirdImg
    }
  ]
  return(
    <Carousel
      w={450}
      mx='auto' 
      plugins={[autoplay.current]}
      withIndicators
      height={600}
      withControls={false} 
      slideGap="md"
      align="start"
    >
      {carouselData.map((item)=>(
         <Carousel.Slide w={500} key={item.label}>
          <Center sx={{background:`url(${item.img}) no-repeat center fixed`, backgroundSize:'cover',height:'100%'}}>
            {}
          </Center>
       </Carousel.Slide>
      ))}
    </Carousel>
  )
}