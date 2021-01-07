import { FormGroup } from '@angular/forms';

export function TaskDateValidator(start: string, end: string) {
  return (formGroup: FormGroup) => {
    const startDate = formGroup.controls[start];
    const endDate = formGroup.controls[end];

    const startTimeStamp = new Date(startDate.value);
    const endTimeStamp = new Date(endDate.value);

    if (startTimeStamp > endTimeStamp) {
      startDate.setErrors({ dateValidator: true });
      endDate.setErrors({ dateValidator: true });
    } else {
      startDate.setErrors(null);
      endDate.setErrors(null);
    }
  };
}
