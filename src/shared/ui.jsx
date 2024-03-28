import styled from "styled-components";

export const Header = styled.h2`
    color: #1890FF;
    font-weight: 400px;
    font-size: 20px;
    line-height: 28px;
`

export const NameTitle = styled.span`
    font-weight: 400px;
    font-size: 18px;
    line-height: 28px;
`

export const Tag = styled.span`
    display: inline-block;
    height: fit-content;
    width: 20px;
    border: 1px solid black;
    border-radius: 2px;
    line-height: 20px;
    font-weight: 400px;
    font-size: 12px;
    padding-left: 4px;
    padding-right: 4px;
`

export const VStack = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const HStack = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const Text = styled.p`
    line-height: 22px;
    font-weight: 400px;
    font-size: 12px;
`

export const Avatar = styled.img`
    width: 46px;
    height: 46px;
    border-radius: 50%;
`


export const Input = styled.input`
    font-size: 16px;
    font-weight: normal;
    line-height: 24px;
    background-color: white;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    padding: 8px 12px;
    margin: 0px;

    &::placeholder{
        color: #BFBFBF;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 0px;
    padding: 0px;
    align-items: flex-start;
`;

export const InputTitle = styled.span`
    font-size: 14px;
    line-height: 22px;
    color: #262626;
`;

export const FormTitle = styled.h2`
    color: #262626;
    font-size: 20px;
    line-height: 28px;
    font-weight: medium;
`

export const Container = styled.div`
    border: 1px solid #262626;
    border-radius: 6px;
    box-shadow: 0px 22px 106px rgba(0, 0, 0, 0.07), 0px 9.19107px 44.2843px rgba(0, 0, 0, 0.0503198), 0px 4.91399px 23.6765px rgba(0, 0, 0, 0.0417275), 0px 2.75474px 13.2728px rgba(0, 0, 0, 0.035), 0px 1.46302px 7.04911px rgba(0, 0, 0, 0.0282725), 0px 0.608796px 2.93329px rgba(0, 0, 0, 0.0196802);
`;

export const Background = styled.div`
    background-color: #EBEEF3;
    display: flex;
    align-content: center;
    flex-direction: column;
    min-height: 100%;
`;

export const ProxyForm = styled.form``;