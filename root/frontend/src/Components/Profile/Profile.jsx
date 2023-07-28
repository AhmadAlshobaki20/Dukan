import React from "react";
import "./Profile.css";
import ProfileHero from "./ProfileHero";

function Profile() {
  return (
    <div className="profilePage">
      <ProfileHero />
      <div className="profileBox">
        <div className="profileTable">
          <div className="profileRightSection">
            <div className="profileImg"></div>
            <h4>anas</h4>
          </div>
          <div className="profileLeftSection">
            <div className="profileLeftSection-right">
              <div>الاسم</div>
              <div>الايميل</div>
              <div>الهاتف</div>
              <div>كلمة السر</div>
            </div>
            <div className="profileLeftSection-left">
              <div>انس</div>
              <div>abosaaleekanas@gmail.com</div>
              <div>0787777777</div>
              <div>***********</div>
            </div>
          </div>

          <button className="editButton">تعديل</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
