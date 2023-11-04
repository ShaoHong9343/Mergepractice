let HW2_myGraph=document.getElementById('HW2_myGraph');
let HW2_trace1={};
HW2_trace1.type="bar";
HW2_trace1.name="男性";
HW2_trace1.x=[];
HW2_trace1.y=[];

for (let i=0;i<boy.length;i++){
    HW2_trace1.x[i]=boy[i]['name'];
    HW2_trace1.y[i]=boy[i]['count'];
}

let HW2_trace2={};
HW2_trace2.type="bar";
HW2_trace2.name="女性";
HW2_trace2.x=[];
HW2_trace2.y=[];

for (let i=0;i<girl.length;i++){
    HW2_trace2.x[i]=girl[i]['name'];
    HW2_trace2.y[i]=girl[i]['count'];
}


let HW2_data=[];
HW2_data.push(HW2_trace1);
HW2_data.push(HW2_trace2);


let HW2_layout={
    title:'111年新北市板橋區嬰兒出生數與其性別及生母年齡',
    margin:{
        t:30
    },
    xaxis:{
        title:"生母年齡區間"
    },
    yaxis:{
        title:"出生數"
    },
    barmode:'stack'
};

Plotly.newPlot(HW2_myGraph,HW2_data,HW2_layout);