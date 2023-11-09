import styled from "styled-components";

export const displayYes = styled.ul`
overflow-y:auto;
overflow-x:hidden;
scrollbar-color:red;
display:flex;
flex-direction: column;
gap: 20px;
  top: 50px;
  border-radius: 10px;
  padding-left: 20px;
  min-width: 248px;
  min-height:250px;
  background: #565454;
  position: absolute;
  bottom: -90px;
  left: -5px;
  z-index: 100;
`;
export const displayYesYar = styled.ul`
overflow-y:auto;
overflow-x:hidden;
display:flex;
flex-direction: column;
gap: 10px;
  top: 50px;
  border-radius: 10px;
  padding-left: 20px;
  min-width: 248px;
  height:fit-content;
  background: #565454;
  position: absolute;
  bottom: -90px;
  left: -5px;
  z-index: 100;
`;
export const centralBlockFilter = styled.div`
  gap: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
  box-sizing: border-box;
  align-items: baseline;
`;
export const centralBlockFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`;
export const centralBlockFilterButton = styled.button`
  background: black;
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
  &:focus {
    
    background-color: rgb(58, 17, 58);
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const filterBlockPerformer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
export const filterBlockYear = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  
`;
export const filterBlockStyle = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
export const filterBlockLink = styled.a`
color: aliceblue;
&:hover{
  text-decoration: underline;
&:focus{
  color:rgb(223, 20, 223)
}  
`;
export const styleFilterUl = styled.ul`
display:${(props) =>(props.isactive ==="style" ? "block" : "none") };

top: 50px;
border-radius: 10px;
padding-left: 20px;
min-width: 248px;
height: fit-content;
background: #565454;
position: absolute;
bottom: -90px;
left:-5px;
z-index: 100;
}  
`;


