import React from "react";
import styled from "styled-components";

const Backsplash = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: #00000054;
`;

const UserProfile = styled.div`
  display: block;
  min-width: 10rem;
  width: 16rem;
  height: 16rem;
  margin: auto;
  padding: 0.5rem;

  background-color: #fff;
  border: 1px solid #343434;
  border-radius: 0.25rem;

  position: relative;
  z-index: 2;

  line-height: 1.55;

  hr {
    width: 75%;
    margin: 0.125rem auto;
  }

  .addr {
    display: inline-block;
    padding: 0 0.25rem;
  }
`;

export default function Profile(props: any) {
  const { profile } = props;
  const { address } = profile;

  const getTeam = (id) => {
    if (id - 1 % 3) {
      return "Team B";
    } else if (id - 1 / 2) {
      return "Team C";
    } else {
      return "Team A";
    }
  }

  return (
    <>
      <Backsplash />
      <UserProfile>
        <b>Team: {getTeam(profile.id)}</b>
        <br />
        <b>Name: {profile.name} - {profile.username} - (profile.id)</b>
        <br />
        <b>Email: {profile.email}</b>
        <br />
        <hr />
        <b>Address: </b>
        <br />
        <span className="addr">
          {address.street}
          <br />
          {address.suite}
          <br />
          {address.city}&nbsp;&nbsp;{address.zipcode}
        </span>
        <br />
        <b>Phone: {profile.phone}</b>
        <br />
        <hr />
        <b>Website: {profile.website}</b>
      </UserProfile>
    </>
  );
}