import { Component } from "@angular/core";

@Component ({
    selector:'app-hello-world',
    templateUrl:'./hello-world.component.html',
    styleUrls:['./hello-world.component.css']
})

export class HelloWorldComponent{
    first_name='MANOJ KIYAN';
    last_name='M'
    gettitle(){
        return this.last_name
    }
    getMax(first:number,second:number){
        return Math.max(first,second)
    }
    clickcount=0;
    clickme(){
        this.clickcount++;

    }
    value=''
    value1=''
    handleinput(event:any){
        this.value=(event.target as HTMLInputElement).value;
    }
    cinema='LIST OF MOVIES'

    movies=[
        {title:'LEO',dir:'LOKESH KANAGARAJ',releaseyear:'2023'},
        {title:'JAILER',dir:'NELSON',releaseyear:'2023'},
        {title:'DOCTOR',dir:'NELSON',releaseyear:'2022'},
        {title:'12th-FAIL',dir:'vidhu vinod chopra',releaseyear:'2024'}
    ]
    num = 0;
    showme=false;
    enablecolor=false;
    enablebig=false;
    enableitalics=false;
    status='error';
    color='';
    // PIPES:
    chdate=new Date();
    messageU='pipes in uppercase';
    messageL='PIPES IN LOWERCASE';
    price=2316;
    // SHARING DATA BETWEEN COMPONENTS :
    
}

    