var catMe = require('cat-me')


let cetnames = [ 'grumpy','approaching','tubby','confused','playful','thoughtful','delighted','nyan','resting']
let cat = () => {
    for(let i = 0; i < 3; i++){
        i
        console.log(catMe(cetnames[Math.random() * (cetnames.length )]))
    }
}
cat()


