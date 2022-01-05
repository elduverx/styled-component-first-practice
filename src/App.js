import styled,{keyframes} from 'styled-components'

const P = styled.p`
  font-size: 24px;
  color: red;
`
const Content = styled.div`
padding:20px 25px`

const Button = styled.button`
transition: box-shadow 0.2s ease;
  background-color: ${props => props.primary ? 'red' : 'white'};
  color: ${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
  &:hover{
    box-shadow: 1px 2px 5px rgb(0,0,0,0.3);

  }
  &.secondary{
    background-color: blue;
    border: solid 2px blue; 
  }
  .info{
    font-size:28px;

  }

  `

const BlockButton= styled(Button)`
  width:100%;
  font-size:24px;

`
const Link = ({classname, ...props})=>{
  return <a className={classname}{...props}></a>
}

const StyledLink = styled(Link)`
color: blue;

`

const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red'
}))`
  font-size: 20px;
  border: 1px solid red;
  color: ${props=> props.color};
`

const Password = styled(Input).attrs({
  type: 'password'
})``
//para animar con keyframes
const girar = keyframes`
from{
  transform: rotate(0deg)
}
to{
  transform: rotate(360deg)
}
`
const Rotar = styled.div`
display: inline-block;
animation: ${girar} 2s linear infinite;
`

function App() {
  return (
    <Content>

      <P>HolimP</P>
      <Button>Send</Button>
      <Button primary>Send<p className='info'>Info</p></Button>
      <Button primary className='secondary'>Send</Button>
      <BlockButton primary as="a" href="#">Send</BlockButton>
      <Link>Link</Link>
      <StyledLink>Link con stilo</StyledLink>
      <Input/>
      <Password/>
      <br/>
      <Rotar>Im spinning</Rotar>
    </Content>
      );
}

export default App;
