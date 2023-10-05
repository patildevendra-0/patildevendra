import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  @ViewChild('myVideo') myVideo!: ElementRef;
  @ViewChild('videoContainer') videoContainer!: ElementRef;
  
  private videoPlayed = false;

  ngOnInit() {
    this.playVideo(); 
  }
  
  playVideo() {
    if (!this.videoPlayed) {
      const video = this.myVideo.nativeElement as HTMLVideoElement;
      video.play()
        .then(() => {
          // Video autoplayed successfully
          this.videoPlayed = true;
        })
        .catch((error) => {
          // Autoplay was prevented by the browser, handle accordingly
          console.error('Autoplay prevented: ', error);
        });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.playVideo();
  }

  
  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement) {
    // Check if the clicked element is the play button
    if (target.id === 'playVideoButton') {
      this.playVideo();
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: Event) {
    // Play the video when the user touches the screen inside the video container
    if (!this.videoPlayed && this.isTouchEventInsideContainer(event)) {
      this.playVideo();
    }
  }
  
  private isTouchEventInsideContainer(event: Event): boolean {
    const touch = (event as TouchEvent).touches[0];
    if (touch) {
      const containerRect = this.videoContainer.nativeElement.getBoundingClientRect();
      const touchX = touch.clientX;
      const touchY = touch.clientY;

      return (
        touchX >= containerRect.left &&
        touchX <= containerRect.right &&
        touchY >= containerRect.top &&
        touchY <= containerRect.bottom
      );
    }
    return false;
  }
}
