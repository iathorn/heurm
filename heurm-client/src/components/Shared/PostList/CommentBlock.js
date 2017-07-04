import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import CommentList from './CommentList';

const Wrapper = styled.div`
    background: ${oc.gray[0]};
`;

const InputWrapper = styled.div`
    padding: 0.75rem;
`;

const Input = styled.input`
    display: block;
    background: none;
    outline: none;
    border: none;
    font-size: 0.8rem;
    width: 100%;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid ${oc.gray[5]};
    &:focus {
        border-bottom: 1px solid ${oc.cyan[4]};
    }
    ::placeholder {
        text-align: center;
        color: ${oc.gray[5]};
    }
`;

const CommentBlock = ({onChange, onKeyPress, onRelayout, value, comments, logged}) => {
    return (
        <Wrapper>
            <InputWrapper>
                <Input value={value} onChange={onChange} onKeyPress={onKeyPress} disabled={!logged} placeholder={!logged && '로그인 후 이용하세요'}/>
            </InputWrapper>
            <CommentList comments={comments} onRelayout={onRelayout}/>
        </Wrapper>
    )
}

export default CommentBlock;