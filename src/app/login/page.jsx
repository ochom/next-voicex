"use client";

import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import React from "react";

const LoginBox = styled.div`
  width: 400px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 40px;
  padding-bottom: 60px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .input-group {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;

      label {
        color: #999;
        margin-bottom: 5px;
      }

      input {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ddd;
      }

      & svg {
        position: absolute;
        right: 10px;
        top: 72%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        color: #999;
        cursor: pointer;
      }
    }

    button {
      margin-top: 10px;
      padding: 10px;
      color: #fff;
      border-radius: 5px;
      border: 1px solid #008a47;
      background-color: #008a47;
      cursor: pointer;
    }
  }
`;

const Logo = styled.h1`
  text-align: center;
  font-size: 25px;
  color: #008a47;
`;

const Body1 = styled.h3`
  margin-top: 30px;
  text-align: center;
`;

const Caption = styled.p`
  margin-top: 5px;
  text-align: center;
`;

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <LoginBox>
      <Logo>Next VoiceX</Logo>
      <Body1>Welcome to VoiceX 👋</Body1>
      <Caption>Please Sign-in to continue</Caption>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email or username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
          />
          <Icon
            icon={showPassword ? "eva:eye-off-outline" : "eva:eye-outline"}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <button type="submit">Sign-in</button>
      </form>
    </LoginBox>
  );
}
