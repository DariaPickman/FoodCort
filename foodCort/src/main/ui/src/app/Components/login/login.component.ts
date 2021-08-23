import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {User} from "../../Classes/user";
import {AuthService} from "../../Services/Auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  @Output() close = new EventEmitter();
  loginCard = true;
  @ViewChild("pswTarget") pswTarget: ElementRef;
  @ViewChild("pswInput") pswInput: ElementRef;
  @ViewChild("loginMessage") loginMessage: ElementRef;
  defaultMessage = "Login to your account";
  logMessage;
  log: string;
  psw: string;

  ngOnInit(): void {
    this.logMessage = this.defaultMessage;
  }

  constructor(private authService: AuthService) {
  }

  toggleView() {
    let input = this.pswInput.nativeElement;
    let target = this.pswTarget.nativeElement;
    if (input.type == 'password') {
      target.classList.add('visible');
      input.setAttribute('type', 'text');
    } else {
      target.classList.remove('visible');
      input.setAttribute('type', 'password');
    }
  }

  submit() {
    console.log(this.logMessage)
    let newUser = new User(this.log, this.psw)
    this.authService.postAuth(this.log, this.psw)
      .subscribe((res: any) => {
        res == "Authentication successful!" ?
          this.loginMessage.nativeElement.textContent = "welcome to your account, " + newUser.log
          :
          this.loginMessage.nativeElement.textContent = "access denied"
        console.log(res)
        this.loginCard=false;
      })

  }

  closeLogin() {
    this.close.emit();
  }

  register() {

  }
}



