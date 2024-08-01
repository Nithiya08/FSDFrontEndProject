function HtmlTopics(){
    return(<>
    
    <div style={{textAlign:'left' }}>
 <h2>Tags And Attribute</h2><br></br>
 <ul>
    <li><b>Tags</b> are used to define different types of content ,like paragraph , heading,image ,etc</li>
    <li>Tags are Enclosed in angle bracketes</li>
    <li>They are keywords used to create web pages in various formats. These tags come in pairs, with opening and closing tags, although some tags donot need to be closed.</li>
 </ul>
 <h6>Attribute</h6>
 <ul>
    <li><b>Attribute</b> provide additional inforamtion about an element and are placed with the opening tag</li>
    <li>Each element or tag can have attributes, which defines the behaviour of that element. Attributes should always be applied with start tag</li>
    <li><b>Examples </b> &lt; img  src="image.jpg" alt="description" &gt; </li>
    <li>Here The src and alt are attributes which provide the imag sorce and alternative text</li>
 </ul>
 <hr></hr>
 

 
    <h2 id="section2">BLOCK AND INLINE ELEMENT</h2>
    <ul>
        <li><b>Element:</b> Html Element Contain Starting Tag and content and ending tag &lt;p&gt;This is paragraph&lt;/p&gt;</li>
        <li> <b>HTML INLINE ELEMENT :</b> Inline Element are displayed on the same line .They donot start on a new line</li>
        <li>And take up only as much width as their contain require</li>
        <li>&lt;input&gt;,&lt;span &gt;,&lt;b&gt;,&lt;em &gt;, &lt;strong&gt;</li>
    </ul>
    <ul>
        <li><b>HTML BLOCK ELEMENT</b>Block Element takes up the whole horizontal space available in its container</li>
        <li>Theystart an a new line and takeup as much height as their contain require </li>
        <li><b>Example:</b>&lt;div &gt;, &lt;p&gt; </li>
    </ul>
 

 <hr></hr>
 
    <h2>TAGS</h2>
    <ul>
      <li><b>&lt;h1&gt; TO &lt;h6&gt;</b> These are <b>Heading Tags</b></li>
      <li><b>&lt;b&gt; is bold tag</b> Text Will be displayed in Bold  </li>
      <li><b>&lt;p&gt;</b>This is paragraph Tag</li>
      <li><b>&lt;span&gt;</b>used for styling or grouping inline elements without creating a new line.</li>
      <li><b>&lt;div&gt;</b>used for creating divisions or sections within an HTML document</li>
      

    </ul>
 
<hr></hr>

<h2>ENTITY</h2>
   <ul>
      
      <li>In HTML  an Entity Refers to a special code that respresents a character that might otherwise be interpreted as part of the HTML code itself or a character that's difficult to type with a standard keywords  </li>
      <li><b>Some common usesd Entity</b></li>
      <li><b>&amp;copy ;</b>- &copy; copyright, <b>&amp;reg;</b>-&reg; Registered Trademark, <b>&amp; lt;</b>- &lt; Less Than,<b>&amp;gt;</b> -&gt; Greater Than  </li>
   </ul>
   <hr></hr>

   <h2>IMPORTANT TAGS</h2>
   <ul>
      <li><b>List Tag:</b>"List Element" Refers to an element used tp create lists of items.There are primarily <b>Two Types</b> of lsit element<br></br><p>1.<b>Ordered List:</b>
      The &lt;ol&gt; Element is used to create an ordered list,where items are typically numbered sequentially by default <br></br>2.ordered list are used when the order of items matters, such as steps in a process or ranking items <br></br>
       3.Each items in an order list is respresented by a <b>List items &lt;li&gt;</b></p></li>
       <li>
         <b>Unordered List &lt;ul&gt;:</b><p>1.The &lt;ul&gt; element is used to create an Unorderedlist, where items are displayed with Bullet points by default<br></br>2.Unordered list are used when the order of items is not significant ,such as list of items without a specific sequence<br></br> 3.Each items an Unordered list is respresented by a list items element &lt;li&gt;</p>
       </li>
       <li><b>List items:</b><p>The &lt;li&gt; Element is used to define individual items within both ordered and Unordered</p></li>
      
   </ul>
   <hr></hr>
     <h2>Anchor Tag</h2>
     <ul>
      <li>The &lt;a&gt; Element ,with its "href" attribute ,creates a hyperlink to web page, files ,email address ,locations in same page or anything else a url can address</li>
     </ul>
     <hr></hr>
     <h2>Image Tag</h2>
     <ul>
      <li><p>1.In the order to put a simple image on a web page, we use &lt;img&gt; Element <br></br>2.This is <b>Void Element</b> That means , it cannot have any child content and cannot have an end tag<br></br>
      3.Requires two attribute  to be useful :  <b>src</b> - attribute contains a url pointing to the image you wnat to embed in the page
      <b>alt</b>-It's value is supposed to be a textual description of the iamge , where the image cannot be displayed and also used in searchEngine</p></li>
     </ul>
     <hr></hr>
     <ul>
      <h2>Header Tag</h2>
      <li>In The Html the header tag is a structual element used to define introductory or navigational content at the top of a page or section within a page</li>
      <li>It  typically contains heading ,logos ,navigation menu , search bar, and other in navigation .</li>
     </ul>
     <hr></hr>
     <ul>
      <h2>Footer Tag</h2>
      <li>The <b>&li;footer&gt;</b> element is a structual element used to identify the footer of the page,document article or section</li>
      <li>a &li;footer&gt; typicallycontains copyright and owthorship inforamtion or navigational elements to the content of the parent element<br></br><b>Example</b>&li;footer&gt;&copy;copyright</li>
     </ul>
     <hr></hr>
     <ul>
      <h2>aside Tag</h2>
      <li>sometimes beside the main text,you might see a small section with extra inforamtion like realated links ,author bio, or maybe an advertisment .That section is like  an "aside" -it is related to the main content but its not the main focus </li>
      <li>so, HTML &li;aside&gt; tag is used to create these kinds of side section you put whatever extra content you want inside the &lt;aside&gt; tag. and it will appear separetely from the main content of the web page</li>
     </ul>
     <hr></hr>
     <ul>
      <h2>Main Tag</h2>
      <li>The &lt;main&gt; element respresents the main content of the body of a document or application</li>
      <li>The Tag in HTML respresents the centeral topics or core of the document body . It is semantic and structual element introduced in HTML5</li>
      <li>The element also useful for the screen readers to skip the navigationa and other irrelevent content and jump directly to the core content of the document</li>
      <li><b>The document should only contain a single &lt;main&gt; element</b></li>
     </ul>
     <hr></hr>
     <ul>
      <h2>Navigation tag</h2>
      <li>The HTML &lt;nav&gt; tag is a semantic element introduced in HTML5 , specifically defined a section of a webpage that contains navigation links to other pages or to different parts of the same page</li>
      <li>Links within the &lt;nav&gt; tag can be structured within an unordered list &lt;ul&gt; or as standalone links. This tag enhances website accessibility by aiding screen reading software in identifying primary navigation areas.</li>
     </ul>
     <hr></hr>
     <ul>
      <h2>Section Tag </h2>
      <li>The &lt;section&gt; element is used to group together related element .</li>
      <li>Each &li;section&gt; typically inculds one or more heading elements and additional element presenting related content</li>
     </ul>
     <hr></hr>
     <ul>
      <h2>Details Tag</h2>
      <li>The &lt;details&gt; tag specifics additional details that the user can open and close on demand </li>
      <li>The &lt;details&gt; tag is often used to create an interactive that the user can open and close .By default ,the widget is closed .when open ,it expends and displays the content within</li>
      <li><b>&lt;summary&gt; tag is used in conjuction with &lt;details&gt; to specify a visible heading for the details </b></li>
     </ul>
 <hr></hr>
 <ul>
   <h2>Subscript and Superscript </h2>
   <li>The Subscript and Subscript are formating styles applied to text that make it appear smaller and positioanl lower <b>Subscript</b> or higher <b>Superscript</b></li>
   <li>They are commonly used for mathamatical equations ,chemical formulas and other type of content</li>
   <li>Example : 2<sub>4</sub> <br></br> 2<sup>4</sup></li>
 </ul>
 <hr></hr>
 <ul>
   <h2>Form Tag</h2>
   <li>The &li;form&gt; tag in HTML  is used to create an HTML form for user input.Input element such as text fields ,checkbox, radio buttons , submit button etc ,enabling the collection of data for submission to a server or processing via client-side scripts.</li>
   <li><b>input tag: The input tag is the place where a user can enter data .</b>
   <br></br>
   The input tag is used within <b>&lt;form&gt;</b> element to decalre the input controls that allow users to input data
   <br></br>The default value accepted by the &lt;input&gt; tag is text <br></br></li>
   <li>
   <b>label Tag: </b> <br></br>
   The &lt;label&gt; tag is used to respresent a caption for on items in user interface.This attribute specifies which form element the label is bound to . It should match the id attribute of the form control it is labeling.
   </li>
 </ul>
 <hr></hr>
 <ul>
   <h2>progress Tag</h2>
   <li>&lt;progress&gt; tag is used to respresent the progress of a Task.</li>
   <li>It is similar to an indicator that displays the progress of completing a task . It is not used to respresent the disk space or relevent query</li>
 </ul>
 <hr></hr>
 <ul>
   <h2>Tabel Tag</h2>
   <li>An HTML Table is an arrangement of data in rows and columns in tabular format. Tables are useful for various tasks, such as presenting text information and numerical data. A table is a useful tool for quickly and easily finding connections between different types of data. Tables are also used to create databases.</li>
   <li>&lt;<b>table</b>&gt; : Defines the structure for  organizing data in rows ansd columns within a  webpage</li>
   <li>&lt;<b>tr</b>&gt; : Represents the Row within an table ,containing individual cells </li>
   <li>&lt;<b>th</b>&gt; :shows a table header cell that typically holds title or heading</li>
   <li>&lt;<b>td</b>&gt; :Represents a standard data cell, holding content or data</li>
   <li>&lt;<b>caption</b>&gt; :providing a title or description for the entire table</li>
 </ul>
</div>

    </>)
}
export default HtmlTopics