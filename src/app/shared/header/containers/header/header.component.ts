import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { User } from '../../models/user'
import { Email } from '../../models/email'
import { AuthService } from '../../services/auth.service'
import { EmailService } from '../../services/email.service'
import { routes } from 'src/app/shared/routes/routes'
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isMenuOpened: boolean = false
  @Output() isShowSidebar = new EventEmitter<boolean>()
  public user$: Observable<User>
  public emails$: Observable<Email[]>
  public routers: typeof routes = routes
  showIconTitleResponsive: boolean = false

  constructor(
    private router: Router,
    private userService: AuthService,
    private emailService: EmailService,
    public breakpointObserver: BreakpointObserver
  ) {
    this.user$ = this.userService.getUser()
    this.emails$ = this.emailService.loadEmails()
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened
    this.isShowSidebar.emit(this.isMenuOpened)
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 453px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showIconTitleResponsive = true
        } else {
          this.showIconTitleResponsive = false
        }
      })
  }

  // public signOut(): void {
  //   this.router.navigate([this.routers.LOGIN])
  // }
}
