# GrouplyHTML
JavaScript, HTML, CSS files to add custom groups tabs to your website!

<h1><b>DOCS</b></h1>
Hello, is short documentation for use GrouplyHTML.
<h2>1. Installation</h2>
Click on green button "Code" and click on "Download ZIP" in menu. Wait while archive downloading, after unzip this archive to your project (JavaScript file to your js folder, CSS file to your css folder, HTML blank just copy by parts and edit).
<h2>2. HTML settings</h2>
<ul>
  <li>You can remove "full" from class fragment for margins</li>
  <li>You have tabs list in panel class. You can add new tab and remove this.</li>
  <li>Tabs element has once class active. Its starter tab!</li>
  <li>Dont touch id in tabs elements!</li>
  <li>You have frames list in frame class. You can add new frame and remove this.</li>
  <li>Rename frames id to uniquely id!</li>
  <li>You can link tabs to frames by "frame_name" attribute, just write frames id!</li>
</ul>
<h2>3. JavaScript Settings</h2>
<ul>
  <li>You have init function! And this function is running in the file end!</li>
  <li>You can add function as argument in init function.</li>
  <li>First argument function running when user clicked on tab.</li>
  <li>First argument running with 4 arguments: el, index, attr, before</li>
  <li>- El is tabs element</li>
  <li>- Index is tabs index</li>
  <li>- Attr is tabs element attribute "frame_name"</li>
  <li>- Before is previous tabs element</li>
</ul>
