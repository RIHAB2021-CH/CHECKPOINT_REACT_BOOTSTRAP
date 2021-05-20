import React from 'react'


function form() {
    return (
        
<form className="needs-validation" novalidate>
<h1 className="title-about">Give us your feedback</h1>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label for="validationTooltip01">First name</label>
      <input type="text" className="form-control" id="validationTooltip01" placeholder="First name"  required></input>
      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationTooltip02">Last name</label>
      <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name"  required></input>
      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationTooltipUsername">E-mail</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="text" className="form-control" id="validationTooltipUsername" placeholder="E-mail" aria-describedby="validationTooltipUsernamePrepend" required></input>
        <div className="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label for="validationTooltip03">Adress</label>
      <input type="text" className="form-control" id="validationTooltip03" placeholder="Adress" required></input>
      <div className="invalid-tooltip">
        Please provide a valid Adress.
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationTooltip04">City</label>
      <input type="text" className="form-control" id="validationTooltip04" placeholder="City" required></input>
      <div className="invalid-tooltip">
        Please provide a valid City.
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationTooltip05">Postal Code</label>
      <input type="text" className="form-control" id="validationTooltip05" placeholder="Postal Code" required></input>
      <div className="invalid-tooltip">
        Please provide a valid Postal-Code.
      </div>
    </div>
  </div>
  <div className="container-1">
  <div className="form-group">
    <div className="col-md-4 mb-3">
    <label for="exampleFormControlSelect1">Job</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Owner of a company</option>
      <option>Freelancer</option>
      <option>Student</option>
      <option>Job Seaker</option>
      <option>Other</option>
    </select>
    </div>
  </div>
  <div className="form-group">
  <div className="col-md-4 mb-3">
      <label for="validationTooltip02">Company/University</label>
      <input type="text" className="form-control" id="validationTooltip02" placeholder="Company/University"  required></input>
      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
    </div>
    </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Your comment</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  
  <button type="button" className="btn btn-outline-danger">Submit</button>
</form>
       
    )
}


export default form


