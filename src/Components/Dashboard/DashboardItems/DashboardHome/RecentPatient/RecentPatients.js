import React from 'react';
import './recentPatient.css';

export default function RecentPatients() {
 return (
  <section id="recent_patient" className="pt-2">
   <div className="container-fluid">
    <div className="row">
     
     {Array(5).fill().map((item)=>
      <div key={Math.random()} className="">
       <div className="" >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusantium, minima iusto mollitia dicta accusamus alias recusandae explicabo illum vero blanditiis natus tenetur quam magnam voluptatibus aut dolor eveniet sint inventore temporibus reiciendis voluptates nulla. Doloremque minima, eveniet amet laborum adipisci ducimus iure vitae. Odit et corrupti laborum quo quam ipsa iure rerum. Eveniet eius consequatur minima exercitationem pariatur totam neque a at magnam quam. Iste facilis numquam ex illo, dignissimos rerum, voluptates temporibus eos quis enim sunt nostrum dolor! Corporis maiores harum temporibus voluptatum eos cumque magni vitae natus, ratione qui aperiam debitis ea consequatur, officia minus laudantium ab.</p>
       </div>
     </div>
     )}

    </div>
   </div>
  </section>
 )
}
