//IMPORTS - HOOKS
import { useState } from "react"

//IMPORT - ui Images
import ForwardArrow from "../../assets/ForwardArrow.png"
import BackArrow from "../../assets/BackArrow.png"
import styles from "../../components/ui/ImageCarousel.module.css"


export const ImageCarousel = ({images}) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const handlePreviousClick = () => {
    setCurrentImgIndex (
      currentImgIndex === 0 
        ? images.length - 1 
        : currentImgIndex - 1
    );
  }

  const handleNextClick = () => {
    setCurrentImgIndex((currentImgIndex + 1) % images.length);
  }

  return (
    <section className={styles.carouselWrapper}>
      <div>
        <img src={BackArrow} className ={styles.navBttnLeft}onClick={handlePreviousClick} /> 
          <img  className= {styles.projectImg}src={images[currentImgIndex]}/>
        <img src={ForwardArrow} className ={styles.navBttnRight} onClick={handleNextClick}/>
      </div>
    </section>

  )
}


