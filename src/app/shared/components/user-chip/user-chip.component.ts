import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-chip',
  templateUrl: './user-chip.component.html',
  styleUrls: ['./user-chip.component.scss']
})
export class UserChipComponent implements OnInit {

  @Input() userId: number;
  user: User;

  constructor(private auth: AuthService, ) { }

  ngOnInit() {
    console.log(this.userId);
    
    this.auth.getUserById(this.userId).subscribe((user) => this.user = user);
  }

}
