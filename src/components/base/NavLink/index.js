import style from "styled-components";

const Button = style.button`
width: 200px;
height:50px;
color:white;
font-size:20px;
font-weight: border;
border:none;
border-radius:10px;
width: ${(props) => (props.large ? "500px" : "200px")};
height:70px;
backgorund-color:${(props) => props.color};

&:hover {
    cursor:pointer;
    background-color:${(props) => props.darkColor}
}
`;

export default Button;
