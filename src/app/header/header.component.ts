import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from '../service/route.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  childmessage: string = "I am passed from Parent to child component"
  title: any;
  userId: any;
  previous: any;
  backUrl: Boolean = false;
  currentUrl: any;
  constructor(private router: Router, private routerService: RouteService) {

    this.userId = localStorage.getItem('userid');
    if (localStorage.getItem('title') == "" || localStorage.getItem('title') == null || localStorage.getItem('title') == undefined) {
      this.title = '';
    } else {
      this.title = localStorage.getItem('title');
    }


  }

  ngOnInit() {
    this.loadIndustries();

    this.currentUrl = this.routerService.getCurrentUrl();
    if ((this.currentUrl == '/productionusecase') || (this.currentUrl == '/telematicsusecase') || (this.currentUrl == '/supplyusercase')
      || (this.currentUrl == '/fleetmatic') || (this.currentUrl == '/reportusecase') || (this.currentUrl == '/humancapital')
      || (this.currentUrl == '/healthusecase') || (this.currentUrl == '/hrms-usecase-2') || (this.currentUrl == '/healthcare-analytics')
      || (this.currentUrl == '/inventory') || (this.currentUrl == '/inventormap') || (this.currentUrl == '/stocktracking') || (this.currentUrl == '/vendor-home')) {
      this.backUrl = true;
    }
  }

  previousUrl() {
     const referrer = this.routerService.getPreviousUrl();
     this.previous= this.router.navigate(['/industries']);
  }

  loadIndustries() {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }

  logOut() {
    this.router.navigate(['/login']);
    localStorage.removeItem('title');
    localStorage.removeItem('userid');
    sessionStorage.removeItem('usecase');
    sessionStorage.removeItem('reportusecase');
  }

  showDashBoard() {   
    this.router.navigate(["/industries" + "/home"]);
    localStorage.removeItem('title');
    sessionStorage.removeItem('usecase');
    sessionStorage.removeItem('reportusecase');
    
    
  }

  showSideMenu() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  sidenavChange(count) {
    console.log(count);
}

}
