import React, { useState, useEffect} from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import axios from 'axios';
import { accessories } from '../access';

function Accdetails() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res =await axios.get(' ');
        setPosts(res.data);
        setLoading(false);
      }
      fetchPosts();
    }, []);
    //Get current posts
    const indexOfLastPost  = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
        <div>
        <Posts posts={currentPosts} loading={loading}  />
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}  />
        </div>
    )
}
/**
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';




export default class extends React.Component {
    render() {
        
      return (
        <CarouselProvider
          naturalSlideWidth={50}
          naturalSlideHeight={15}
          totalSlides={8}
          playDirection={'forward'}
        >
        
        <Slider className="container-fluid text-center my-2">
        <Slide index={1}>
        <img src={"img/slider1.jpg"} className="d-block w-100" alt="Note 9s"></img>
        </Slide>
        <Slide index={2}>
        <img src={"img/slider2.jpg"} className="d-block w-100" alt="Camon 15"></img>
        </Slide>
        <Slide index={3}>
        <img src={"img/slide3.jpg"} className="d-block w-100" alt="A51"></img>
        </Slide>
        <Slide index={4}>
        <img src={"img/slide4.png"} className="d-block w-100" alt="Note 7"></img>
        </Slide>
        <Slide index={5}>
        <img src={"img/slide5.jpg"} className="d-block w-100" alt="Reno 3"></img>
        </Slide>
        <Slide index={6}>
        <img src={"img/slide6.jpg"} className="d-block w-100" alt="Y9s"></img>
        </Slide>
        <Slide index={7}>
        <img src={"img/slide7.jpeg"} className="d-block w-100" alt="V19"></img>
        </Slide>
        <Slide index={8}>
        <img src={"img/slide8.png"} className="d-block w-100" alt="P36"></img>
        </Slide>
      </Slider>
      <div className="text-center my-1">
      <ButtonBack className="btn btn-primary mr-2">Back</ButtonBack>
      <ButtonNext className="btn btn-primary ml-2">Next</ButtonNext>
      </div>
        </CarouselProvider>
      );
    }
  }


  **/
export default Accdetails;

