import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./mybag.css";

const MyBag = () => {
  return (
    <div>
      <section id="bag">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>My bag</h2>
              <div className="select">
                <input type="checkbox" name="selectall" id="select" />
                Select all items( 2 items selected)
              </div>
              <div className="item">
                <input type="checkbox" name="selectall" id="select" className="check" />
                <div className="image">
                  <img src="img/formalsuitblack.png" alt="" /> Men's formal suit - Black
                </div>
              </div>
              <div className="item">
                <input type="checkbox" name="selectall" id="select" className="check" /> <img src="img/jaketjeans.png" alt="" /> Men's jacket jeans
              </div>
            </div>
            <div className="col-md-2">
              <span>Delete</span>
              <div>$ 20.0</div>
              <div>$ 20.0</div>
            </div>
            <div className="col-md-3">
              <h5>Shooping summary</h5>
              Total price <input type="text" value="$40.0" />
              <button type="submit" className="buy-btn">
                buy
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyBag;
