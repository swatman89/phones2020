import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Phone = (props) => {


  let item = props.item;
  let { name, cpu, company_id, gpu, ram, m_pixel, battery_mah, battery_score, pref_score, camera_score, connect_score, total_score, price, screen_size, storage_gb, img_url } = item;
  return (
    <div className="col-lg-6 px-4">
      <div className="mb-4 box-shadow h-md-250 phone p-2">
      {/* <img className="float-left w-25"  
          alt="Thumbnail [200x250]" src={item.img_url} /> */}
          <div className="box" style={{backgroundImage:"url("+item.img_url+")"}}>_</div>

          <h4 className="mb-0">
            <a className="text-dark" href="#">{item.name}</a>
          </h4>
          <div className="mb-1 text-muted">ציון כללי: {total_score}</div>
          <div className="card-text mb-auto">
            <div>זכרון לשמירה: <strong>{storage_gb} GB</strong> </div>
            <div>איכות לצילום: <strong>{camera_score} </strong> </div>
            <div>ציון ביצועים <strong>{pref_score} </strong> </div>

          
          <Link to={"/smartphone/" + item.id}>פרטים נוספים</Link>
        </div>

      
         
    
      </div>
    </div>
  )
}


export default Phone;