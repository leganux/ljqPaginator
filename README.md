# ljqPaginator
Leganux- jQuery Paginator - A very simply pagination tool for jQuery


Leganux- jQuery Paginator - A very simply pagination tool for jQuery
This is a very simply tool that helps you to paginate content that has been stored in an array in JS or also convert in a easy way a JSON Object using this code 
*This plugin works using jQuery 2.1 ot Later. 
*The responsive function of this plugin was made whit Bootstrap.

Usage
1.- Call the Bootstrap CSS file form your project or from CDN and put it in head space.	
{ CDN Bootstrap } 

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> 
```

2.- Call the jQuery js file form your project or from CDN and put it in body space of your project.	
{ CDN jQuery} 

```
<script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
```

3.- Call the ljqPaginator js file form your project or from CDN and put it in body space of your project after jQuery. 
{ CDN ljqPaginator } 
```
<script src="http://cdn.leganux.com/LIB/ljqPaginator/dist/ljqPaginator.js" ></script>
```
{ CDN ljqPaginator Minified } 
```
	<script src="http://cdn.leganux.com/LIB/ljqPaginator/dist/ljqPaginator.min.js" ></script>
```
4.- Create a empty Array in js	
```
var Elem = []; 
```
5.- Set the content in the array using PUSH function, it could contains html and CSS elements. 
```

			Elem.push ('<h5> NUMBER </h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <b>commodo
      consequat. </b>Duis aute irure dolor in reprehenderit in voluptate velit 
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit <a>anim id est laborum..... </a> <br>');
```
6.- Create the new ljqPaginator object.	
```
<script src="http://cdn.leganux.com/LIB/ljqPaginator/dist/ljqPaginator.js" ></script>
```
7.- Call the function to create the pagination and functions. 
```
Paginate.DrawPaginator();
```
