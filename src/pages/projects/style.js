import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const NavProject = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;

  & .project__icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60px;
    height: 100%;
    padding: 0px auto;
  }

  & #project__description {
    color: white;
    background: hsl(225deg 33% 25%);
    padding: 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }

  & #project__demo {
    color: hsl(225deg 33% 60%);
    background: hsl(0deg 0% 87%);
    padding: 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
`;
