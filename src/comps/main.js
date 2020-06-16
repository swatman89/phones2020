import React, { useState, useEffect } from 'react'
import { doApi } from '../services/apiSer'
import Phone from './phone'
import "../comps_css/main.css"
import { useSelector, useDispatch } from 'react-redux'

const Main = (props) => {
  let [phones_ar, setPhonesArr] = useState([]);
  let order = useSelector(state => state.order);
  let dispatch = useDispatch()
  let serUrl = useSelector(state => state.URL)
  console.log(serUrl)

  useEffect(() => {
    let url = serUrl+"/list.php"
    try {
      if (props.match.params.id) {
        console.log("there is params " + props.match.params.id)
        dispatch({type:"changeOrder",order:props.match.params.id});
        url = `${serUrl}/search.php?order=${order}&reverse=ok`
      }
    }
    catch(err){
      if (order !== "id") {
        console.log("no params")
        url = `${serUrl}/search.php?order=${order}&reverse=ok`
      }
    }
    
    
    //alert("work")
    doApi(url)
      .then(data => {
        console.log(data)
        setPhonesArr(data)
      })
  }, [order])

  let catName = {
    id: "כללי",
    pref_score: "ביצועים למשחקים",
    camera_score: "ציון מצלמה",
    storage_gb: "נפח שמירה",
    battery_score: "זמן סוללה",
    connect_score: "איכות קליטה",
    screen_size: "גודל מסך",
    total_score: "תמורה יחס מחיר"
  }

  return (
    <main className="container-fluid py-3" id="start_phones">
      <div className="container" >
        <h2> הטלפונים המובילים לפי {catName[order]}</h2>
        <div className="row">
          {phones_ar.map(item => {

            return (
              <Phone key={item.id} item={item} />
            )
          })}

        </div>
      </div>
    </main>
  )
}


export default Main;