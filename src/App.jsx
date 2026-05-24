import React from 'react'
import Card from './components/Card'
const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer Intern",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$32/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizQq7KJ5NDbGjh-4wklylfJ9hAaOJ5vBtJA&s",
    company: "Netflix",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20210729021049",
    company: "Microsoft",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    company: "Amazon",
    datePosted: "1 day ago",
    post: "Backend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$28/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_960_720.png",
    company: "Meta",
    datePosted: "4 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    company: "Apple",
    datePosted: "6 days ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/56/3a/a2/563aa2189ef92dc242a7db5b91078804.jpg",
    company: "Adobe",
    datePosted: "7 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJIOGtHi6yLhWs9gI0Bz1T83KoUzuqCQ7IQ&s",
    company: "Uber",
    datePosted: "2 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/330px-Spotify_icon.svg.png",
    company: "Spotify",
    datePosted: "8 days ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg",
    company: "Tesla",
    datePosted: "3 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  }, 
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkCvaceexOvp91gxagcGAhWCc3yYCy4tGHw&s",
    company: "NVIDIA",
    datePosted: "1 day ago",
    reviewsAgo: "4 weeks ago",
    post: "GPU Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  }
];
  
  return (
    <div className='parent'>
      <div className="top-bg"></div>
      <div className="container">
        {jobOpenings.map(function(elem, idx){
          return (
            <Card
              key={idx}
              company={elem.company}
              brandLogo={elem.brandLogo}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App