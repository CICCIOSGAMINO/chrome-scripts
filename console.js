// Simple use of the Chrome API related to Console use 

console.clear(); 

console.debug(' %s & %s', 'console.debug()' , 'console.log()');
console.info('info pattern ');
console.error('error pattern');

// print the tree of document.body with console.dir(obj)
console.dir({name:'Rose', age : 23});

// print a xml rapresentation of dir tree 
console.dirxml({film:'Kindom of the Cristall Skull', actor : 'Harrison Ford'});
