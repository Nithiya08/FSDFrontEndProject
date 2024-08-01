import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import CssPage from './CssPage';
import JsPage from './JsPage';
import ReactPage from './ReactPage';
import Home from './Home';
import Htmlpage from './HtmlPage';
import HtmlTopics from './HtmlTopics';
import CssTopic from './CssTopic';
import JsTopic from './JsTopic';
import ReactTopic from './ReactTopic';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
  <Routes>
<Route path='/' element={<Layout></Layout>}>
<Route index element={<Home />} />
<Route path='/home' element={<Home></Home>}></Route>
<Route path='/htmlpage' element={<Htmlpage></Htmlpage>}></Route>
<Route path='/csspage' element={<CssPage></CssPage>}></Route>
<Route path='/jspage' element={<JsPage></JsPage>}></Route>
<Route path='/reactpage' element={<ReactPage></ReactPage>}></Route>
<Route path='/tagAttribute' element={<HtmlTopics></HtmlTopics>}></Route>
<Route path='/blackLineInline' element={<HtmlTopics></HtmlTopics>}></Route>
<Route path='/tag' element={<HtmlTopics></HtmlTopics>}></Route>
<Route path='/entity' element={<HtmlTopics></HtmlTopics>}></Route>
<Route path='/listTag' element={<HtmlTopics></HtmlTopics>}></Route>
 <Route path='/cssintroduction' element={<CssTopic></CssTopic>}></Route>
 <Route path='inlineCSS' element={<CssTopic></CssTopic>}></Route>
 <Route path='internal' element={<CssTopic></CssTopic>}></Route>
 <Route path='/externalCSS' element={<CssTopic></CssTopic>}></Route>
 <Route path='class' element={<CssTopic></CssTopic>}></Route>
 <Route path='/boxmodel' element={<CssTopic></CssTopic>}></Route>
 <Route path='display' element={<CssTopic></CssTopic>}></Route>
 <Route path='/grid' element={<CssTopic></CssTopic>}></Route>
 <Route path='/position'element={<CssTopic></CssTopic>}></Route>
 <Route path='/responsive' element={<CssTopic></CssTopic>}></Route>
 <Route path='/media' element={<CssTopic></CssTopic>}></Route>
 
 <Route path='/jsintroduction' element={<JsTopic />} />

</Route>
<Route path='/datatypes' element={<JsTopic></JsTopic>}></Route>
<Route path='/function' element={<JsTopic></JsTopic>}></Route>
<Route path='/variable' element={<JsTopic></JsTopic>}></Route>
<Route path='/arrow' element={<JsTopic></JsTopic>}></Route>
<Route path='/foreach' element={<JsTopic></JsTopic>}></Route>
<Route path='/arrays' element={<JsTopic></JsTopic>}></Route>
<Route path='interpolation' element={<JsTopic></JsTopic>}></Route>
<Route path='object' element={<JsTopic></JsTopic>}></Route>
<Route path='constructor' element={<JsTopic></JsTopic>}></Route>
<Route path='factory' element={<JsTopic></JsTopic>}></Route>
<Route path='prototype' element={<JsTopic></JsTopic>}></Route>
<Route path='classjs' element={<JsTopic></JsTopic>}></Route>
<Route path='inheritance' element={<JsTopic></JsTopic>}></Route>
<Route path='synch' element={<JsTopic></JsTopic>}></Route>
<Route path='dom' element={<JsTopic></JsTopic>}></Route>
<Route path='restoperator' element={<JsTopic></JsTopic>}></Route>
<Route path='ecm6' element={<JsTopic></JsTopic>}></Route>
<Route path='promise' element={<JsTopic></JsTopic>}></Route>
<Route path='fetch' element={<JsTopic></JsTopic>}></Route>
<Route path='/introduction' element={<ReactTopic></ReactTopic>}></Route>
<Route path='/jsx' element={<ReactTopic></ReactTopic>}></Route>
<Route path='/component' element={<ReactTopic></ReactTopic>}></Route>
<Route path='/state' element={<ReactTopic></ReactTopic>}></Route>
<Route path='/ds' element={<ReactTopic></ReactTopic>}></Route>
<Route path='/hooks' element={<ReactTopic></ReactTopic>}></Route>
<Route path='/cc' element={<ReactTopic></ReactTopic>}></Route>
<Route path='/fc' element={<ReactTopic></ReactTopic>}></Route>
<Route path='/redux' element={<ReactTopic></ReactTopic>}></Route>
<Route path='/router' element={<ReactTopic></ReactTopic>}></Route>
<Route path='/props' element={<ReactTopic></ReactTopic>}></Route>
<Route path='/uc' element={<ReactTopic></ReactTopic>}></Route>
  </Routes>

      
      </BrowserRouter>
    </div>
  );
}

export default App;
