import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})

export class searchpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if(!value) {
        return null;
      }
      if(!args) {
        return value;
      }
      

      args = args.toLowerCase();

      return value.filter(function(data: any){
        return data.name.toLowerCase().includes(args)
      });
  }

}

