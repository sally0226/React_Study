import React from 'react';
import styled from 'styled-components';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md';
import {useDateState, useDateDispatch} from '../TodoContext';

const WrapArrow = styled.div`
    margin-top: 96px;
    margin-bottom: 32px;
    line-height: 768px;
    height: 768px;
    .Arrow {
        //position: absolute;
        //top: 600px;
        height: 100px;
        width : 80px;
        color: #868e96;
        vertical-align: middle;
        &:hover{
            color: #343a40;
        }
    }
`;

//함수형 컴포넌트에서 첫 번째 parameter = props
function TodoChangeDate(props){
    const dateDispatch = useDateDispatch();
    const date = useDateState();
    const onClick = (e, info) => {
        console.log("onclick");
        e.preventDefault(); // 새로고침 방지
        var _type;
        if (info === "left")  _type = '-';
        else _type = '+';
        dateDispatch({type: _type});
        console.log("date in onclick :",date);
    }
    if (props.info==="left")
        return (
            <WrapArrow>
                <MdKeyboardArrowLeft className="Arrow" onClick={(e) => onClick(e,props.info)}/>
            </WrapArrow>
        );
    else 
        return (
            <WrapArrow>
                <MdKeyboardArrowRight className="Arrow" onClick={(e) => onClick(e,props.info)}/>
            </WrapArrow>
        );

}

export default TodoChangeDate;