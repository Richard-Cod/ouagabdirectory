import { showPrice } from 'logic/helper/showPrice'


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const prev = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
const next = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

const responsiveSettings = [
    {
        breakpoint: 1800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 1500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
];

const buttonStyle = {
  background: 'white',
  border: '0px',
  borderRadius:"50%",
  padding:8

};

const properties = {
  prevArrow: <button className='hover:scale-105 sliderarrow ' style={{ ...buttonStyle }}> {prev} </button>,
  nextArrow: <button className='hover:scale-105 sliderarrow ' style={{ ...buttonStyle }}> {next} </button>
}

// const indicators = (index : number) => (<div className="indicator">{index + 1}</div>);


const AppSlider = ({children} : {children:any}) => {
    
    return (
        <div>
            <Slide   {...properties} transitionDuration={300} infinite={false} slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings}>
                {children}
            </Slide>
        </div>
    );
};


export default AppSlider