import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CssPage(){
    return(<>
    <div  className="img" style={{textAlign: 'left' }}>

    <h1 style={{textAlign:'center'}}>CSS</h1>
    <h2 style={{textAlign:'center'}}>Cascading Style Sheet</h2><br></br>
    
    <b style={{color:'green'}} >TOPICS COVERED</b>
    <ol className="color">
    <Container >
    <Row>
        <Col sm={3}><li ><Link to='/cssintroduction' className="color">CSS Introduction</Link> </li></Col>
        <Col sm={5}><li><Link to='/internal' className="color">Internal CSS</Link> </li></Col>
        <Col sm={3}><li><Link to='/inlineCSS' className="color">Inline CSS</Link>  </li></Col>
      </Row>

      <Row>
        <Col sm={3}><li><Link to='/externalCSS' className="color">External CSS</Link></li></Col>
        <Col sm={5}><li><Link to ='/class' className="color">Class </Link></li></Col>
        <Col sm={2}><li><Link to ='/boxmodel' className="color">Box Model in CSS</Link></li></Col>
      </Row>
      <Row>
        <Col sm={3}><li><Link to='/display' className="color">Display property </Link></li></Col>
        <Col sm={5}><li><Link to='/grid' className="color">Grid</Link></li></Col>
        <Col sm={2}><li><Link to ='/position' className="color">position</Link></li></Col>
      </Row>
      <Row>
        <Col sm={3}> <li><Link to='/responisve' className="color">Responsive webpage</Link> </li></Col>
        <Col sm={5}><li><Link to='/media' className="color">Media Queries</Link></li></Col>
        <Col sm={2}><li><Link to='/bootstap' className="color">Bootstrap</Link></li></Col>
      </Row>
      

        {/* <li ><Link to='/cssintroduction' style={{color:'blueviolet'}}>CSS Introduction</Link> </li>
        <li><Link to='/inlineCSS' style={{color:'blueviolet'}}>Inline CSS</Link>  </li>
        <li><Link to='/internalCSS' style={{color:'blueviolet'}}>Internal CSS</Link> </li>
        <li><Link to='/externalCSS' style={{color:'blueviolet'}}>External CSS</Link></li>
        <li><Link to ='/class' style={{color:'blueviolet'}}>Class </Link></li>
        <li><Link to ='/boxmodel'style={{color:'blueviolet'}}>Box Model in CSS</Link></li>
        <li><Link to='/display' style={{color:'blueviolet'}}>Display /property</Link></li> */}
       </Container> 
    </ol>
        
    </div>

    </>)
}
export default CssPage