import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { Api } from "../../utils/api";
import { Row } from "react-bootstrap";

import Layout from "../../layout/auth";
import Divider from "../../components/divider";

export default function Signin() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    Api("/auth/login", data, (res) => {
      const { accessToken } = res;
      if (accessToken) navigate("/practice");
      localStorage.setItem("token", accessToken);
    });
  };

  const gLogin = useGoogleLogin({
    onSuccess: async (user) => {
      Api("/auth/google-login", { access_token: user.access_token }, (res) => {
        const { success } = res;

        console.log(res)
        if (success) {
          navigate("/practice");
        } else {
          navigate("/signup");
        }
      });
    },
  });
  return (
    <Layout>
      <div id="auth-page">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-center auth-form"
        >
          <div className="form-header">
            <h4 className="form-title">Log in with </h4>
          </div>
          <div className="form-body">
            <Row className="pb-3 pt-3">
              <Link className="col-sm-6 text-end pe-5" onClick={gLogin}>
                <img src="../assets/img/icons/google.png" alt="google" />
              </Link>
              <Link className="col-sm-6 text-start ps-5">
                <img src="../assets/img/icons/facebook.png" alt="facebook" />
              </Link>
            </Row>
            <Divider />
            <Row className="px-5">
              <input
                className="mt-3"
                type="text"
                placeholder="Enter your Email or Username"
                {...register("username", { required: true })}
              />
              <input
                className="mt-3"
                type="password"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
            </Row>
            <button className="rounded-btn mt-3" type="submit">
              Now Sign in
            </button>

            <Row className="pb-5 pt-3">
              <Link to="/signup">
                Dont have any account?&nbsp;
                <span className="color-acitve">Sign Up</span>
              </Link>
              <Link to="/forget_password">Forgot password?</Link>
            </Row>
          </div>
        </form>
      </div>
    </Layout>
  );
}
