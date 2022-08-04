var description = 'global';

const whatsThis = () => {
   console.log(this.description);
}

let myObj = {
   description: 'myObj',
   action: whatsThis
};

whatsThis();
myObj.action();
whatsThis.call(myObj);
whatsThis.apply(myObj);

let newFunc = whatsThis.bind(myObj);
newFunc();
