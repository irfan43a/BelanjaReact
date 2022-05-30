import React from "react";

const Profile = () => {
  return (
    <div>
      <section class="profile">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="profile-sidebar">
                <img src="/img/christian.png" style="border-radius: 100%; width: 60px" />
                <label for="profile">
                  james mikael <br />
                  <p>ubah profile</p>
                </label>
                <div class="select-profile">
                  <div class="user">
                    <img src="/img/user.png" />
                  </div>
                  <label for="My account">My account</label>
                  <div class="address">
                    <img src="/img/map.png" />
                  </div>
                  <label for="Shippingaddress">Shipping address</label>
                  <div class="order">
                    <img src="/img/order.png" />
                  </div>
                  <label for="My acount"> My order</label>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="profil">
                <div>
                  <h4>My Profile</h4>
                  <p>Manage your profile information</p>
                </div>
                <div class="form">
                  <div class="form-input">
                    <table>
                      <tr>
                        <td>
                          <label for="My account">Name</label>
                        </td>
                        <td>
                          <input type="text" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label for="My account">Email</label>
                        </td>
                        <td>
                          <input type="text" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label for="My account">Phone number</label>
                        </td>
                        <td>
                          <input type="tel" id="phone" name="phone" placeholder="+62" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label for="My account">Gender</label>
                        </td>
                        <td>
                          <div class="radio">
                            <input type="radio" name="" id="" /> Laki - Laki <input type="radio" name="" id="" /> Perempuan
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label for="My account">Date of birt </label>
                        </td>
                        <td>
                          <input type="month" id="bdaymonth" name="bdaymonth" />
                        </td>
                      </tr>
                      <tr rowspan="2">
                        <td>
                          <button class="save-btn">Save</button>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="image-input">
                    <img src="/img/christian.png" style="border-radius: 100%; width: 100px; border-color: white" />
                    <button class="image-btn">Select image</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
