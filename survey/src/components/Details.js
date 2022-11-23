import React from 'react'

function Details() {
  return (
    <div>
        <div className="container">
            <div className="col-md-5 m-auto">
                <div className="mt-3">
                    <div className="card text-left">
                        <div className="card-body">
                            <form>
                                <div className="form-group mt-2 mb-2">
                                    <label htmlFor="">
                                        {" "}
                                        <b>1.</b>Name
                                    </label>
                                    <input 
                                      type="text"
                                      name='name'
                                      className='form-control'
                                      placeholder='Please Enter Your Name'
                                      autoComplete='off' 
                                    />
                                </div>
                                <div className="form-group mt-2 mb-2">
                                    <label htmlFor="">
                                        {" "}
                                        <b>2.</b>Email
                                    </label>
                                    <input 
                                      type="text"
                                      name='email'
                                      className='form-control'
                                      placeholder='Please Enter Your Email'
                                      autoComplete='off' 
                                    />
                                </div>
                                <button type='submit' className="btn btn-primary">Next</button>
                            </form>
                            <center>
                                <span className="badge text-bg-primary">1</span>
                                <span className="badge disabled">2</span>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Details