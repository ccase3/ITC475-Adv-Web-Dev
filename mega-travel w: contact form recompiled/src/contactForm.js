import React from 'react';
import './style.css';



class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            numberOfPeopleTraveling: '',
            date: '',
            destination: '',
            activities: []
        }
        this.dataHandler = this.dataHandler.bind(this);
        this.activityHandler = this.activityHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.resetForm = this.resetForm.bind(this);

    }
    render() {
        return (
            <form id="contact-agent-form">
                <div class = "form-container">
                    <div class = "form-input-container">
                        <label for = "first-name">First Name</label>
                        <input type = "text" name = "firstName" id = "first-name" required value={this.state.firstName} onChange = {this.dataHandler}></input>
                    </div>
                    <div class = "form-input-container">
                        <label for = "last-name">Last Name</label>
                        <input type = "text" name = "lastName" id = "last-name" required value={this.state.lastName} onChange = {this.dataHandler}></input>
                    </div>
                </div>
                <div class = "form-container">
                    <div class = "form-input-container">
                        <label for = "email-address">E-Mail Address</label>
                        <input type = "text" name = "emailAddress" id = "email-address" required value={this.state.emailAddress} onChange = {this.dataHandler}></input>
                    </div>
                    <div class = "form-input-container">
                        <label for = "phone-Number">Phone Number</label>
                        <input type = "number" name = "phoneNumber" id = "phone-number" required value={this.state.phoneNumber} onChange = {this.dataHandler}></input>
                    </div>
                </div>
                <div class = "form-container">
                    <div class = "form-input-container">
                        <label for = "people-traveling">Number of people traveling</label>
                        <input type = "number" name = "number-of-people" id = "people-traveling" required value={this.state.numberOfPeopleTraveling} onChange = {this.dataHandler}></input>
                    </div>
                    <div class = "form-input-container">
                        <label for = "date-of-trip">Date of Trip</label>
                        <input type = "date" name = "date" id = "numberOfPeopleTraveling" required value={this.state.date} onChange = {this.dataHandler}></input>
                    </div>
                </div>

            <div class="activities-container">
                    <div class = "form-input-container">
                        <label for = "destination">Destination</label>
                        <select onClick={this.switchActivities} name = "destination" id = "destination" required value={this.state.destination} onChange = {this.dataHandler}>
                            <option value=""></option>
                            <option value="newZealand">New Zealand</option>
                            <option value="maldives">Maldives, South Asia</option>
                            <option value="venice">Venice, Italy</option>
                            <option value="cancun">Cancun</option>
                        </select>
                    </div>

                    <div class = "activity-checkbox-wrapper">
                        <div class="activity-checkbox-inner-container" id="newZealand-a">
                            <div><input type="checkbox" name="city-tours" value="City Tours" onChange = {this.activityHandler}></input><label for="city-tours">City Tours</label></div>
                            <div><input type="checkbox" name="sports" value="Sports" onChange = {this.activityHandler}></input><label for="sports">Sports</label></div>
                            <div><input type="checkbox" name="cycling" value="Cycling" onChange = {this.activityHandler}></input><label for="cycling">Cycling</label></div>
                            <div><input type="checkbox" name="museums" value="Museums" onChange = {this.activityHandler}></input><label for="museums">Museums</label></div>
                            <div><input type="checkbox" name="boating" value="Boating" onChange = {this.activityHandler}></input><label for="boating">Boating</label></div>
                        </div>

                        <div class="activity-checkbox-inner-container" id="maldives-a">
                            <div><input type="checkbox" name="museums" value="Museums" onChange = {this.activityHandler}></input><label for="museums">Museums</label></div>
                            <div><input type="checkbox" name="sailing" value="Sailing" onChange = {this.activityHandler}></input><label for="sailing">Sailing</label></div>
                            <div><input type="checkbox" name="beach" value="Beach" onChange = {this.activityHandler}></input><label for="beach">Beach</label></div>
                            <div><input type="checkbox" name="hiking" value="Hiking" onChange = {this.activityHandler}></input><label for="hiking">Hiking</label></div>
                            <div><input type="checkbox" name="boating" value="Boating" onChange = {this.activityHandler}></input><label for="boating">Boating</label></div>
                        </div>

                        <div class="activity-checkbox-inner-container" id="venice-a">
                            <div><input type="checkbox" name="museums" value="Museums" onChange = {this.activityHandler}></input><label for="museums">Museums</label></div>
                            <div><input type="checkbox" name="theatre" value="Theatre" onChange = {this.activityHandler}></input><label for="theatre">Theatre</label></div>
                            <div><input type="checkbox" name="parks" value="Parks and Recreation" onChange = {this.activityHandler}></input><label for="parks">Parks and Recreation</label></div>
                            <div><input type="checkbox" name="city-tours" value="City Tours" onChange = {this.activityHandler}></input><label for="city-tours">City Tours</label></div>
                        </div>

                        <div class="activity-checkbox-inner-container" id="cancun-a">
                            <div><input type="checkbox" name="parks" value="Parks and Recreation" onChange = {this.activityHandler}></input><label for="parks">Parks and Recreation</label></div>
                            <div><input type="checkbox" name="beach" value="Beach" onChange = {this.activityHandler}></input><label for="beach">Beach</label></div>
                            <div><input type="checkbox" name="boating" value="Boating" onChange = {this.activityHandler}></input><label for="boating">Boating</label></div>
                            <div><input type="checkbox" name="snorkling" value="Snorkling" onChange = {this.activityHandler}></input><label for="snorkling">Snorkling</label></div>
                        </div>
                    </div>
                </div>
            <div class="form-container">
            <button class = "contact-agent-submit-button" type = "submit" onClick = {this.submitForm}>Submit Form</button>
            <button class = "contact-agent-clear-button" onClick={this.resetForm}>Clear Form</button>
            </div>      
            </form>
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

    dataHandler(event){
        let target = event.target,
            value = target.value,
            name = target.name
        this.setState({
            [name]: value
        })
      }

      activityHandler(event){
          let target = event.target,
          checked = target.checked,
          value = target.value;

          if(checked){
              this.state.activities.push(value);
          } else {
            let index = this.state.activities.indexOf(value);
            if (index > -1) {
                this.state.activities.splice(index, 1);
            }
          }
      }

      submitForm(e){
          e.preventDefault();
          console.log(this.state);
      }


      resetForm(){
        window.location.reload();
      }

}

export default ContactForm;