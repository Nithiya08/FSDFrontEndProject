
import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function JsPage(){
return(<>
<div  className="img" style={{textAlign: 'left' }}>
<h1 style={{textAlign:'center'}}>JS</h1>
    <h2 style={{textAlign:'center'}}>JAVA SCRIPT</h2><br></br>
    
    <b style={{color:'green'}} >TOPICS COVERED</b>
    <ol className="color">
    <Container >
    <Row>
        <Col sm={3}><li ><Link to='/jsintroduction' className="color"> Introduction</Link> </li></Col>
        <Col sm={5}><li><Link to='/datatypes' className="color">Data Types</Link> </li></Col>
        <Col sm={3}><li><Link to='/function' className="color">Funtion</Link>  </li></Col>
      </Row>

      <Row>
        <Col sm={3}><li><Link to='/variable' className="color">Variable </Link></li></Col>
        <Col sm={5}><li><Link to ='/arrow' className="color">Arrow Funtion </Link></li></Col>
        <Col sm={2}><li><Link to ='/foreach' className="color">Foreach</Link></li></Col>
      </Row>
      <Row>
        <Col sm={3}><li><Link to='/arrays' className="color">Arrays </Link></li></Col>
        <Col sm={5}><li><Link to='/interpolation' className="color">Interpolation</Link></li></Col>
        <Col sm={2}><li><Link to ='/object' className="color">Object</Link></li></Col>
      </Row>
      <Row>
        <Col sm={3}> <li><Link to='/constructor' className="color">Constructor function </Link> </li></Col>
        <Col sm={5}><li><Link to='/factory' className="color">factory function</Link></li></Col>
        <Col sm={2}><li><Link to='/prototype' className="color">prototype</Link></li></Col>
      </Row>
      <Row>
        <Col sm={3}> <li><Link to='/classjs' className="color">Class </Link> </li></Col>
        <Col sm={5}><li><Link to='/inheritance' className="color">Inheritance</Link></li></Col>
        <Col sm={2}><li><Link to='/synch' className="color">Synchronous</Link></li></Col>
      </Row>
      <Row>
        <Col sm={3}> <li><Link to='/dom' className="color">DOM </Link> </li></Col>
        <Col sm={5}><li><Link to='/math' className="color">Math</Link></li></Col>
        <Col sm={2}><li><Link to='/restoperator' className="color">Rest Operator</Link></li></Col>
      </Row>
      <Row>
        <Col sm={3}> <li><Link to='/ecm6' className="color">ECMPSC-6 </Link> </li></Col>
        <Col sm={5}><li><Link to='/promise' className="color">Promise</Link></li></Col>
        <Col sm={2}><li><Link to='/fetch' className="color">Fetch</Link></li></Col>
      </Row>
      </Container>
      </ol>
</div>
</>)
}
export default JsPage