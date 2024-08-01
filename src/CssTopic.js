function CssTopic(){
    return(<>
  <div style={{textAlign:'left' }}>
    <h2>CSS Introduction</h2>
    <ul>
        <li>CSS stands for <b> Cascading style sheet</b>.</li>
        <li>CSS describes how HTML element are to be displayed an screen , paper or other media</li>
        <li>CSS saves a lot of works , it can control the layout of multiple webpages all at onces</li>
        <li>There are Three ways to inculds CSS in HTML document
            <br></br>
           1. Inline<br></br>
           2.Internal<br></br>
           3.External
        </li>
    </ul>
    <hr></hr>
    <ul>
      <h2>Inline CSS</h2>
      <li>Inline css is applied directly to an HTML element using the <b>style</b> attribute </li>
      <li>Inline useful for applying unique style to individual element. It is generally not recommend for large-scale styleing , because it makes HTML code less maintainable and harder to read</li>
      <li>Example : &lt;p style="color:red' font-size:2px;" &gt;paragraph&lt;/p&gt;</li>
    </ul>
    <hr></hr>
    
    <ul>
      <h2>Internal CSS</h2>
      <li>Internal css is inculded within the HTML document uisng the &lt;style&gt; tag in the &lt;head&gt; section</li>
      <li>Internal css is useful when you want to apply styles to multiple element within a single HTML document</li>
      <li>Example: &lt;head&gt;<br></br>
              &lt;style&gt;<br></br>
              p&#123;<br></br>
              color:red;<br></br>
              font-size:2px;<br></br>
              &#125;<br></br>
              Here all &lt;p&gt; tag content have same style.

      </li>
    </ul>
    
    <hr></hr>
    <ul>
      <h2>External CSS</h2>
      <li>External css is stored in a separete css file and then linked to the HTML document, using the &lt;<b>link</b>&gt; tag in the &lt;head&gt; section</li>
      <li>Syntax:<br></br>
      &lt;head&gt;<br></br>
      &lt;link rel="stylesheet" type="text/css" href="style.css"&gt; <br></br>
      &lt;/head&gt;<br></br>
      </li>
      <li>External css is the prefered method for  styleing HTML document because it allows you to keep your style separete from your HTML content ,both easier to maintain</li>
    </ul>
    <hr></hr>
    <ul>
      <h2>Class in CSS</h2>
      <li>classes are used to apply style to multiple HTML elements </li>
      <li>You can apply the same class to the multiple elements</li>
      <li>To define a class in css, you start the selector with a period (.)  followed by the class name.</li>
      <li>To apply the class to an  HTML element you can use the <b>class</b> attribute </li>
      <li>You can apply  multiple calsses to a single element </li>
      <li>Example:
        &lt;p class="red-text"&gt;paragraph&lt;/p&gt;
      </li>
    </ul>
    <hr></hr>
    <ul>
      <h2>ID</h2>
      <li>Id's are used to apply style to a single HTML element.</li>
      <li>Each Id must be unique with the HTML document.</li>
      <li>To define an id in css ,you started the selector with a hash (#) followed by the id name </li>
      <li>Example:
        &lt;p id="red-text"&gt;paragraph&lt;/p&gt;
      </li>
    </ul>
    <hr></hr>
    <ul>
      <h2>Box Model in CSS</h2>
      <li>The Box model in css is a container that contain various properties , and including broders, margins, padding, and the content itself</li>
      <li>The property collectively determine the dimension and spacing of an element</li>
      <img src="../box_model.jpg"  className="image"></img>
      <li>When setting the width and the height properties for an element ,we're mainly adjusting the content area.However to calucale the full area of the element,we need ti consider padding ,borders and maragins</li>
      <li><b>content:</b> The actual data in text,image or other main forms can be sized using the width and height property</li>
      <li><b>padding:</b> Padding is the space between the content of an element and its border. it can be set using padding property</li>
      <li><b>Border:</b> The Border is used to cover the content and any padding  and also allows setting style, color and width of the border</li>
      <li><b>Margin:</b> The transparent area outside the border .it separete the element from other element</li>
    </ul>
    <hr></hr>
    <ul>
      <h2>Diplay properties</h2>
      <li>The display properties in css defiens how the components are going to be placed on the webpage</li>
      <li>As the name suggest this properties is used define the diplay of the differnt parts of a webpage</li>
      <li>The diplay properties in css is a fundamental concept for containing the layout of webpage. It indicates how on HTMl element is displayed and how it interacts with other element on the page</li>
    </ul>
    <hr></hr>
    <ul>
      <h2>Grid</h2>
      <li>Grid layout is a powerful tool for creating flexible and responsive webpage layout</li>
      <li>It works by dividing a container element into a grid of rows and coloums, allowing you to precisely position child element with that grid.</li>
      <li>To start using CSS Grid, you first need to define a container element as a grid container by setting its <b>display</b> property to grid.</li>
      <li>You can define the number of columns and rows using the 'grid-template-columns' and 'grid-template-rows' properties.</li>
      <li>Grid items will automatically be placed into the grid cells created by the contains grid layout. You can control the placement of items using properties like 'grid-column' and 'grid-row'.</li>
    </ul>
    <hr></hr>
    <ul>
      <h2>position property</h2>
      <li>The position property in CSS is used to control the positioning of an element within its containing block. It offers several values, each affecting the element's placement and behavior differently.</li>
      <li><b>Relative:</b>Element is positioned relative to its normal position in the document flow.
      Allows the use of top, right, bottom, and left properties to offset the element from where it would normally be.</li>
      <li><b>Absolute</b>:Element is positioned relative to the nearest positioned ancestor (relative, absolute, or fixed), or if none, the initial containing block (usually the viewport).
      The top, right, bottom, and left properties are used to specify the exact position</li>
      <li><b>fixed:</b>Element is positioned relative to the viewport (browser window) and remains fixed in that position when the page is scrolled.
      The top, right, bottom, and left properties determine its position.</li>
      <li><b>Sticky:</b>Element is positioned based on the user's scroll position. It toggles between relative and fixed positioning depending on the scroll position.
      Works with top, right, bottom, and left properties to define the point at which the element "sticks" within the viewport.</li>
      
    </ul>
    <hr></hr>
    <ul>
      <h2>Responsive webpage</h2>
      <li>Responsive webpage is a type of webpage that is designed to adopt its layout and content to different scren sizes and devices</li>
      <li>Responsive webpage design used technique such as flexiable grids, layouts and css media queries to achieve this adaptablity.</li>
    </ul>
    <hr></hr>
    <ul>
      <h2>Media Queries</h2>
      <li>Media queries is a powerful tool that allows developers to create responsive wep design</li>
      <li>Media queries are a feature of css that apply sepcific styles based on the characteristics of the users device or viewpoint</li>
      <li>Media queries can also be used directly within the HTML &lt;style&gt; tag or in the &lt;link&gt; tag to load different stylesheets based on conditions.</li>
      <li> By using media queries, you can ensure that your website provides an optimal viewing experience across a wide range of devices.</li>
    </ul>
    <hr></hr>
    <ul>
      <h2>Bootstrap</h2>
      <li>Bootstrap is a popular open-source front-end framework used for developing responsive and mobile-first websites. It includes a collection of CSS and JavaScript components that help developers quickly build and design web applications with a consistent look and feel. Bootstrap was originally developed by Twitter and is now maintained by a large community of developers.</li>
      <li><b>Responsive Design:</b>Bootstrap is designed to be responsive, meaning it adapts the layout of web pages to fit different screen sizes and resolutions. This is achieved through a grid system and responsive utilities.</li>
      <li><b>Grid System:</b>Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. The grid system is flexible and allows for up to 12 columns across the page.</li>
      <li><b>Pre-styled Components:</b>Bootstrap provides a wide range of pre-styled components like navigation bars, buttons, forms, cards, modals, alerts, and more. These components help in rapid development and ensure consistency.</li>
      <li>To start using Bootstrap, you can either include the Bootstrap CSS and JavaScript files from a CDN or download them and include them locally in your project.</li>
      <li>Bootstrap is a powerful and versatile framework for building responsive, mobile-first web applications quickly and efficiently. By using its pre-designed components and responsive grid system, developers can save time and ensure consistency across different devices and browsers.</li>
    </ul>
  </div>
    </>)
}
export default CssTopic