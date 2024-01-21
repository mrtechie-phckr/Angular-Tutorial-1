import { Component,Input,OnChanges,SimpleChanges,OnInit,DoCheck,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent implements OnChanges,OnInit,DoCheck,OnDestroy{
  @Input() text:string[]=[];
  noOfTitles=0;
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['text'].isFirstChange()){
      console.log('YOU ARE MODIFIED THE ORGINAL STATE')
      console.log('ngOnChanges called',changes['text'])
    }
  }
  ngOnInit(): void {
    console.log('ngOnInit called');
    this.text.push('MANOJ KIYAN 2316');
    this.noOfTitles=1
    
  }
  ngDoCheck():void{
    console.log('ngDoCheck called');
    if(this.text.length>this.noOfTitles){
      console.log("MODIFIED");
      this.noOfTitles++
    }
  }
  ngOnDestroy(): void {
    
  console.log("ngOnDestroy")
  }

}

