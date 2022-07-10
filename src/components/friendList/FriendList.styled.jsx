import styled from '@emotion/styled';
import { setBgColor } from 'components/utilities/bgColor';

export const List = styled.ul`
  display: block;
  margin: 0 auto;
  padding: 0;
  width:300px;
  list-style: none;
`;

export const ListItem = styled.li`
display: flex;
align-items: center;
padding: 10px 15px;
border: 1px solid rgb(206, 206, 206);
border-radius:5px;
box-shadow: 2px 5px 5px grey;
background-color: white;
&:not(:last-child) {
margin-bottom: 10px;
}
`;

export const Status = styled.span`
display: inline-block;
width: 15px;
height: 15px;
margin-right:15px;
border-radius: 50%;
background-color: ${setBgColor};
`;

export const Avatar = styled.img`
margin-right: 15px;
width: 60px;
height: 60px;
`;

export const Name = styled.p`
font-size: 25px;
font-weight: 500;
`;