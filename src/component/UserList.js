import React, { useState } from "react";
import { useSelector } from "react-redux";
import Title from "./Title";
import Owner from "./Owner";
import "../component/UserList.css";
import "../component/UserCard.css";

const UserList = () => {
  const [personName, setPersonName] = useState("Jana Strassmann");
  const [personEmail, setPersonEmail] = useState("batz.mortimer@yahoo.com");
  const [personId, setPersonId] = useState("");
  const contacts = useSelector((state) => state);
  const onHoverChange = (contact, id) => {
    setPersonName(contact.name);
    setPersonEmail(contact.email);
    setPersonId(id);
  };
  return (
    <>
      <div className="main-div">
        <div className="card">
          <div className="child-div">
            <Title />
            <div className="showItems">
              <Owner />

              {/* -------each element start-------*/}
              {contacts.map((contact, id) => (
                <div
                  className="eachItem"
                  onMouseEnter={() => {
                    onHoverChange(contact, id);
                  }}
                >
                  <div className="profile-icon">
                    <img
                      src={`https://reqres.in/img/faces/${id + 1}-image.jpg`}
                      alt="img"
                    />
                  </div>
                  <div className="list-text">
                    <h3>{contact.name}</h3>
                    <h4>{contact.email}</h4>
                  </div>

                  <div className="user-btn">
                    <div className="dropdown-btn">
                      <select>
                        <option value="Active">Active</option>
                        <option value="Inactive">InActive</option>
                      </select>
                    </div>
                    <div className="dropdown-btn-2">
                      <select>
                        <option value="Manager">Active</option>
                        <option value="Read">InActive</option>
                      </select>
                    </div>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Your Item"
                    ></i>
                  </div>
                </div>
              ))}

              {/* ----------each element end--------- */}
            </div>
          </div>
        </div>
        {/* -------card start--------- */}
        <div className="card user-card">
          <div className="card-body card-contain">
            <div className="profile-icon">
              <img
                src={`https://reqres.in/img/faces/${personId + 1}-image.jpg`}
                alt="img"
              />
            </div>
            <h3>{personName}</h3>
            <p className="email">{personEmail}</p>
            <h2 className="plan">Your Plan : Standard</h2>
            <button type="button" className="btn " disabled={true}>
              Active User
            </button>
            <p className="plan-uses">Plan Uses</p>
            <div className="parent-bar">
              <div className="child-bar progress"></div>
            </div>
            <div className="bottom-section d-flex justify-content-around">
              <div className="clicks-reviewed">
                <h1>2450</h1>
                <p>clicks reviewed</p>
              </div>
              <div className="vl"></div>
              <div className="monthly-clicks">
                <h1>5000</h1>
                <p>monthly clicks</p>
              </div>
            </div>
          </div>
        </div>
        {/* -------card end--------- */}
      </div>
    </>
  );
};
export default UserList;
