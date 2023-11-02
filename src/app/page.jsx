"use client";

import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Link from "next/link";

const H1 = styled.h1`
  color: #008a47;
`;

export default function Website() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <H1>Hello, Welcome to VoiceX 👋</H1>

      <h2
        style={{
          marginBottom: "50px",
        }}
      >
        The Next Voice Solution for Customer Kaboom
      </h2>
      <Link href="/login">
        <Button variant="contained" color="success">
          Login
        </Button>
      </Link>
    </div>
  );
}
