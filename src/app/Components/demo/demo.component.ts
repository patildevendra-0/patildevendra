import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/scroll.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent  implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Get the button
    let mybutton = document.getElementById('btn-back-to-top');

    // Check if the button element exists
    if (mybutton) {
      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          if (mybutton) {
            mybutton.style.display = 'block';
          }
        } else {
          if (mybutton) {
            mybutton.style.display = 'none';
          }
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      mybutton.addEventListener('click', backToTop);

      function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
  }
}