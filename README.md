# website-dev-template

Very simple template for building websites

## Installation

To install: `cd project/directory` then `npm install`, that's it!

Change all the names etc in `package.json` and `bower.json`

## Usage

To run the build process just run `grunt`, navigate to `http://localhost:3000` which will open up `index.html` from the `dist` folder.

Any bower packages will be concatenated and hooked up to index.html

HTML can be created in the `dist` folder, any SASS, JavaScript or CSS should be placed in the relevant folder in `src`

###Folders and files:
#####src/sass
Create and make changes to `.scss` files. Compiles just like SASS usually would, looks for a file named `main.scss`

#####src/js
Create and make changes to `.js` files

#####src/css
Add `.css` files such as frameworks etc here, do not change styles.css as this will be overwritten by the SASS compiler

#####dist
Files in `js` and `css` should be left alone, these will compile 

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license
