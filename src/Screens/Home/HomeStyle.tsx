import styled from 'styled-components'
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import media from "styled-media-query";

export const Main = styled.div`
  margin-top: 0px;
`;

export const Title = styled(Typography)`
&& {
  text-align: center;
  line-height: 60px
}`;

type CustomBoxType = {
  color: string;
};

const Box2 = styled(Main)`
  && {
    text-align: center;
    width: 200px;
    height: 60px;
    background-color: ${(props: CustomBoxType) =>
      props.color || "blue"};
  }
`;