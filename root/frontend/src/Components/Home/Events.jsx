import React from "react";
import jara from "../../Images/jara.png";
import anbar from "../../Images/anbar.png";
import asal from "../../Images/asal.png";
import "./Home.css";

function EventsCard() {
  return (
    <>
      <div className="card-title">
        <h1>فعاليّات</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="card h-50 mt-4 mx-auto " style={{ width: "18rem" }}>
            <img src={jara} className="card-img-top" alt="souk jara" />
            <div className="card-body">
              <h1 className="card-text fw-bold">سوق جارا</h1>
              <p className="card-text fw-bold">
                يبدأ خلال شهر أيار من كل عام وينتهي في تشرين الأول.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-50 mt-4 mx-auto" style={{ width: "18rem" }}>
            <img src={anbar} className="card-img-top" alt="souk anbar" />
            <div className="card-body">
              <h1 className="card-text fw-bold">سوق عنبر</h1>

              <p className="card-text fw-bold">
                يفتح يومي الجمعة والسبت، بشكل دائم خلال العام.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-50 mt-4 mx-auto" style={{ width: "18rem" }}>
            <img src={asal} className="card-img-top" alt="asal" />
            <div className="card-body">
              <h1 className="card-text fw-bold">سوق آصال</h1>

              <p className="card-text fw-bold">
                سوق شامل يضم جميع القطاعات المختلفة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventsCard;
