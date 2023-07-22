import React, { useEffect, useState } from "react";
import { API_URL } from "../../utils/constants";
import { Api, upload } from "../../utils/api";
import { Notify } from "../../utils/notification";
import Layout from "../../layout/user";

const data = [
  {
    label: "USER NAME",
    className: "form-control",
    type: "text",
    name: "username",
    editable: true,
  },
  {
    label: "E-MAIL",
    className: "form-control",
    type: "email",
    name: "email",
  },
  {
    label: "FIRST NAME",
    className: "form-control",
    type: "text",
    name: "firstname",
    editable: true,
  },
  {
    label: "LAST NAME",
    className: "form-control",
    type: "text",
    name: "lastname",
    editable: true,
  },
  {
    label: "ACHIEVEMENTS",
    className: "form-control",
    name: "achieves",
  },
  {
    label: "REWARDS",
    className: "form-control",
    name: "rewards",
  },
  {
    label: "LINKED WITH",
    className: "form-control",
    name: "linked",
  },
  {
    label: "FRIENDS",
    className: "form-control",
    name: "friends",
    editable: true,
  },
];

export default function Profile() {
  const id = 1;
  const [userInfo, setUserInfo] = useState({});

  const uploadImg = async (e) => {
    upload(e, "image", async (res) => {
      // changeinfo("avatar", res);
      if (res) {
        Api("/user/getUserInfo", { id }, (res) => {
          const { success, data } = res;
          if (success) {
            setUserInfo(data[0]);
          }
        });
      }
    });
  };

  // const update = async (e, field) => {
  //   if (e.keyCode === 13) {
  //     if (e.target.value.length > 4) {
  //       changeinfo(field, e.target.value);
  //     } else {
  //       Notify("warning", "Must be longer than 4 characters");
  //     }
  //   }
  // };

  // const changeinfo = (f, val) => {
  //   let id = userInfo.id;
  //   Api("/user/updateProfile", { f, val, id }, (res) => {
  //     const { success } = res;

  //     if (success) {
  //       Api("/user/getUserInfo", { id }, (res) => {
  //         const { success, data } = res;
  //         if (success) {
  //           setUserInfo(data[0]);
  //         }
  //       });
  //     }
  //   });
  // };

  useEffect(() => {
    Api("/user/getUserInfo", { id }, (res) => {
      const { success, data } = res;
      if (success) {
        setUserInfo(data[0]);
      }
    });
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4 bg-iwin">
            <h5 className="card-header">{userInfo.username}'s Profile</h5>
            <hr className="my-0" />
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-3">
                  <div className="">
                    <img
                      src={
                        userInfo.avatar
                          ? `${API_URL}/images/${userInfo.avatar}`
                          : "../assets/img/select.jpg"
                      }
                      alt="user-avatar"
                      className="d-block rounded mb-3 w-100 uploaded_image"
                    />
                    <div className="">
                      <label className="btn btn-primary mb-4 w-100">
                        <span className="d-none d-sm-block">
                          Upload New Avatar
                        </span>
                        <i className="bx bx-upload d-block d-sm-none"></i>
                        <input
                          type="file"
                          onChange={(e) => uploadImg(e)}
                          className="account-file-input"
                          accept="image/png, image/jpeg"
                          hidden
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    {data.map((ele, i) => (
                      <div key={i} className="mb-3 col-md-6">
                        <small className="text-light fw-semibold">
                          {ele.label}
                        </small>
                        <div>
                          {ele.editable ? (
                            <div className="input-group input-group-merge">
                              <input
                                type="text"
                                className="no-border"
                                defaultValue={userInfo[ele.name]}
                                // onKeyDown={(e) => update(e, ele.name)}
                              />
                              <span
                                className="no-border"
                                id="basic-addon-search31"
                              >
                                <i className="bx bx-edit"></i>
                              </span>
                            </div>
                          ) : (
                            <p>{userInfo[ele.name]}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
