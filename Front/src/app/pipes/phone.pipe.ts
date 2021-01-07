import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phoneNum: string,): string {
    const secondChar = phoneNum.charAt(1);
    let formatPhone = '';

    formatPhone += (secondChar === '5') || (secondChar === '7')
      ? formatPhone += phoneNum.substr(0, 3)
      : formatPhone += phoneNum.substr(0, 2);

    formatPhone += '-' + phoneNum.substr(3, 3) + '-' + phoneNum.substr(6)
    return formatPhone;
  }
}
