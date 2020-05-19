import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    background-color: #ededed;
    align-items: center;
    flex-direction: column;

    h1{
        display:flex;
        font-size: 80px;
        color: #575757;
        justify-content: baseline;
        align-items: center;
        text-shadow: 2px 5px 4px rgba(113,113,113,0.6);
        height: 200px;
        margin-top: 90px;
        
    }
    h1 span{
        display:flex;
        font-size: 81px;
        color: #333333;
        justify-content: center;
        text-shadow: 2px 5px 4px rgba(0,0,0,0.6);

    }

    .div-input{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        top: 40%;
        align-items: center;
    }
    
    input{
        border-radius: 10px;
        width: 90%;
        border: 1px solid rgba(113,113,113,0.6);
        height: 30px;
        padding-left: 3px;
        outline: none;
        padding-left: 8px;
        transition: 0.5s;
      }
    input:focus{
        border-color: rgba(0,0,0,0.6);
      }

    table {
        position: absolute;
        top: 50%;
        width: 100vw;
        min-height: 50%;
        height: auto;
        background-color: #fff;
    }
    table th {
        padding-top: 10px;
    }
    table td {
        text-align: center;
    }
    table tr {
        height: 80px;
    }

`;