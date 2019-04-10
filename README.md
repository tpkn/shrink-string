# Shrink String
Cut the string to bla-bla-bla...



## API
```javascript
String.shrink([len, between])
```

### len
**Type**: _Number_  
**Default**: `32`  
Cut to this length


### between
**Type**: _String_  
**Default**: ``  
This line will be added between the two halves of the text (adds to the length of the final result!)


## Usage
```javascript
'https://github.com'.shrink();
// => https://github.com

'https://developer.mozilla.org/en-US/'.shrink(18, ' .. ');
// => https:/ .. /en-US/
```
