import { Link } from "react-router-dom"

function Htmlpage(){
    return(<>
    <div  className="img" style={{textAlign: 'left' }}>
    <h1 style={{textAlign:'center'}}>HTML</h1>
    <h2 style={{textAlign:'center'}}>HyperText Markup Language</h2><br></br>
    
    <b style={{color:'green'}} >TOPICS COVERED</b>
    <ol className="color">
        
        <li ><Link to='/tagAttribute' className="color" >Tag And Attribute</Link> </li>
        <li><Link to='/blackLineInline' className="color">Block Line And Inline Element</Link>  </li>
        <li><Link to='/tag' className="color">Tags</Link> </li>
        <li><Link to='/entity' className="color">Entity</Link></li>
        <li><Link to ='/listTag' className="color">Moslty used Common Tag</Link></li>
        
    </ol>


</div>

    </>)
}
export default Htmlpage