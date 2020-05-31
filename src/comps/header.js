
import React , {useState } from 'react'
import "../comps_css/header.css"
import {  useDispatch } from 'react-redux'
import {  useHistory  } from 'react-router-dom';

const Header = (props) => {
    let dispatch = useDispatch()
    let history = useHistory()

    const changeOrder = (e) => {
        console.log(e.currentTarget.dataset.ord)
        let orderBy = e.currentTarget.dataset.ord
        dispatch({type:"changeOrder",order:orderBy});
        history.push("/phones/"+orderBy)
    }

  return(
    <header className="container-fluid d-flex align-items-center">
      <div className="container">
          <h1>ברוכים הבאים למשווהפון</h1>
          <h2>האתר הראשון בארץ להשוואה אמיתית בין סמרטפונים</h2>
          <hr/>
          <h3 className="text-center">איזה תחום הכי חשוב לך בסמרטפון הבא שלך?</h3>
            <div className="d-lg-flex boxes">
                <div data-ord="pref_score" onClick={changeOrder}>
                    
                    <i className="fa fa-gamepad"></i>
                    
                    <span   className="link">ביצועים למשחקים</span>
                </div>
                <div data-ord="camera_score" onClick={changeOrder}>
                   
                    <i className="fa fa-camera"></i>
                    
                    <span className="link">איכות צילום</span>
                </div>
                <div data-ord="storage_gb" onClick={changeOrder}>
                    <i className="fa fa-files-o"></i>
                    <span className="link">זכרון שמירת קבצים</span>
                </div>
                <div data-ord="battery_score" onClick={changeOrder}>
                    <i className="fa fa-battery-three-quarters"></i>
                    <span className="link">זמן סוללה</span>
                </div>
                <div data-ord="connect_score" onClick={changeOrder}>
                    <i className="fa fa-wifi"></i>
                    <span className="link">איכות קליטה</span>
                </div>
                <div data-ord="screen_size" onClick={changeOrder}>
                    <i className="fa fa-mobile"></i>
                    <span className="link">גודל מסך </span>
                </div>
                <div data-ord="total_score" onClick={changeOrder}>
                    <i className="fa fa-usd"></i>
                    <span className="link">תמורה יחס מחיר</span>
                </div>
            </div>
      </div>
      <div>
         
      </div>
    </header>
  )
}


export default Header;