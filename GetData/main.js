// get csv file
d3.csv('data/harry_potter.csv').then(
    res =>{
        console.log('Local CSV:',res)
    }
);