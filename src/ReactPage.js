import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ReactPage(){
    return(<>
    <div  className="img" style={{textAlign: 'left' }}>
    <h1 style={{textAlign:'center'}}>React</h1>
    
    <b style={{color:'green'}} >TOPICS COVERED</b>
    <ol className="color">
    <Container >
    <Row>
        <Col sm={3}><li ><Link to='/introduction' className="color"> React Introduction</Link> </li></Col>
        <Col sm={5}><li><Link to='/jsx' className="color">React JSX</Link> </li></Col>
        <Col sm={3}><li><Link to='/component' className="color">Component</Link>  </li></Col>
      </Row>

      <Row>
        <Col sm={3}><li><Link to='/state' className="color">State</Link></li></Col>
        <Col sm={5}><li><Link to ='/ds' className="color">Data Sharing </Link></li></Col>
        <Col sm={2}><li><Link to ='/hooks' className="color">Hooks</Link></li></Col>
      </Row>
      <Row>
        <Col sm={3}><li><Link to='/cc' className="color">Class component </Link></li></Col>
        <Col sm={5}><li><Link to='/fc' className="color">Function Component</Link></li></Col>
        <Col sm={2}><li><Link to ='/router' className="color">Router</Link></li></Col>
      </Row>
      <Row>
        <Col sm={3}> <li><Link to='/props' className="color">Props Drilling</Link> </li></Col>
        <Col sm={5}><li><Link to='/uc' className="color">useContext</Link></li></Col>
        <Col sm={2}><li><Link to='/redux' className="color">Redux</Link></li></Col>
      </Row>
      </Container>
      </ol>
    </div>
    </>)
}
export default ReactPage