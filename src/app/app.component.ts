import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectiveExample';

  videos= [
    {title: 'My video 1', share: 415, likes: 257, dislikes: 12, thumbnail: 'assets/images/image1.jpg'},
    {title: 'My video 2', share: 215, likes: 325, dislikes: 12, thumbnail: 'assets/images/image2.jpg'},
    {title: 'My video 3', share: 513, likes: 105, dislikes: 12, thumbnail: 'assets/images/image3.jpg'}
  ]
  mostLikedVideo = this.getmostlikedVideo();

  getmostlikedVideo(){
    //we use a copy of array,because when we sort an array,sort method it also
    //update the original array and here I don't want to update original array
    let videoCopy = [...this.videos];
    //to create a copy we are using spread operator(...this.videos)
    //spread operator expands the elements of an array into it's individual elements,
    //then we a wrapping those individual elements inside squarebrackets
    return videoCopy.sort((curr, next) => next.likes - curr.likes)[0];
  }
}
