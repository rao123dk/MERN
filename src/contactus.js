import React from 'react';

class Contactus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      email : '',
      mobile : ''
    };
    // this.handleNameChange = this.handleNameChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this)
    // this.handleMobileChange = this.handleMobileChange.bind(this);
    this.handleFormSubmittion = this.handleFormSubmittion.bind(this);
    this.hnadleFormValue = this.hnadleFormValue.bind(this);

  }


  handleFormSubmittion(e){
    console.log(this.state);
  }
  hnadleFormValue(e){
    this.setState({ [e.target.name] : e.target.value});
  }

  render() {
    return (
      <form>
         <fieldset>
           <div id="legend">
              <legend>Register</legend>
           </div>
            <div className="control-group">
            <label className="control-label"  htmlFor="name">Name</label>
                <div className="controls">
                  <input type="text" id="name" name="name" value={this.state.name} placeholder="dk" onChange={this.hnadleFormValue}  className="input-xlarge"/>
                </div>
            </div>
            <div className="control-group">
            <label className="control-label"  htmlFor="email">Email</label>
                <div className="controls">
                  <input type="text" id="email" name="email" value={this.state.email} placeholder="dk@gmail.com" onChange={this.hnadleFormValue}  className="input-xlarge"/>
                </div>
            </div>
            <div className="control-group">
            <label className="control-label"  htmlFor="mobile">Mobile</label>
                <div className="controls">
                  <input type="text" id="mobile" name="mobile"  value={this.state.mobile} placeholder="8585828285"  onChange={this.hnadleFormValue}  className="input-xlarge"/>
                </div>
            </div>
        </fieldset>
         <input type="button" className="btn btn-success" value="Submit" onClick={this.handleFormSubmittion} />
      </form>
    );
  }
}

export default Contactus;
