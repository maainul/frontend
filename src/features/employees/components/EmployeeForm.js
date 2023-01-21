import React from "react";

function CreateEmployee() {
  return (
    <div id="main">
      <div class="pagetitle">
        <h1>Form Elements</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">Forms</li>
            <li class="breadcrumb-item active">Elements</li>
          </ol>
        </nav>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">General Form Elements</h5>

          <form>
            <div className="row mb-3">
              <label for="inputText" className="col-sm-2 col-form-label">
                Text
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputEmail" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputPassword" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input type="password" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputNumber" className="col-sm-2 col-form-label">
                Number
              </label>
              <div className="col-sm-10">
                <input type="number" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputNumber" className="col-sm-2 col-form-label">
                File Upload
              </label>
              <div className="col-sm-10">
                <input className="form-control" type="file" id="formFile" />
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputDate" className="col-sm-2 col-form-label">
                Date
              </label>
              <div className="col-sm-10">
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <label for="inputTime" className="col-sm-2 col-form-label">
                Time
              </label>
              <div className="col-sm-10">
                <input type="time" className="form-control" />
              </div>
            </div>

            <div className="row mb-3">
              <label for="inputColor" className="col-sm-2 col-form-label">
                Color Picker
              </label>
              <div className="col-sm-10">
                <input
                  type="color"
                  className="form-control form-control-color"
                  id="exampleColorInput"
                  value="#4154f1"
                  title="Choose your color"
                />
              </div>
            </div>

            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" for="gridRadios1">
                    First radio
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="gridRadios2">
                    Second radio
                  </label>
                </div>
                <div className="form-check disabled">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios"
                    value="option"
                    disabled
                  />
                  <label className="form-check-label" for="gridRadios3">
                    Third disabled radio
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Checkboxes
              </legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label className="form-check-label" for="gridCheck1">
                    Example checkbox
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck2"
                    checked
                  />
                  <label className="form-check-label" for="gridCheck2">
                    Example checkbox 2
                  </label>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Disabled</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  value="Read only / Disabled"
                  disabled
                />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Select</label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Multi Select</label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  multiple
                  aria-label="multiple select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Submit Button</label>
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Submit Form
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployee;
