import React from 'react'
import Card from './components/Card'
import User from './components/User'

function App() {

  const jobs = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiOvp6MXrCUMD7_9x01HieBQHFLPePd8uRokw53_eEcw3O0nXlHEfB1H6&s=10",
    name: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$52/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://s3-alpha.figma.com/hub/file/2747494711/31b6ad5c-b404-4086-a685-89b1d5294f1c-cover.png",
    name: "Microsoft",
    datePosted: "5 days ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    name: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/055/210/890/non_2x/meta-logo-square-rounded-meta-logo-meta-logo-free-download-free-png.png",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Java Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$49/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLz2htCks2OrPL43YmbaMypUwS-l_rlLXpLzQCqWEAuw&s",
    name: "Netflix",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$81/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Nvidia/Nvidia-Logo.wine.png",
    name: "NVIDIA",
    datePosted: "10 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$76/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFLFrf8orlPeKgzvdWMAEFXJGFZSOFu3ZWSzaHtXYpMYmjPy9cT-0o0Bse&s=10",
    name: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2017/09/Uber-logo.jpg",
    name: "Uber",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$61/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2024/02/Salesforce-logo.jpg?w=1414&h=796&crop=1",
    name: "Salesforce",
    datePosted: "1 day ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$69/hr",
    location: "Mumbai, India"
  }
];
  return (
    <div className='parent'>
      {jobs.map(function(ele , idx){
        return <div key={idx}>
          <Card name = {ele.name} post = {ele.post} tag1 = {ele.tag1} tag2 = {ele.tag2} pay = {ele.pay} loc = {ele.location} logo = {ele.brandLogo} postDate = {ele.datePosted}/>
        </div>
      })}
    </div>
  )
}
export default App