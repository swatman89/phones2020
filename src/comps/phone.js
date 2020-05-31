import React, { useState } from 'react'
import {  Link  } from 'react-router-dom';

const Phone = (props) => {

  
  let item = props.item;
  let { name, cpu, company_id, gpu, ram, m_pixel, battery_mah, battery_score, pref_score, camera_score, connect_score, total_score, price, screen_size, storage_gb, img_url } = item;
  return (
    <div className="col-lg-6 ">
      <div className="card flex-md-row mb-4 box-shadow h-md-250 phone p-2">
        <div className="card-body d-flex flex-column align-items-start">

          <h4 className="mb-0">
            <a className="text-dark" href="#">{item.name}</a>
          </h4>
          <div className="mb-1 text-muted">ציון כללי: {total_score}</div>
          <div className="card-text mb-auto">
            <div>זכרון לשמירה: <strong>{storage_gb} GB</strong> </div>
            <div>איכות לצילום: <strong>{camera_score} </strong> </div>
            <div>ציון ביצועים <strong>{pref_score} </strong> </div>

          </div>
          <Link to={"/smartphone/"+item.id}>פרטים נוספים</Link>
        </div>
        <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src={item.img_url} height="200" />
      </div>
    </div>
  )
}


export default Phone;