import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CytoscapeComponent from 'react-cytoscapejs';
import { Octokit } from "@octokit/core";


const octokit = new Octokit({
  auth: "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",
});

class MyApp extends React.Component {
  constructor(props){
    super(props);
    this.state ={elements : [{ data: { id: 'root', label: 'SANIANJUM' }, position: { x: 50, y: 150 } }]} 
  }

  componentDidMount(){
    let a=50, b=150;
    let max= 500, min= 100;
    // let elements= [
    //   { data: { id: 'root', label: 'SANIANJUM' }, position: { x: a, y: b } },
    // ];
    let username = "SANIANJUM";
    //elements.push({ data: { id: 'two', label: 'Node 2' }, position: { x: 150, y: 100 } },)
    //elements.push({ data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },);
      
        octokit.request("GET /user/repos").then((repositoriesResponse) =>{
          if (repositoriesResponse){
            for (
              let repositoryIndex = 0;
              repositoryIndex < repositoriesResponse.data.length;
              repositoryIndex++
            ){
              // a= a+50;
              // b= b+50;
              // a = Math.random() * (max - min) + min;
              // b= Math.random() * (max - min) + min;
              console.log(a,b);
              let c= a+50 , d= b+50;
              const repository = repositoriesResponse.data[repositoryIndex];
              this.setState(prevState => ({
                elements: [...prevState.elements, { data: { id:repository.id, label:repository.name}, position: { x: c, y: d} }]
            }));
              // this.setState({
              //   elements: [...this.state.elements, { data: { id:repository.id, label:repository.name}, position: { x: a, y: b } }]
              // })
            //elements.push({ data: { id:repository.id, label:repository.name}, position: { x: a, y: b } })
            this.setState(prevState => ({
              elements: [...prevState.elements,{data:{ source: 'root', target : repository.id}}]
          }));
            // this.setState({
            //   elements: [...this.state.elements, {data:{ source: 'root', target : repository.id}}]
            // })
            //elements.push({data:{ source: 'root', target : repository.id}},);
            }
          }
          console.log(this.state.elements);
        })
        
  }
  render(){


    




    // const elements = [
    //    { data: { id: 'root', label: 'SANIANJUM' }, position: { x: 50, y: 150 } },
    //    { data: { id: '515158930', label: 'Public' }, position: { x: 100, y: 200 } },
    //    { data: { id: '516335022', label: 'Tic-tac' }, position: { x: 150, y: 250 } },
    //    { data: { source: 'root', target: '515158930', label: 'Edge from Node1 to Node2' } },
    //    { data: { source: 'root', target: '516335022', label: 'Edge from Node1 to Node3' } },
      
      
       
    // ];

    // const elements = [
    //    { data: {id: 'root', label: 'SANIANJUM'}, position: {x: 50, y: 150}},
    //    { data:  {id: 515158930, label: 'Public'}, position:{x: 100, y: 200} },
    //    { data: {id: 516335022, label: 'Tic-tac'}, position:  {x: 150, y: 250} },
    //    { data: {source: 'root', target: 515158930, label: 'Edge from Node4 to Node8'}},
    //    { data: {source: 'root', target: 516335022, label: 'Edge from Node4 to Node8'}},
    // ];

    return <CytoscapeComponent elements={this.state.elements} style={ { width: '1000px', height: '1000px' } } />;
  }
}

export default MyApp;
