import React, { useState, useEffect } from 'react';
import { doApi } from '../services/apiSer';
import {  Link  } from 'react-router-dom';
import {  useHistory  } from 'react-router-dom';

function SinglePhone(props) {
  let [item,setPhone] = useState({})
  let history = useHistory()
  //  TODO: לעשות שלוחצים על הלינק מחזיר אותנו מהדף שבאנו אליו
  useEffect(() => { 
    let url = "http://localhost/doria/phones/single.php?id="+props.match.params.id;
    doApi(url)
    .then(data => {
      console.log(data)
      setPhone(data[0])
     
    })
}, [])



  
  return (
    <main className="container-fluid py-3">
      <div className="container">
        <div className="col-lg-8 border p-2">
          <h2>{item.name}</h2>
          <img className="card-img-right flex-auto d-none d-md-block float-right ml-3" data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src={item.img_url} height="250" />
          <div>זכרון לשמירה: <strong>{item.storage_gb} GB</strong> </div>
          <div>איכות צילום: <strong className='text-success'>{item.camera_score} </strong>, מגה פיקסל: {item.m_pixel} </div>
          <div>ציון סוללה <strong className='text-success'>{item.battery_score} </strong> </div>
          <div>איכות קליטה אינטרנט/שיחות: <strong>{item.connect_score} </strong> </div>
          <div>גודל מסך: <strong>{item.screen_size} </strong> </div>
          <div>ציון ביצועים: <strong className='text-danger'>{item.pref_score} </strong> </div>
          <div>זכרון RAM: <strong>{item.ram} </strong> </div>
          <div>סוג מעבד: <strong>{item.cpu} </strong> </div>
          <div>סוג כרטיס מסך: <strong>{item.gpu} </strong> </div>
          <div>מחיר מנימום ממוצע בארץ: <strong>{item.price} ש"ח</strong> </div>
          <Link to="/">חזור לרשימה</Link>
        </div>
      </div>
    </main>
  )
}

export default SinglePhone


// let { name, cpu, company_id, gpu, ram, m_pixel, battery_mah, battery_score, pref_score, camera_score, connect_score, total_score, price, screen_size, storage_gb, img_url } = item;