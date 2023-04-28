import { useState } from "react";

const Section =({title,description,isVisible,setIsVisible})=>{

return(

<div className="insta-section">
    <h3> {title}</h3>
  {isVisible ?  <button onClick={()=>{setIsVisible(false)}}>Hide</button> : <button onClick={()=>{setIsVisible(true)}}>show</button> }
    {isVisible &&  <h4>{description}</h4>}
</div>
);
}

const Instamart =()=>{
    // const [sectionConfig,setSectionConfig] = useState({
    //     showAbout:false,
    //     showTeam: false,
    //     showCareer: false,
    // })

    const [visibleSection , setVisibleSection] = useState('about')
    return (
      <div>
        <h1> Instamart</h1>
      <Section title={'About Instamart'} description={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source'}
      isVisible ={visibleSection === 'about'} setIsVisible={()=>setVisibleSection('about')}></Section>
      <Section title={'Team Instamart'} description={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source'}
       isVisible ={visibleSection === 'team'} setIsVisible={()=>setVisibleSection('team')}></Section>
      <Section title={'Careers'} description={'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source'}
        isVisible ={visibleSection === 'career'} setIsVisible={()=>setVisibleSection('career')}></Section>
        </div>
    )
}
export default Instamart;