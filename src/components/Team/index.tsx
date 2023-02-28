import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import {flexbox, space} from "styled-system";

import Profile from "./../Profile";

const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  height: 50vh;
  margin: 0 auto;
  ${flexbox}
  ${space}
`;

const TeamProfile = styled.div`
  display: flex;
  flex: 0.25;
  min-width: 10rem;
  width: 50%;
  margin: 0.25rem;

  background-color: #fff;
  border: 1px solid #343434;
  border-radius: 0.125rem;
`;

const TeamLink = styled.button`
  align-self: end;
  width: 100%;
  height: 2rem;
  margin: 1rem;

  cursor: pointer;
  white-space: nowrap;
`;

export default function Team() {
    interface GeoLocation {
        lat: number;
        lng: number;
    }

    interface Address {
        "street": string;
        "suite": string;
        "city": string;
        "zipcode": string;
        "geo": GeoLocation;
    }

    interface Company {
        "name": string;
        "catchPhrase": string;
        "bs": string;
    }

    interface User {
        "id": string;
        "name": string;
        "username": string;
        "email": string;
        "address": Address;
        "phone": string;
        "website": string;
        "company": Company;
    }

    const [error, setError] = useState<string>("");
    const [profile, setProfile] = useState({});
    const [team, setTeam] = useState<User[]>([]);

    useEffect(() => {
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users').then(response => {
            setTeam(response.data);
        }).catch((error) => {
            setError("Unable to load users.");
        });
    }, []);

    const handleProfile = (user: User) => {
        setProfile(user);

        document.body.addEventListener('click', (): void => {
            setProfile({});
            document.body.removeEventListener('click', (): void => {
            }, true);
        }, true);
    }

    return (
        <React.Fragment>
            {error === "" && (
                <>
                    <TeamContainer className="team">
                        {
                            team.map((user, index): any => {
                                return (
                                    <TeamProfile key={`tp-${index}`}>
                                        <TeamLink onClick={(event) => {
                                            event.stopPropagation();
                                            handleProfile(user);
                                        }}>
                                            {user.name}
                                        </TeamLink>
                                    </TeamProfile>
                                )
                            })
                        }
                    </TeamContainer>
                    {Object.keys(profile).length > 0 && <Profile profile={profile}/>}
                </>
            )}
            {error !== "" && (
                <>
                    <div role="alert">{error}</div>
                </>
            )}
        </React.Fragment>
    );
}