import React from 'react';
import './style.css';



class Activities extends React.Component{
  render(){
    return(
        <div class="activities-container">
                <select onClick={this.switchActivities}>
                    <option value=""></option>
                    <option value="newZealand">New Zealand</option>
                    <option value="maldives">Maldives, South Asia</option>
                    <option value="venice">Venice, Italy</option>
                    <option value="cancun">Cancun</option>
                </select>
                <div class="activity-checkbox-inner-container" id="newZealand-a">
                    <input type="checkbox" name="city-tours"></input><label for="city-tours">City Tours</label>
                    <input type="checkbox" name="sports"></input><label for="sports">Sports</label>
                    <input type="checkbox" name="cycling"></input><label for="cycling">Cycling</label>
                    <input type="checkbox" name="museums"></input><label for="museums">Museums</label>
                    <input type="checkbox" name="boating"></input><label for="boating">Boating</label>
                </div>

                <div class="activity-checkbox-inner-container" id="maldives-a">
                    <input type="checkbox" name="museums"></input><label for="museums">Museums</label>
                    <input type="checkbox" name="sailing"></input><label for="sailing">Sailing</label>
                    <input type="checkbox" name="beach"></input><label for="beach">Beach</label>
                    <input type="checkbox" name="hiking"></input><label for="hiking">Hiking</label>
                    <input type="checkbox" name="boating"></input><label for="boating">Boating</label>
                </div>

                <div class="activity-checkbox-inner-container" id="venice-a">
                    <input type="checkbox" name="museums"></input><label for="museums">Museums</label>
                    <input type="checkbox" name="theatre"></input><label for="theatre">Theatre</label>
                    <input type="checkbox" name="parks"></input><label for="parks">Parks and Recreation</label>
                    <input type="checkbox" name="city-tours"></input><label for="city-tours">City Tours</label>
                </div>

                <div class="activity-checkbox-inner-container" id="cancun-a">
                    <input type="checkbox" name="parks"></input><label for="parks">Parks and Recreation</label>
                    <input type="checkbox" name="beach"></input><label for="beach">Beach</label>
                    <input type="checkbox" name="boating"></input><label for="boating">Boating</label>
                    <input type="checkbox" name="snorkling"></input><label for="snorkling">Snorkling</label>
                </div>

            </div>
    );
  }

  switchActivities(e) {
    let location = e.target.value;
    switch (location) {
        case 'newZealand':
            document.getElementById('newZealand-a').style.display = "block";
            document.getElementById('maldives-a').style.display = "none";
            document.getElementById('venice-a').style.display = "none";
            document.getElementById('cancun-a').style.display = "none";
            break;
        case 'maldives':
            document.getElementById('newZealand-a').style.display = "none";
            document.getElementById('maldives-a').style.display = "block";
            document.getElementById('venice-a').style.display = "none";
            document.getElementById('cancun-a').style.display = "none";
            break;
        case 'venice':
            document.getElementById('newZealand-a').style.display = "none";
            document.getElementById('maldives-a').style.display = "none";
            document.getElementById('venice-a').style.display = "block";
            document.getElementById('cancun-a').style.display = "none";
            break;
        case 'cancun':
            document.getElementById('newZealand-a').style.display = "none";
            document.getElementById('maldives-a').style.display = "none";
            document.getElementById('venice-a').style.display = "none";
            document.getElementById('cancun-a').style.display = "block";
            break;
        default:
            document.getElementById('newZealand-a').style.display = "none";
            document.getElementById('maldives-a').style.display = "none";
            document.getElementById('venice-a').style.display = "none";
            document.getElementById('cancun-a').style.display = "none";
            break;
    }
}
}

export default Activities;