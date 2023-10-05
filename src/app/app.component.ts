import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  isLoadingComplete: boolean = false;
  showContent: boolean = false;
  showLoader: boolean = true;

  ngOnInit() {
    // Hide the loader after 5 seconds
    setTimeout(() => {
      this.isLoadingComplete = true; // Mark loading as complete
      this.checkButtonClick(); // Check if the button was clicked
    }, 1500); // 5000 milliseconds = 5 seconds
  }

  // Function to handle button click
  onButtonClick() {
    this.showLoader = false; // Hide the loader
    this.showContent = true; // Show the content
  }

  // Function to check if the button was clicked, and if not, show content after 10 seconds
  checkButtonClick() {
    if (!this.showContent) {
      setTimeout(() => {
        this.showLoader = false; // Hide the loader
        this.showContent = true; // Show the content
      }, 10000); // 10000 milliseconds = 10 seconds
    }
  }
}