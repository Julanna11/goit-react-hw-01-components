import styled from "@emotion/styled";


export const Table = styled.table`
width: 400px;
text-align:center;
margin: 50px 0;
`;

export const Thead = styled.thead`
background-color: lightblue;
color:white;
text-transform: uppercase;
`;

export const Th = styled.th`
padding: 10px;

`;

export const Tbody = styled.tbody`
background-color: lightgrey;
`;

export const Tr = styled.tr`
color:grey;
font-size: 15px;
&:nth-of-type(2n){
  background-color:white;
}
`

export const Td = styled.td`
padding:10px;
 `