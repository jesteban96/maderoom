export const Contactanos = () => {
    return (
        <>
            <main className="my-5">
                <div className="container">
                    <div id="wizard">
                        <h3>
                            <div className="media">
                                <div className="bd-wizard-step-icon"><i className="mdi mdi-account-outline"></i></div>
                                <div className="media-body">
                                    <div className="bd-wizard-step-title">Personal Details</div>
                                    <div className="bd-wizard-step-subtitle">Step 1</div>
                                </div>
                            </div>
                        </h3>
                        <section>
                            <div className="content-wrapper">
                                <h4 className="section-heading">Enter your Personal details </h4>
                                <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmfor="firstName" className="sr-only">First Name</label>
                                    <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First Name"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmfor="lastName" className="sr-only">Last Name</label>
                                    <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name"/>
                                </div>
                                </div>
                                <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmfor="phoneNumber" className="sr-only">Phone Number</label>
                                    <input type="text" name="phoneNumber" id="phoneNumber" className="form-control" placeholder="Phone Number"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmfor="emailAddress" className="sr-only">Email Address</label>
                                    <input type="email" name="emailAddress" id="emailAddress" className="form-control" placeholder="Email Address"/>
                                </div>
                                </div>
                            </div>
                        </section>
                        <h3>
                            <div className="media">
                                <div className="bd-wizard-step-icon"><i className="mdi mdi-bank"></i></div>
                                <div className="media-body">
                                <div className="bd-wizard-step-title">Employ Details</div>
                                <div className="bd-wizard-step-subtitle">Step 2</div>
                                </div>
                            </div>
                        </h3>
                        <section>
                            <div className="content-wrapper">
                                <h4 className="section-heading">Enter your Employment details </h4>
                                <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmfor="designation" className="sr-only">Designation</label>
                                    <input type="text" name="designation" id="designation" className="form-control" placeholder="Designation"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmfor="department" className="sr-only">Department</label>
                                    <input type="text" name="department" id="department" className="form-control" placeholder="Department"/>
                                </div>
                                </div>
                                <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmfor="employeeNumber" className="sr-only">Employee Number</label>
                                    <input type="text" name="employeeNumber" id="employeeNumber" className="form-control" placeholder="Employee Number"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmfor="workEmailAddress" className="sr-only">Work Email Address</label>
                                    <input type="email" name="workEmailAddress" id="workEmailAddress" className="form-control" placeholder="Work Email Address"/>
                                </div>
                                </div>
                            </div>
                        </section>
                        <h3>
                            <div className="media">
                                <div className="bd-wizard-step-icon"><i className="mdi mdi-account-check-outline"></i></div>
                                <div className="media-body">
                                <div className="bd-wizard-step-title">Review </div>
                                <div className="bd-wizard-step-subtitle">Step 3</div>
                                </div>
                            </div>
                        </h3>
                        <section>
                        <div className="content-wrapper">
                            <h4 className="section-heading mb-5">Review your Details</h4>
                            <h6 className="font-weight-bold">Personal Details</h6>
                            <p className="mb-4"><span id="enteredFirstName">Cha</span> <span id="enteredLastName">Ji-Hun C</span> <br/>
                                Phone: <span id="enteredPhoneNumber">+230-582-6609</span> <br/>
                                Email: <span id="enteredEmailAddress">willms_abby@gmail.com</span></p>
                            <h6 className="font-weight-bold">Employment Details</h6>
                            <p className="mb-0"><span id="enteredDesignation">Junior Developer</span> - <span id="enteredDepartment">UI Development</span> <br/>
                                Phone: <span id="enteredEmployeeNumber">JDUI36849</span> <br/>
                                Email: <span id="enteredWorkEmailAddress">willms_abby@company.com</span></p>
                        </div>
                        </section>
                        <h3>
                            <div className="media">
                                <div className="bd-wizard-step-icon"><i className="mdi mdi-emoticon-outline"></i></div>
                                <div className="media-body">
                                <div className="bd-wizard-step-title">Submit</div>
                                <div className="bd-wizard-step-subtitle">Step 4</div>
                                </div>
                            </div>
                        </h3>
                        <section>
                        <div className="content-wrapper">
                            <h4 className="section-heading mb-5">Accept agreement and Submit</h4>
                            <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue"/>
                                I hereby declare that I had read all the <a href="#!">terms and conditions</a>  and all the details provided my me in this form are true.
                            </label>
                            </div>
                        </div>  
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}
