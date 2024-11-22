const myObject = {
    js: 'java script',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
        console.log(`${key} shortcut is for ${myObject[key]}`);    
    }

const programming = ['js']