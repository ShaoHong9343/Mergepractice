let HW1_myGraph=document.getElementById('HW1_myGraph')

let trace1={};
trace1.mode="markers+lines";
trace1.type="scatter";
trace1.name="市立大學";
trace1.visible=true;
trace1.marker={
    size:10
};
trace1.line={
    'color':'blue'
};
trace1.x=[];
trace1.y=[];


for(let i=0;i<university.length;i++){
    trace1.x[i]=university[i][0];
    trace1.y[i]=university[i][1];
}


let trace2={};
trace2.mode="markers+text+lines";
trace2.type="scatter";
trace2.name="高級中等學校";
trace2.visible=false;
trace2.marker={
    size:10
};
trace2.line={
    'color':'orange'
};
trace2.x=[];
trace2.y=[];
trace2.text=[];

for(let i=0;i<senior_high.length;i++){
    trace2.x[i]=senior_high[i][0];
    trace2.y[i]=senior_high[i][1];
}

let trace3={};
trace3.mode="markers+text+lines";
trace3.type="scatter";
trace3.name="國民中等學校";
trace3.visible=false;
trace3.marker={
    size:10
};
trace3.line={
    'color':'green'
};
trace3.x=[];
trace3.y=[];

for(let i=0;i<junior_high.length;i++){
    trace3.x[i]=junior_high[i][0];
    trace3.y[i]=junior_high[i][1];
}

let trace4={};
trace4.mode="markers+text+lines";
trace4.type="scatter";
trace4.name="國民小學";
trace4.visible=false;
trace4.marker={
    size:10
};
trace4.line={
    'color':'red'
};
trace4.x=[];
trace4.y=[];
trace4.text=[];

for(let i=0;i<elementary.length;i++){
    trace4.x[i]=elementary[i][0];
    trace4.y[i]=elementary[i][1];
}

let trace5={};
trace5.mode="markers+text+lines";
trace5.type="scatter";
trace5.name="幼兒園";
trace5.visible=false;
trace5.marker={
    size:10
};
trace5.line={
    'color':'purple'
};
trace5.x=[];
trace5.y=[];

for(let i=0;i<kindergarten.length;i++){
    trace5.x[i]=kindergarten[i][0];
    trace5.y[i]=kindergarten[i][1];
}

let data=[];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);
data.push(trace5);

let layout={
    margin:{
        t:120
    },
    xaxis:{
        title:"年度(民國)"
    },
    yaxis:{
        range:[10,30],
        title:"平均分擔經費(萬元)"
    },
    title:"台北市立各級學校每年度每生平均分攤經費",
    updatemenus:[
        {
            y:1.2,
            x:0.3,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true,false,false,false,false]],
                    label:'市立大學'
                },
                {
                    method:'restyle',
                    args:['visible',[false,true,false,false,false]],
                    label:'高級中等學校'
                },
                {
                    method:'restyle',
                    args:['visible',[false,false,true,false,false]],
                    label:'國民中等學校'
                },
                {
                    method:'restyle',
                    args:['visible',[false,false,false,true,false]],
                    label:'國民小學'
                },
                {
                    method:'restyle',
                    args:['visible',[false,false,false,false,true]],
                    label:'幼兒園'
                },
                {
                    method:'restyle',
                    args:['visible',[true,true,true,true,true]],
                    label:'顯示全部'
                }
            ]
        }
    ]   
};
Plotly.newPlot(HW1_myGraph,data,layout);
