import React from 'react'

export default function SectionTitle({title,detail}) {
 return (
       <div className="section_info">
          <h2 className="section-title">{title}</h2>
          <p>{detail}</p>
        </div>
 )
}
