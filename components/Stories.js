const stories = [
  {
    name:'Ernesto Alonso',
    src:"https://links.papareact.com/zof",
    profile:"https://links.papareact.com/l4v",
  },
  {
    name:"Elon Musk",
    src:"https://links.papareact.com/4zn",
    profile:"https:links.papareact.com/kxk"
  },
  {
    name:"Jeff Bezoz",
    src:"https://links.papareact.com/f0p",
    profile:"https://links.papareact.com/f0p",
  },
  {
    name:"Mark Suckerberg",
    src:"https://links.papareact.com/xql",
    profile:"https://links.papareact.com/snf"
  }
]

import StoryCard from "./StoryCard";

const Stories = () => {
  return(
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(story=>(
        <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
      ))}
    </div>
  )
}

export default Stories;
