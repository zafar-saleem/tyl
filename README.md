## Requirements
Tyl requires Grunt that needs to be installed and requires, but not must, some basic knowledge of Grunt. 
If you don't know Grunt then please read about it <a href="http://gruntjs.com/">here</a>. Similarly, it also needs some bower knowledge 
as it is used as dependency management tool. Please read about bower <a href="http://bower.io/">here</a>. Install both of these tools 
before continuing.

## Usage

1. Clone this repository.
2. Run npm install command to download and install all Grunt dependencies.
3. Run bower install to download all project dependencies such as jQuery.
4. (Optional) Now run `grunt hookmeup` to add pre-commit hooks for jshint and csslint.
5. Run `grunt` to run the server on port `8000` and make the project production ready.

Once application is completed then run following command to build your application for production.

1. Grunt

The built version will be in new directory called /dist in root directory.
