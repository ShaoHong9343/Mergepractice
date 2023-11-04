let HW3_myGraph=document.getElementById('HW3_myGraph');
let HW3_myGraph2=document.getElementById('HW3_myGraph2');
let HW3_myGraph3=document.getElementById('HW3_myGraph3');
let HW3_myGraph4=document.getElementById('HW3_myGraph4');
let HW3_myGraph5=document.getElementById('HW3_myGraph5');
let HW3_trace1={};
HW3_trace1.type="pie";
HW3_trace1.title="人數統計";
HW3_trace1.titlefont={
    size:50
};
HW3_trace1.hole=0.5;
HW3_trace1.labels=[];
HW3_trace1.values=[];
HW3_trace1.domain={
    row:0,
    column:0
};

for (let x=0;x<people107.length;x++){
    HW3_trace1.labels[x]=people107[x]['name'];
    HW3_trace1.values[x]=people107[x]['count'];
}

let HW3_trace2={};
HW3_trace2.type="pie";
HW3_trace2.title="給付現金統計";
HW3_trace2.titlefont={
    size:50
};
HW3_trace2.hole=0.5;
HW3_trace2.labels=[];
HW3_trace2.values=[];
HW3_trace2.domain={
    row:1,
    column:1
};

for (let x=0;x<cash107.length;x++){
    HW3_trace2.labels[x]=cash107[x]['name'];
    HW3_trace2.values[x]=cash107[x]['count'];
}

let HW3_trace3={};
HW3_trace3.type="pie";
HW3_trace3.title="人數統計";
HW3_trace3.titlefont={
    size:50
};
HW3_trace3.hole=0.5;
HW3_trace3.labels=[];
HW3_trace3.values=[];
HW3_trace3.domain={
    row:0,
    column:0
};

for (let x=0;x<people108.length;x++){
    HW3_trace3.labels[x]=people108[x]['name'];
    HW3_trace3.values[x]=people108[x]['count'];
}

let HW3_trace4={};
HW3_trace4.type="pie";
HW3_trace4.title="現金給付統計";
HW3_trace4.titlefont={
    size:50
};
HW3_trace4.hole=0.5;
HW3_trace4.labels=[];
HW3_trace4.values=[];
HW3_trace4.domain={
    row:1,
    column:1
};

for (let x=0;x<cash108.length;x++){
    HW3_trace4.labels[x]=cash108[x]['name'];
    HW3_trace4.values[x]=cash108[x]['count'];
}

let HW3_trace5={};
HW3_trace5.type="pie";
HW3_trace5.title="人數統計";
HW3_trace5.titlefont={
    size:50
};
HW3_trace5.hole=0.5;
HW3_trace5.labels=[];
HW3_trace5.values=[];
HW3_trace5.domain={
    row:0,
    column:0
};

for (let x=0;x<people109.length;x++){
    HW3_trace5.labels[x]=people109[x]['name'];
    HW3_trace5.values[x]=people109[x]['count'];
}

let HW3_trace6={};
HW3_trace6.type="pie";
HW3_trace6.title="現金給付統計";
HW3_trace6.titlefont={
    size:50
};
HW3_trace6.hole=0.5;
HW3_trace6.labels=[];
HW3_trace6.values=[];
HW3_trace6.domain={
    row:1,
    column:1
};

for (let x=0;x<cash109.length;x++){
    HW3_trace6.labels[x]=cash109[x]['name'];
    HW3_trace6.values[x]=cash109[x]['count'];
}

let HW3_trace7={};
HW3_trace7.type="pie";
HW3_trace7.title="人數統計";
HW3_trace7.titlefont={
    size:50
};
HW3_trace7.hole=0.5;
HW3_trace7.labels=[];
HW3_trace7.values=[];
HW3_trace7.domain={
    row:0,
    column:0
};

for (let x=0;x<people110.length;x++){
    HW3_trace7.labels[x]=people110[x]['name'];
    HW3_trace7.values[x]=people110[x]['count'];
}

let HW3_trace8={};
HW3_trace8.type="pie";
HW3_trace8.title="現金給付統計";
HW3_trace8.titlefont={
    size:50
};
HW3_trace8.hole=0.5;
HW3_trace8.labels=[];
HW3_trace8.values=[];
HW3_trace8.domain={
    row:1,
    column:1
};

for (let x=0;x<cash110.length;x++){
    HW3_trace8.labels[x]=cash110[x]['name'];
    HW3_trace8.values[x]=cash110[x]['count'];
}

let HW3_trace9={};
HW3_trace9.type="pie";
HW3_trace9.title="人數統計";
HW3_trace9.titlefont={
    size:50
};
HW3_trace9.hole=0.5;
HW3_trace9.labels=[];
HW3_trace9.values=[];
HW3_trace9.domain={
    row:0,
    column:0
};

for (let x=0;x<people111.length;x++){
    HW3_trace9.labels[x]=people111[x]['name'];
    HW3_trace9.values[x]=people111[x]['count'];
}

let HW3_trace10={};
HW3_trace10.type="pie";
HW3_trace10.title="現金給付統計";
HW3_trace10.titlefont={
    size:50
};
HW3_trace10.hole=0.5;
HW3_trace10.labels=[];
HW3_trace10.values=[];
HW3_trace10.domain={
    row:1,
    column:1
};

for (let x=0;x<cash111.length;x++){
    HW3_trace10.labels[x]=cash111[x]['name'];
    HW3_trace10.values[x]=cash111[x]['count'];
}


let HW3_data=[];
HW3_data.push(HW3_trace1);
HW3_data.push(HW3_trace2);

let HW3_data2=[];
HW3_data2.push(HW3_trace3);
HW3_data2.push(HW3_trace4);

let HW3_data3=[];
HW3_data3.push(HW3_trace5);
HW3_data3.push(HW3_trace6);

let HW3_data4=[];
HW3_data4.push(HW3_trace7);
HW3_data4.push(HW3_trace8);

let HW3_data5=[];
HW3_data5.push(HW3_trace9);
HW3_data5.push(HW3_trace10);


let HW3_layout={
    margin:{
        t:30,
        l:0,
    },
    grid:{
        rows:2,
        columns:2
    },
    title:"107年公教人員保險現金給付統計"
};
let HW3_layout2={
    margin:{
        t:30,
        l:0,
    },
    grid:{
        rows:2,
        columns:2
    },
    title:"108年公教人員保險現金給付統計"
};
let HW3_layout3={
    margin:{
        t:30,
        l:0,
    },
    grid:{
        rows:2,
        columns:2
    },
    title:"109年公教人員保險現金給付統計"
};
let HW3_layout4={
    margin:{
        t:30,
        l:0,
    },
    grid:{
        rows:2,
        columns:2
    },
    title:"110年公教人員保險現金給付統計"
};
let HW3_layout5={
    margin:{
        t:30,
        l:0,
    },
    grid:{
        rows:2,
        columns:2
    },
    title:"111年公教人員保險現金給付統計"
};
Plotly.newPlot(HW3_myGraph,HW3_data,HW3_layout);
Plotly.newPlot(HW3_myGraph2,HW3_data2,HW3_layout2);
Plotly.newPlot(HW3_myGraph3,HW3_data3,HW3_layout3);
Plotly.newPlot(HW3_myGraph4,HW3_data4,HW3_layout4);
Plotly.newPlot(HW3_myGraph5,HW3_data5,HW3_layout5);
