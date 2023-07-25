import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moments-form',
  templateUrl: './moments-form.component.html',
  styleUrls: ['./moments-form.component.scss']
})
export class MomentsFormComponent {
  @Input() btnText!: string

}
