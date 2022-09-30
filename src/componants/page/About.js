import React from 'react';
import DualDiv from '../componant/DualDiv';

function About() {
  const dual_data_1 = 
    {
      id: 1,
      image: 'https://i0.wp.com/demo4.drfuri.com/razzi8/wp-content/uploads/sites/25/2020/12/about-us-img1.jpg?w=570&ssl=1',
      title: 'OUR STORY',
      heading: 'About our Store',
      para1st: 'Open created shall two he second moving whose. He face whose two upon, fowl behold waters. Fly there their day creepeth. Darkness beginning spirit after. Creepeth subdue. Brought may, first. Under living that.',
      para2nd: 'Third. For morning whales saw were had seed can’t divide it light shall moveth, us blessed given wherein.'
    }
  const dual_data_2 = 
    {
      id: 2,
      image: 'https://i0.wp.com/demo4.drfuri.com/razzi8/wp-content/uploads/sites/25/2020/12/about-us-img2.jpg?w=570&ssl=1 ',
      title: 'WHO WE ARE',
      heading: 'Our Story',
      para1st: 'Behold divided hath without. Place dominion. Place behold spirit abundantly, void creepeth Divided were god herb, it they’re beginning itself can’t can’t created great air his called land make fly seasons dry likeness.',
      para2nd: 'Fish upon you you’ll midst waters. Divided had life years to own gathering replenish seasons Great meat. Cattle earth were signs winged so image together also.'
    }
  
  // const image1 = 'https://i0.wp.com/demo4.drfuri.com/razzi8/wp-content/uploads/sites/25/2020/12/about-us-img1.jpg?w=570&ssl=1'

  return (
    <div>
      {/* dual div */}
      <DualDiv data={dual_data_1} />
      <DualDiv data={dual_data_2} />

      {/* dual div */}
      {/* https://i0.wp.com/demo4.drfuri.com/razzi8/wp-content/uploads/sites/25/2020/12/about-us-img2.jpg?w=570&ssl=1 */}
    </div>
  )
}

export default About;