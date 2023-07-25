import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/interfaces/Moment';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss']
})
export class NewMomentComponent {
  btnText = 'Compartilhar';

  constructor(
    private momentsService: MomentService,
    private messageService: MessagesService,
    private router: Router) {}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    
    if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentsService.createMoment(formData).subscribe();

    // exibir mensagem
    this.messageService.add('Momento adicionado com sucesso');

    // redirect
    this.router.navigate(['/']);
  }
}
