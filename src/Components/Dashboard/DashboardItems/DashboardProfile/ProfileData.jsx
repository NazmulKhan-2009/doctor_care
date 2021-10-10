import React from 'react'
import './dashboardProfile.css'
export default function ProfileData() {


const userInfo=JSON.parse(sessionStorage.getItem('userInfo'))

 return (
  <div className="container rounded bg-white  mb-5" id="profile_data">
    <div className="row profile_wrapper">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src={userInfo.photoURL} alt=""/><span className="font-weight-bold">{userInfo.displayName}</span><span className="text-black-50">{userInfo.email}</span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                
                <div className="row mt-3 profile_field">
                    <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control"/></div>
                    <div className="col-md-12 my-3"><label className="labels">Mobile Number</label><input type="text" className="form-control" /></div>
                    <div className="col-md-12 "><label className="labels">Address</label><input type="text" className="form-control" /></div>
                                                       
                    <div className="col-md-12 my-3"><label className="labels">Email ID</label><input type="text" className="form-control"/></div>
                    
                </div>
                <div class="row mt-3 profile_field">
                  <div class="col-md-4"><label class="labels">Previous Password</label><input type="password" class="form-control"  /></div>
                  <div class="col-md-4"><label class="labels">New Password</label><input type="password" class="form-control"  /></div>
                  <div class="col-md-4"><label class="labels">Retype Password</label><input type="password" class="form-control"  /></div>
               </div>
                
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="p-3 py-5 profile_field">
                <div className="d-flex justify-content-between align-items-center experience"><span>Billing Details</span><span className="border px-3 p-1 add-experience"><i class="fab fa-cc-visa"></i> Add Card </span></div><br/>
                <div className="col-md-12"><label className="labels">Add Card</label><input type="text" className="form-control" value=""/></div> <br/>
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" /></div>
            </div>
        </div>
    </div>
</div>

 )
}
