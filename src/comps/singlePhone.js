import React, { useState, useEffect } from 'react';
import { doApi } from '../services/apiSer';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

function SinglePhone(props) {
  let [item, setPhone] = useState({})
  let history = useHistory()
  let serUrl = useSelector(state => state.URL)
  //  TODO: לעשות שלוחצים על הלינק מחזיר אותנו מהדף שבאנו אליו
  useEffect(() => {
    let url = serUrl+"/single.php?id=" + props.match.params.id;
    doApi(url)
      .then(data => {
        console.log(data)
        setPhone(data[0])

      })
  }, [])


  const clickLink = () => {
    history.goBack()
    // alert("link")
  }

  return (
    <main className="container-fluid py-3">
      <div className="container">
        <div className="col-lg-9 border p-2 info_phone row align-items-center">
         
          <div className='col-lg-8'>
            <h2>{item.name}</h2>
            <div>זכרון לשמירה: <strong>{item.storage_gb} GB</strong> </div>
            <div>איכות צילום: <span><strong style={{ width: (item.camera_score) + "%" }}>{item.camera_score} </strong></span> </div>
            <div>ציון סוללה <span><strong style={{ width: (item.battery_score) + "%" }}>{item.battery_score} </strong></span> </div>
            <div>איכות קליטה: <span><strong style={{ width: (item.connect_score) + "%" }}>{item.connect_score} </strong></span> </div>
            <div>ציון ביצועים: <span><strong className='text-danger' style={{ width: (item.pref_score / 600 * 100) + "%" }}>{Math.floor(item.pref_score / 600 * 100)} %</strong></span> </div>
            <div>מחיר ממוצע בארץ  (בש"ח): <span><strong style={{ width: 100 - (item.price / 3000 * 100) + "%" }}>{item.price}</strong> </span> </div>
            <div>מצלמה מגה פיקסל: <strong >{item.m_pixel}</strong> </div>
            <div>גודל מסך: <strong>{item.screen_size} </strong> </div>
            <div style={{ direction: "rtl" }}>RAM זכרון: <strong>{item.ram} </strong> GB </div>
            <div>סוג מעבד: <strong>{item.cpu} </strong> </div>
            <div>סוג כרטיס מסך: <strong>{item.gpu} </strong> </div>
            <Link to="#" onClick={clickLink} >חזור לרשימה</Link>
          </div>
          <div className="col-lg-4  text-left" style={{ textAlign: "left" }}>
            {(item.img_url)? (
            <img className="  d-md-block  " data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src={item.img_url} height="250" />
            ) : (
              <img className="d-md-block  " data-src="holder.js/200x250?theme=thumb" alt="Thumbnail [200x250]" src="/loading.gif" height="250" />

            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default SinglePhone


// let { name, cpu, company_id, gpu, ram, m_pixel, battery_mah, battery_score, pref_score, camera_score, connect_score, total_score, price, screen_size, storage_gb, img_url } = item;