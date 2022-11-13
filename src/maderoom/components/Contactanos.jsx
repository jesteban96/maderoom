export const Contactanos = () => {
    return (
        <>
	    <div className="container">
	        <div className="row">
		        <div className="col-sm-8 col-sm-offset-2">
		            <div className="wizard-container">
		                <div className="card wizard-card" data-color="purple" id="wizard">
			                <form action="" method="">
			               
		                    	<div className="wizard-header">
		                        	<h3 className="wizard-title">
		                        		List Your Place
		                        	</h3>
									<h5>This information will let us know more about your place.</h5>
		                    	</div>
								<div className="wizard-navigation">
									<ul>
			                            <li><a href="#location" data-toggle="tab">Location</a></li>
			                            <li><a href="#type" data-toggle="tab">Type</a></li>
			                            <li><a href="#facilities" data-toggle="tab">Facilities</a></li>
			                            <li><a href="#description" data-toggle="tab">Description</a></li>
			                        </ul>
								</div>

		                        <div className="tab-content">
		                            <div className="tab-pane" id="location">
		                            	<div className="row">
		                                	<div className="col-sm-12">
		                                    	<h4 className="info-text"> Let's start with the basic details</h4>
		                                	</div>
		                                	<div className="col-sm-5 col-sm-offset-1">
		                                    	<div className="form-group label-floating">
		                                        	<label className="control-label">City</label>
		                                        	<input type="text" className="form-control" id="exampleInputEmail1"/>
		                                    	</div>
		                                	</div>
		                                	<div className="col-sm-5">
		                                    	<div className="form-group label-floating">
		                                            <label className="control-label">Country</label>
	                                            	<select name="country" className="form-control">
	                                                	<option disabled=""></option>
	                                                	<option value="Afghanistan"> Afghanistan </option>
	                                                	<option value="Albania"> Albania </option>
	                                                	<option value="Algeria"> Algeria </option>
	                                                	<option value="American Samoa"> American Samoa </option>
	                                                	<option value="Andorra"> Andorra </option>
	                                                	<option value="Angola"> Angola </option>
	                                                	<option value="Anguilla"> Anguilla </option>
	                                                	<option value="Antarctica"> Antarctica </option>
	                                                	<option value="...">...</option>
	                                            	</select>
	                                        	</div>
		                                	</div>
		                                	<div className="col-sm-5 col-sm-offset-1">
		                                    	<div className="form-group label-floating">
		                                        	<label className="control-label">Accommodates</label>
		                                        	<select className="form-control">
		                                            	<option disabled=""></option>
		                                            	<option>1 Person</option>
		                                            	<option>2 Persons </option>
		                                            	<option>3 Persons</option>
		                                            	<option>4 Persons</option>
		                                            	<option>5 Persons</option>
		                                            	<option>6+ Persons</option>
		                                        	</select>
		                                    	</div>
		                                	</div>
		                                	<div className="col-sm-5">
		                                    	<div className="form-group label-floating">
		                                        	<label className="control-label">Rent price</label>
		                                        	<div className="input-group">
		                                            	<input type="text" className="form-control"/>
		                                            	<span className="input-group-addon">$</span>
		                                        	</div>
		                                    	</div>
		                                	</div>
		                            	</div>
		                            </div>
		                            <div className="tab-pane" id="type">
		                                <h4 className="info-text">What type of location do you have? </h4>
		                                <div className="row">
		                                    <div className="col-sm-10 col-sm-offset-1">
		                                        <div className="col-sm-4 col-sm-offset-2">
		                                            <div className="choice" data-toggle="wizard-radio" rel="tooltip" title="Select this option if you have a house.">
		                                                <input type="radio" name="type" value="House"/>
		                                                <div className="icon">
		                                                    <i className="material-icons">home</i>
		                                                </div>
		                                                <h6>House</h6>
		                                            </div>
		                                        </div>
		                                        <div className="col-sm-4">
		                                            <div className="choice" data-toggle="wizard-radio" rel="tooltip" title="Select this option if you have an appartment">
		                                                <input type="radio" name="type" value="Appartment"/>
		                                                <div className="icon">
		                                                    <i className="material-icons">hotel</i>
		                                                </div>
		                                                <h6>Appartment</h6>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="tab-pane" id="facilities">
		                                <h4 className="info-text">Tell us more about facilities. </h4>
		                                <div className="row">
		                                    <div className="col-sm-5 col-sm-offset-1">
		                                      <div className="form-group label-floating">
		                                        	<label className="control-label">Your place is good for</label>
		                                        	<select className="form-control">
		                                            	<option disabled="" ></option>
		                                            	<option>Business</option>
		                                            	<option>Vacation </option>
		                                            	<option>Work</option>
		                                        	</select>
		                                    	</div>
		                                    </div>
		                                    <div className="col-sm-5">
		                                    	<div className="form-group label-floating">
		                                        	<label className="control-label">Is air conditioning included ?</label>
		                                        	<select className="form-control">
		                                            	<option disabled="" ></option>
		                                            	<option>Yes</option>
		                                            	<option>No </option>
		                                        	</select>
		                                    	</div>
		                                    </div>
		                                    <div className="col-sm-5 col-sm-offset-1">
		                                    	<div className="form-group label-floating">
		                                        	<label className="control-label">Does your place have wi-fi?</label>
		                                        	<select className="form-control">
		                                    			<option disabled="" ></option>
		                                            	<option>Yes</option>
		                                            	<option>No </option>
		                                        	</select>
		                                    	</div>
		                                    </div>
		                                    <div className="col-sm-5">
		                                    	<div className="form-group label-floating">
		                                        	<label className="control-label">Is breakfast included?</label>
		                                        	<select className="form-control">
		                                            	<option disabled="" ></option>
		                                            	<option>Yes</option>
		                                            	<option>No </option>
		                                        	</select>
		                                    	</div>
	                                    	</div>
		                                </div>
		                            </div>
		                            <div className="tab-pane" id="description">
		                                <div className="row">
		                                    <h4 className="info-text"> Drop us a small description. </h4>
		                                    <div className="col-sm-6 col-sm-offset-1">
		                                        <div className="form-group label-floating">
		                                            <label className="control-label">Place description</label>
		                                            <textarea className="form-control" placeholder="" rows="9"></textarea>
		                                        </div>
		                                    </div>
		                                    <div className="col-sm-4">
		                                    	<div className="form-group label-floating">
		                                            <label className="control-label">Example</label>
		                                            <p className="description">"The place is really nice. We use it every sunday when we go fishing. It is so awesome."</p>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                        <div className="wizard-footer">
	                            	<div className="pull-right">
	                                    <input type='button' className='btn btn-next btn-fill btn-primary btn-wd' name='next' value='Next' />
	                                    <input type='button' className='btn btn-finish btn-fill btn-primary btn-wd' name='finish' value='Finish' />
	                                </div>
	                                <div className="pull-left">
	                                    <input type='button' className='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />
	                                </div>
		                            <div className="clearfix"></div>
		                        </div>
			                </form>
		                </div>
		            </div> 
		        </div>
	        </div> 
	    </div> 
        </>
    )
}
